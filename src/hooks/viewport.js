import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

export function useTrackViewport(links) {
    // links[0] is default
    const [currentSection, setCurrentSection] = useState(0);
    const location = useLocation();

    const {refs, entries} = links.reduce((result, current, index) => {
        // Return ref only for elements
        if(current.route.includes('#')) {
            const { ref, entry } = useInView({
                threshold: 0.45,
            });
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