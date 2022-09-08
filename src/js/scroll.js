export function scrollTo(id) {
    const target = document.querySelector(id);
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}