document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after showing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements that need to animate in
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });

    // Simple interaction for tables: highlight rows on hover
    const dataRows = document.querySelectorAll('tbody tr');
    dataRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transform = 'scale(1.02)';
            row.style.transition = 'transform 0.2s';
        });
        row.addEventListener('mouseleave', () => {
            row.style.transform = 'scale(1)';
        });
    });
});
