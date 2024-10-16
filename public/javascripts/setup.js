import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createScene(orbitControls = false) {
    // Set up scene
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const d = 20
    const aspect = canvasWidth / canvasHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 10000);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvasWidth, canvasHeight);
    document.body.appendChild(renderer.domElement);

    let controls;
    orbitControls ? controls = new OrbitControls(camera, renderer.domElement) : controls = null;

    camera.position.set(0,0,d);

    controls ? controls.update() : null;

    return { scene, camera, renderer, controls };
}