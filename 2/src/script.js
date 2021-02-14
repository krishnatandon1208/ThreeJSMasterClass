import './style.css';

import * as THREE from 'three';

//scene
const scene = new THREE.Scene();

//geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff00cccc });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Sizes
const sizes = {
	width: 800,
	height: 600
};

//Camera
const fov = 45;
const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio);
camera.position.z = 5;
scene.add(camera);

//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});

//Set the size of the renderer
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
