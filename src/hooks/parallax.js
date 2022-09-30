import { useEffect, useRef, useState } from 'react';

function getYPosition(element) {
    const vpRelative = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return vpRelative + scrollTop;
}

export function useParallaxElement(arg) {
    const [startAt, setStartAt] = useState(null);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const targetRef = useRef(null);
    const {offset = 50, speed = 0.3} = arg;

    useEffect(() => {
        function updateViewportSize() {
            setStartAt(getYPosition(targetRef.current) - offset);
            setViewportHeight(window.innerHeight);
        }

        if (!targetRef.current) return;
        setStartAt(getYPosition(targetRef.current) - offset);
        window.addEventListener('resize', updateViewportSize);
        return () => window.removeEventListener('resize', updateViewportSize);
    }, [offset]);

    useEffect(() => {
        function handleScroll() {
            const scrolled = document.documentElement.scrollTop;
            if(scrolled + viewportHeight >= startAt) {
                let translate = 0;
                if(startAt < viewportHeight) {
                    translate = scrolled * speed
                } else {
                    translate = (scrolled - startAt + viewportHeight) * speed
                }
                targetRef.current.style.transform = `translate(${translate*0.3}px, ${translate}px)`;
            } else {
                return;
            }
        }

        if (!targetRef.current) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed, startAt, viewportHeight]);

    return {
        targetRef,
    }
}