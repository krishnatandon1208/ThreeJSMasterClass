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

//Field of view (fov) is the first parameter of the camera and it has
//static value as of now.
//Sizes (Aspect Ratio)
const sizes = {
	width: 800,
	height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Adding camera to the scene
scene.add(camera);
