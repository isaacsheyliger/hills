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

/**
 * Creates a 3D terrain mesh
 * @param {number} width - the width of the terrain to generate
 * @param {number} depth - the depth of the terrain to generate 
 * @param {number} spacingX - how many rooms there will be between the individual vertices on the x-axis
 * @param {number} spacingZ - how many spaces there will be between the individual vertices on the z-axis
 * @param {number} height - the maximum height of the terrain
 */
function create3DTerrain(width, depth, spacingX, spacingZ, height) {
    // create individual vertices
    var geometry = new THREE.BufferGeometry();
    for (var z = 0; z < depth; z++) {
        for (var x = 0; x < width; x++) {
            var vertex = new THREE.Vector3(
                x * spacingX,
                Math.random() * height,
                z * spacingZ
            );
            geometry.vertices.push(vertex);
        }
    }

    // create faces

    // create mesh and add to scene
}

// #endregion

// #region ANIMATE

function animate () {
    sc.renderer.render(sc.scene, sc.camera);
}
sc.renderer.setAnimationLoop(animate);

// #endregion

// #region HELPER FUNCTIONS



// #endregion