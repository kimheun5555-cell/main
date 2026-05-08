document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('#who figure');
    if (figures.length === 0) return;

    if (!('IntersectionObserver' in window)) {
        figures.forEach(f => f.classList.add('on'));
        return;
    }

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    figures.forEach(f => io.observe(f));
});