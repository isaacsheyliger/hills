import * as THREE from 'three';
import { createScene } from './setup.js';

const sc = init();

sc.renderer.setAnimationLoop(animate(sc));

// #region HELPER FUNCTIONS

function init() {
    const sc = createScene(true);
    sc.camera.position.set(0, 0, 5000);

    sc.controls.enableDamping = true;
    sc.controls.enableKeys = false;
    sc.controls.enablePan = false;
    return sc;
}

function animate(sc) {
    sc.renderer.render(sc.scene, sc.camera);
}

/**
 * getHighPoint - returns the highest point in a geometry
 * @param {object} geometry - the geometry to analyze
 * @returns {number} - the highest point in the geometry
 */
function getHighPoint(geometry) {
    // get the highest point in the geometry
    let highPoint = 0;
    console.log(geometry.vertices);
    return highPoint;
}

/**
 * create3DTerrain - Creates a 3D terrain mesh object
 * @param {number} width - the width of the terrain to generate
 * @param {number} depth - the depth of the terrain to generate 
 * @param {number} spacingX - how many rooms there will be between the individual vertices on the x-axis
 * @param {number} spacingZ - how many spaces there will be between the individual vertices on the z-axis
 * @param {number} height - the maximum height of the terrain
 */
function create3DTerrain(width, depth, spacingX, spacingZ, height) {
    var geometry = new THREE.BufferGeometry();

    // specify vertex positions
    const vArr = new Float32Array([]);;
    for (var z = 0; z < depth; z++) {
        for (var x = 0; x < width; x++) {
            vArr.push(
                x * spacingX,
                Math.random() * height,
                z * spacingZ
            );
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vArr, 3));

    // color the the faces based on the height of the vertices
    const colors = new Float32Array([]);


    /* PRE THREE.JS R125 LOGIC
    // these steps are unnecessary with BufferGeometry, 
    // but the logic is worth understanding for general 3D rendering applications
    
    // specify vertex positions
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
    for (var z = 0; z < depth - 1; z++) {
        for (var x = 0; x < width - 1; x++) {
            // we need to point to the position in the array
            // a - - b
            // | / |
            // c - - d
            var a = x + z * width;
            var b = (x + 1) + (z * width);
            var c = x + ((z + 1) * width);
            var d = (x + 1) + ((z + 1) * width);

            var face1 = new THREE.Face3(b, a, c);
            var face2 = new THREE.Face3(c, d, b);
            geometry.faces.push(face1);
            geometry.faces.push(face2);
        }
    }
    // create mesh and add to scene
    
    */
}

/**
 * Creates a 3D terrain mesh with a color gradient
 * @param {object} geometry - the buffer geometry for the terrain mesh
 */
function colorMesh(geometry) {

    var numFaces = geometry.getAttribute('position').count / 3,
    colors = [],
    object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: true }));
}

// #endregion