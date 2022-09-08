import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const devices = {
    mobileL: `(min-width: ${breakpoints.sm}px)`,
    tablet: `(min-width: ${breakpoints.md}px)`,
    desktop: `(min-width: ${breakpoints.lg}px)`,
    desktopL: `(min-width: ${breakpoints.xl}px)`,
};


function getScreenSize() {
    const width = window.innerWidth;
    const {sm, md, lg} = breakpoints;
    if (width < sm) {
        return 'sm';
    } else if (width < md) {
        return 'md';
    } else if (width < lg) {
        return 'lg';
    } else {
        return 'xl';
    }
}

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSize);

    const handleResize = useCallback(() => {
        const currentScreenSize = getScreenSize();

        if (screenSize === currentScreenSize) return;

        setScreenSize(currentScreenSize);
    }, [screenSize]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.addEventListener('resize', handleResize);
    }, [handleResize]);

    return {
        screenSize,
    }
}

export function useTrackViewport(links) {
    // links[0] is default
    const [currentSection, setCurrentSection] = useState(0);
    const location = useLocation();

    const {refs, entries} = links.reduce((result, current, index) => {
        // Return ref only for elements
        if(current.route.includes('#')) {
            const { ref, entry } = useInView();
            result.refs[`${current.name.toLowerCase()}Ref`] = ref;
            result.entries.push({
                isIntersecting: entry?.isIntersecting,
                index
            });
            return result; 
        }
        return result;
    }, {
        refs: {}, entries: []
    });

    useEffect(() => {
        const currentElement = entries.filter(entry => entry.isIntersecting)[0];
        if (currentElement) {
            setCurrentSection(currentElement.index);
        } else {
            const currentPage = links.map(link => link.route).indexOf(location.pathname);
            if(currentPage < 0) return;
            setCurrentSection(currentPage);
        }
    }, [entries, location]);

    return {
        currentSection,
        refs
    }
}