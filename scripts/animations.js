document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM selections
    const heroSection = document.querySelector('.hero');
    const flavorCards = document.querySelectorAll('.flavor-card');
    
    // Smooth scrolling with event delegation
    document.body.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const targetElement = document.querySelector(anchor.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        
        // Handle order buttons with delegation
        if (e.target.classList.contains('btn')) {
            alert('Coming soon! We are working on our ordering system.');
        }
    });

    // Optimize flavor card animations
    flavorCards.forEach(card => {
        // Using CSS classes for better performance
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });

    // Throttled scroll handler for parallax
    let lastScrollTime = 0;
    const scrollThrottle = 10; // ms between scroll updates
    
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScrollTime < scrollThrottle) return;
        
        lastScrollTime = now;
        const scrollPosition = window.pageYOffset;
        
        if (heroSection) {
            // Use transform for better performance
            heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    }, { passive: true }); // Add passive flag for better scroll performance
});