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
    });
}

export function openInNewTabTo(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}