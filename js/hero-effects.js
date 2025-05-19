/**
 * Gourmet Haven Restaurant Website
 * Hero Section Effects JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero effects
    initHeroEffects();
});

/**
 * Initialize hero section effects
 */
function initHeroEffects() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!hero || !heroContent) return;
    
    // Add parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const opacity = 1 - (scrollPosition * 0.002);
        const scale = 1 + (scrollPosition * 0.0005);
        const translateY = scrollPosition * 0.4;
        
        // Apply parallax effect to hero background
        hero.style.setProperty('--scroll-y', `${translateY}px`);
        
        // Scale up background slightly on scroll for depth effect
        if (scrollPosition < 600) {
            hero.style.setProperty('--scale', scale);
            heroContent.style.opacity = Math.max(0, opacity);
            heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    });
    
    // Add subtle animation to hero content
    setTimeout(() => {
        heroContent.classList.add('animated');
    }, 300);
    
    // Add text reveal animation
    const heroHeading = hero.querySelector('h1');
    const heroText = hero.querySelector('p');
    const heroButton = hero.querySelector('.btn');
    
    if (heroHeading && heroText && heroButton) {
        // Split text into spans for letter animation
        heroHeading.innerHTML = heroHeading.textContent.split('').map(char => {
            if (char === ' ') return ' ';
            return `<span>${char}</span>`;
        }).join('');
        
        // Animate each letter with delay
        const letters = heroHeading.querySelectorAll('span');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${0.1 + (index * 0.03)}s`;
            letter.classList.add('animate-letter');
        });
        
        // Add animation classes with delays
        heroText.style.animationDelay = '0.8s';
        heroText.classList.add('animate-text');
        
        heroButton.style.animationDelay = '1.2s';
        heroButton.classList.add('animate-button');
    }
    
    // Add subtle movement on mouse move for parallax effect
    hero.addEventListener('mousemove', function(e) {
        const xPos = (e.clientX / window.innerWidth) - 0.5;
        const yPos = (e.clientY / window.innerHeight) - 0.5;
        
        hero.style.setProperty('--mouse-x', xPos * 20 + 'px');
        hero.style.setProperty('--mouse-y', yPos * 20 + 'px');
    });
}

// Add CSS for the animations
const style = document.createElement('style');
style.textContent = `
    .hero::before {
        transform: translate(var(--mouse-x, 0), var(--mouse-y, 0)) scale(var(--scale, 1.05));
    }
    
    .animate-letter {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.5s forwards;
    }
    
    .animate-text {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s forwards;
    }
    
    .animate-button {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
