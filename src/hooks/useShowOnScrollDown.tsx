import { devices } from '@/static/viewport';
import { useRouter } from 'next/router.js';
import { useEffect, useState } from 'react';

export default function useShowOnScrollDown() {
    // For smaller screen
    const [previousPositionY, setPreviousPositionY] = useState(0);
    // -1: up, 0: page top, 1: down
    const [direction, setDirection] = useState(0);
    const [isShown, setIsShown] = useState(true);
    const { pathname } = useRouter();

    useEffect(() => {
        // Ignore if larger screen
        if (matchMedia(devices.mobileL).matches) return;

        function detectDirection(): void {
            const scrolled = window.pageYOffset;
            // Always show if it's in hero on the index page
            if (pathname === '/' && scrolled < window.innerHeight) {
                setDirection(0);
            } else if (scrolled > previousPositionY) {
                setDirection(1);
            } else if (scrolled < previousPositionY) {
                setDirection(-1);
            }
            setPreviousPositionY(scrolled);
        }

        window.addEventListener('scroll', detectDirection);
        return () => window.removeEventListener('scroll', detectDirection);
    }, [previousPositionY, pathname]);

    useEffect(() => {
        // Ignore if larger screen
        if (matchMedia(devices.mobileL).matches) return;

        // Show always at the top
        if (direction < 0) {
            setIsShown(true);
        } else if (direction > 0) {
            setIsShown(false);
        }
    }, [direction]);

    return {
        isShown
    }
}