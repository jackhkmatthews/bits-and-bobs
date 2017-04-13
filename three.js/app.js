var THREE, document, window;

//RENDERER
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(0x000010);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
// camera.lookAt(new THREE.Vector3(0, 0, 0));

var controls = new THREE.OrbitControls( camera, renderer.domElement );

//SCENE
var scene = new THREE.Scene();

//GRID
var gridHelper = new THREE.GridHelper(50, 1);
scene.add( gridHelper );

//AXIS
var axisHelper = new THREE.AxisHelper(50);
scene.add( axisHelper );

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
var light1 = new THREE.PointLight(0xffffff, 0.5);
light1.position.set(10, 10, 10);
scene.add(light1);

var container = new THREE.Object3D();
container.position.set(10, 10, 10);
scene.add(container);

//CUBE
var geometry = new THREE.CubeGeometry(10, 10, 10);
var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(30, 30, 0);
container.add(mesh);
// mesh.rotation.x += 1;
// mesh.rotation.y += 0.7;

//LINE
var lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff});
var lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 20, 0));
lineGeometry.vertices.push(new THREE.Vector3(20, 20, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 20, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 30, 0));
lineGeometry.vertices.push(new THREE.Vector3(30, 30, 0));
var line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

//ANIMATION
requestAnimationFrame(render);

function render(){
	// line.rotation.x += 0.01;
	line.rotation.y += 0.1;
	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += 0.01;
	container.rotation.y += 0.01;
	renderer.render(scene, camera);
	controls.update();
	requestAnimationFrame(render);
}
