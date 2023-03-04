import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { devices } from '../static/viewport.js';

export function useHideHeaderByScrollDown() {
    // For smaller screen
    const [y, setY] = useState(0);
    // -1: up, 0: page top, 1: down
    const [direction, setDirection] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const location = useLocation();

    useEffect(() => {
        function detectDirection() {
            const scrolled = window.pageYOffset;
            // Only always-show at the top of the index page
            if (location.pathname === '/' && scrolled < window.innerHeight) {
                setDirection(0);
            } else if (scrolled > y) {
                setDirection(1);
            } else if (scrolled < y) {
                setDirection(-1);
            }
            setY(scrolled);
        }

        window.addEventListener('scroll', detectDirection);
        return () => window.removeEventListener('scroll', detectDirection);
    }, [y]);

    useEffect(() => {
        // Show always for larger screens
        function handleResize() {
            if (matchMedia(devices.mobileL).matches) {
                setIsHidden(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Ignore if larger screen
        if (matchMedia(devices.mobileL).matches) return;

        // Show always at the top
        if (direction < 0) {
            setIsHidden(false);
        } else if (direction > 0) {
            setIsHidden(true);
        }
    }, [direction]);

    return {
        isHidden
    }
}