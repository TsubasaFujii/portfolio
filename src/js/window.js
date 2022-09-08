export function scrollTo(id) {
    const target = document.querySelector(id);
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}