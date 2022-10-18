import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useTrackViewport(links) {
    // links[0] is default
    const [currentSection, setCurrentSection] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const currentPage = links.map(link => link.route).indexOf(location.pathname.slice(1));
        if(currentPage < 0) return;
        setCurrentSection(currentPage);
    }, [location]);

    return {
        currentSection,
    }
}