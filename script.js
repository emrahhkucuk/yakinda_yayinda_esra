// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-rain');
        this.ctx = this.canvas.getContext('2d');
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        
        this.init();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = new Array(this.columns).fill(1);
        
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = new Array(this.columns).fill(1);
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Glitch Controller
class GlitchController {
    constructor() {
        this.glitchText = document.querySelector('.glitch-text');
        this.init();
    }
    
    init() {
        setInterval(() => {
            this.triggerGlitch();
        }, 3000);
    }
    
    triggerGlitch() {
        this.glitchText.style.animation = 'none';
        setTimeout(() => {
            this.glitchText.style.animation = 'glitch 0.3s ease-in-out';
        }, 10);
    }
}

// Orb Controller
class OrbController {
    constructor() {
        this.orb = document.querySelector('.central-orb');
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            this.orb.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });
        
        // Random pulse effect
        setInterval(() => {
            this.orb.style.animation = 'none';
            setTimeout(() => {
                this.orb.style.animation = 'pulseExpand 0.5s ease-out';
            }, 10);
        }, 5000);
    }
}

// Status Controller
class StatusController {
    constructor() {
        this.statusValues = document.querySelectorAll('.status-value');
        this.statuses = ['INITIALIZING', 'LOADING', 'PROCESSING', 'READY'];
        this.currentStatus = 0;
        this.init();
    }
    
    init() {
        setInterval(() => {
            this.updateStatus();
        }, 2000);
    }
    
    updateStatus() {
        this.statusValues[0].textContent = this.statuses[this.currentStatus];
        this.currentStatus = (this.currentStatus + 1) % this.statuses.length;
        
        // Add blink effect
        this.statusValues[0].style.animation = 'none';
        setTimeout(() => {
            this.statusValues[0].style.animation = 'statusBlink 0.5s ease-in-out';
        }, 10);
    }
}

// Hex Grid Controller
class HexGridController {
    constructor() {
        this.hexItems = document.querySelectorAll('.hex-item');
        this.init();
    }
    
    init() {
        this.hexItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                this.hexItems.forEach((otherItem, otherIndex) => {
                    if (otherIndex !== index) {
                        otherItem.style.opacity = '0.3';
                    }
                });
            });
            
            item.addEventListener('mouseleave', () => {
                this.hexItems.forEach(otherItem => {
                    otherItem.style.opacity = '1';
                });
            });
            
            item.addEventListener('click', () => {
                this.triggerHexEffect(item);
            });
        });
    }
    
    triggerHexEffect(item) {
        item.style.animation = 'none';
        setTimeout(() => {
            item.style.animation = 'hexGlow 0.6s ease-in-out';
        }, 10);
    }
}

// Loading Controller
class LoadingController {
    constructor() {
        this.loadingText = document.querySelector('.loading-text');
        this.loadingTexts = [
            'LOADING SYSTEM...',
            'INITIALIZING COMPONENTS...',
            'ESTABLISHING CONNECTION...',
            'SYSTEM READY...'
        ];
        this.currentText = 0;
        this.init();
    }
    
    init() {
        setInterval(() => {
            this.updateLoadingText();
        }, 1500);
    }
    
    updateLoadingText() {
        this.loadingText.textContent = this.loadingTexts[this.currentText];
        this.currentText = (this.currentText + 1) % this.loadingTexts.length;
        
        // Add blink effect
        this.loadingText.style.animation = 'none';
        setTimeout(() => {
            this.loadingText.style.animation = 'textBlink 0.5s ease-in-out';
        }, 10);
    }
}

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = document.querySelectorAll('.particle');
        this.init();
    }
    
    init() {
        this.particles.forEach((particle, index) => {
            setInterval(() => {
                this.triggerParticleEffect(particle);
            }, 3000 + (index * 500));
        });
    }
    
    triggerParticleEffect(particle) {
        particle.style.animation = 'none';
        setTimeout(() => {
            particle.style.animation = 'particleFloat 2s ease-in-out';
        }, 10);
    }
}

// Social Controller
class SocialController {
    constructor() {
        this.socialLinks = document.querySelectorAll('.social-link');
        this.init();
    }
    
    init() {
        this.socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.triggerSocialEffect(link);
            });
        });
    }
    
    triggerSocialEffect(link) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 255, 65, 0.3);
            transform: scale(0);
            animation: rippleExpand 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = link.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        link.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Main App Controller
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Initialize all controllers
        new MatrixRain();
        new GlitchController();
        new OrbController();
        new StatusController();
        new HexGridController();
        new LoadingController();
        new ParticleSystem();
        new SocialController();
        
        // Add page load effects
        this.addPageLoadEffects();
        
        // Add keyboard interactions
        this.addKeyboardInteractions();
        
        // Add custom cursor
        this.addCustomCursor();
    }
    
    addPageLoadEffects() {
        const elements = document.querySelectorAll('.glitch-container, .central-orb, .status-display, .hex-grid, .bottom-info');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
    
    addKeyboardInteractions() {
        document.addEventListener('keydown', (e) => {
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    this.triggerOrbPulse();
                    break;
                case 'Enter':
                    e.preventDefault();
                    this.triggerGlitch();
                    break;
                case 'KeyR':
                    e.preventDefault();
                    this.resetAnimations();
                    break;
            }
        });
    }
    
    triggerOrbPulse() {
        const orb = document.querySelector('.central-orb');
        orb.style.animation = 'none';
        setTimeout(() => {
            orb.style.animation = 'pulseExpand 0.5s ease-out';
        }, 10);
    }
    
    triggerGlitch() {
        const glitchText = document.querySelector('.glitch-text');
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = 'glitch 0.3s ease-in-out';
        }, 10);
    }
    
    resetAnimations() {
        location.reload();
    }
    
    addCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Hide cursor on mobile
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulseExpand {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes cursorFade {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to main content
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.add('loading');
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to social links
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(244, 114, 182, 0.2);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style2 = document.createElement('style');
style2.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style2);

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.social-link').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.hero-section, .footer').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add window resize handler for responsive design
window.addEventListener('resize', function() {
    // Recalculate any dynamic positioning if needed
    const backgroundElements = document.querySelectorAll('.bg-circle, .bg-line');
    backgroundElements.forEach(element => {
        // Reset any transform modifications
        element.style.transform = element.style.transform.replace(/translate\([^)]+\)/g, '');
    });
});