import * as THREE from 'three';

// --- 3D SCENE SETUP ---
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// --- OBJECTS ---
// 1. Stars
function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
}
Array(200).fill().forEach(addStar);

// 2. Floating Geometric Shapes
const geometry = new THREE.IcosahedronGeometry(10, 0); // Low poly look
const material = new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    wireframe: true,
});
const shape1 = new THREE.Mesh(geometry, material);
shape1.position.set(-15, 5, -10);
scene.add(shape1);

const material2 = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    wireframe: true,
});
const shape2 = new THREE.Mesh(geometry, material2);
shape2.position.set(20, -10, -20);
scene.add(shape2);

// --- LIGHTING ---
const pointLight = new THREE.PointLight(0xffffff, 2000);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight, ambientLight);

// --- ANIMATION ---
function animate() {
    requestAnimationFrame(animate);

    // Rotate shapes
    shape1.rotation.x += 0.002;
    shape1.rotation.y += 0.002;

    shape2.rotation.x -= 0.003;
    shape2.rotation.y -= 0.002;

    // Subtle camera movement based on scroll could go here

    renderer.render(scene, camera);
}

animate();

// --- RESIZE HANDLER ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- SCROLL ANIMATION ---
// Move camera slightly on scroll for parallax effect
document.body.onscroll = () => {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.01 + 30;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
};


// --- FORM HANDLING ---
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const statusText = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate loading
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    statusText.innerText = '';

    // Get data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form Data Collected:", data);

    // Simulate Network Request
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Message Sent!';
        statusText.style.color = '#4ade80'; // Green
        statusText.innerText = 'Thanks for reaching out! I will get back to you soon.';
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerText = 'Send Message';
            statusText.innerText = '';
        }, 3000);
    }, 1500);
});
