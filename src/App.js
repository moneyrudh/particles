import React, { useRef, useEffect } from 'react';
import './index.css';

function App() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particlesArray = [];
        const numberOfParticles = 500;
        const repulsionRadius = 100;
        const repulsionStrength = 2;
        const zoomFactor = 1.5;

        class Particle {
            constructor(x, y, size, color) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = size;
                this.baseSize = size;
                this.color = color;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update(mouse) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (repulsionRadius - distance) / repulsionRadius;
                let directionX = forceDirectionX * force * this.density * repulsionStrength;
                let directionY = forceDirectionY * force * this.density * repulsionStrength;

                if (distance < repulsionRadius && mouse.x !== null && mouse.y !== null) {
                    this.x -= directionX;
                    this.y -= directionY;
                    this.size = this.baseSize * zoomFactor;
                } else {
                    // Return to base position smoothly
                    let dx = this.baseX - this.x;
                    let dy = this.baseY - this.y;
                    this.x += dx / 10;
                    this.y += dy / 10;
                    this.size = this.baseSize;
                }

                this.draw();
            }
        }

        function init() {
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 5) + 1;
                let x = (Math.random() * ((canvas.width - size * 2)) + size * 2);
                let y = (Math.random() * ((canvas.height - size * 2)) + size * 2);
                let color = 'white';
                particlesArray.push(new Particle(x, y, size, color));
            }
        }

        init();

        let mouse = {
            x: null,
            y: null
        }

        canvas.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update(mouse);
            }
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
    }, []);

    return (
        <div className="App">
            <canvas
                id="particle-canvas"
                ref={canvasRef}
            />
        </div>
    );
}

export default App;