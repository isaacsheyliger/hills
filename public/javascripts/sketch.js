import * as THREE from 'three';
import { createScene } from './setup.js';

// #region SCENE
const sc = createScene(true);

sc.camera.position.set(0, 0, 5000);

sc.controls.enableDamping = true;
sc.controls.enableKeys = false;
sc.controls.enablePan = false;
// #endregion

// #region VIZ

// #endregion

// #region ANIMATE
let clock = new THREE.Clock();

function animate () {
    uniforms.u_time.value = clock.getElapsedTime();
    sc.renderer.render(sc.scene, sc.camera);
}
sc.renderer.setAnimationLoop(animate);
// #endregion

// #region HELPER FUNCTIONS

// #endregion