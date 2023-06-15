export function scrollTo(id: string): void {
    const target = document.querySelector(id);

    if (!target) return;

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

export function scrollToTop(): void {
    window.scrollTo({
        top: 0,
    });
}

export function openInNewTabTo(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
}