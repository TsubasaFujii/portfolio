import { useEffect, useRef, useState } from "react";

function getYPosition(element) {
    const vpRelative = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return vpRelative + scrollTop;
}

export function useParallaxElement(arg) {
    const offset = arg?.offset || 50;
    const speed = arg?.speed || 0.3;

    const [startAt, setStartAt] = useState(null);
    const target = useRef(null);

    const mobileBreakpoint = 768;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    useEffect(() => {
        function updateViewportSize() {
            const currentWidth = window.innerWidth;
            const currentHeight = window.innerHeight
            
            if (viewportWidth !== currentWidth) {
                viewportWidth = currentWidth;
            }
            if (viewportHeight !== currentHeight){
                viewportHeight = currentHeight;
                setStartAt(getYPosition(target.current) - offset);
            }
        }

        if (!target.current) return;
        setStartAt(getYPosition(target.current) - offset);
        window.addEventListener('resize', updateViewportSize);
        return () => window.removeEventListener('resize', updateViewportSize);
    }, [target.current]);

    useEffect(() => {
        function handleScroll() {
            const scrolled = document.documentElement.scrollTop;
            if(scrolled + viewportHeight >= startAt) {
                if(viewportWidth <= mobileBreakpoint) {
                    speed = speed / 2
                }
                let translateY = 0;
                if(startAt < viewportHeight) {
                    translateY = scrolled * speed
                } else {
                    translateY = (scrolled - startAt + viewportHeight) * speed
                }
                target.current.style.transform = `translateX(${translateY}px)`;
            } else {
                return;
            }
        }

        if (!target.current) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [target.current]);

    return {
        target,
    }
}