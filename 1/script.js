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
//Set camera position (backward)
camera.position.z = 3; //3 is dependent on the object size.
camera.position.x = 1;
camera.position.y = 1;
//Adding camera to the scene
scene.add(camera);

//Renderer

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//Calling the render method with scene and camera as parameters on the renderer.
renderer.render(scene, camera);
