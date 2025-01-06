const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas to fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas(); // Set canvas size on initial load

// Store mouse position
let mouse = {
    x: null,
    y: null,
    radius: 150 // Interaction radius
};

// Update mouse position on mouse move
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Create particles
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Draw particle on canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Update particle position and interaction with mouse
    update() {
        // Check if particle is within the mouse radius
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            // Slowly attract particles to the mouse with subtle movement
            this.x += dx * 0.02;
            this.y += dy * 0.02;
        } else {
            // Natural particle movement
            this.x += this.directionX;
            this.y += this.directionY;
        }

        // Reverse direction if the particle hits the canvas boundary
        if (this.x < 0 || this.x > canvas.width) {
            this.directionX = -this.directionX;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.directionY = -this.directionY;
        }

        // Draw the particle
        this.draw();
    }
}

// Initialize particles
let particlesArray = [];

function init() {
    particlesArray = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = '#ff3131';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle) => {
        particle.update();
    });
}

// Ensure canvas resizes correctly and reinitialize particles
window.addEventListener('resize', () => {
    resizeCanvas();  // Resize the canvas to fit the window
    init();  // Reinitialize particles to fit new canvas size
});

// Initialize particles and start animation
init();
animate();
