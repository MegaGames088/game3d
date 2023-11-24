var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });

var geometry = new THREE.BoxGeometry(100, 100, 100);
var material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 500;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

window.addEventListener("resize", function() {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
