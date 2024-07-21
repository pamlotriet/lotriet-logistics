import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TranslateModule, ButtonComponent, CommonModule, NgOptimizedImage],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  private model: THREE.Object3D | undefined; // Store the loaded model

  ngAfterViewInit(): void {
    // Create the scene after view initialization
    this.createThreeJsScene();
  }

  createThreeJsScene(): void {
    const canvas = document.getElementById('canvas-box') as HTMLCanvasElement;

    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 10; // Adjust camera position if needed

    const renderer = new THREE.WebGLRenderer({ canvas });
    this.updateRendererSize(renderer); // Set initial size

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Brighter ambient light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5); // Brighter point light
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      'assets/images/earth/scene.gltf', // Replace with the path to your GLTF model
      (gltf: GLTF) => {
        this.model = gltf.scene; // Save the loaded model
        scene.add(this.model);
        this.model.position.set(0, 0, 0); // Set position if needed

        // Set initial scale of the model
        this.setScale();
      },
      undefined,
      (err: unknown) => {
        if (err instanceof Error) {
          console.error('Error loading GLTF model:', err.message);
        } else {
          console.error('Error loading GLTF model:', err);
        }
      },
    );

    // Handle window resize and fullscreen change
    const handleResize = () => {
      this.updateRendererSize(renderer);
      camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
      camera.updateProjectionMatrix();
      this.setScale(); // Adjust scale on resize
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('fullscreenchange', handleResize); // Handle fullscreen changes

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const rotationSpeed = 0.3; // Adjust this value to make the rotation slower or faster

      // Rotate the model on the Y-axis only if it exists
      if (this.model) {
        this.model.rotation.y = elapsedTime * rotationSpeed; // Slow down rotation by adjusting rotationSpeed
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
    handleResize(); // Initial call to set the correct size
  }

  // Update renderer size based on container size
  private updateRendererSize(renderer: THREE.WebGLRenderer) {
    const container = document.querySelector('#canvas') as HTMLDivElement;

    if (container) {
      // Get the dimensions of the container element
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Set the renderer size based on the container dimensions
      renderer.setSize(width, height);
    }
  }

  // Set the scale of the model based on screen size
  private setScale() {
    if (this.model) {
      const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
      const scaleFactor = isMobile ? 3 : 7; // Scale for mobile vs larger screens
      this.model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  }
}
