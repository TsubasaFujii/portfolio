import { useCallback, useEffect, useState } from "react";

const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
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