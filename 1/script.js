//console.log('Hello Three.js');
//Testing ThreeJS

//console.log(THREE);

//Creating our first scene using THREE js classes
const scene = new THREE.Scene();

//Creating a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
