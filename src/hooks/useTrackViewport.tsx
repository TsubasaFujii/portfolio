import { links } from '@/static/content';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useTrackViewport() {
    // links[0] is default
    const [currentSection, setCurrentSection] = useState(0);
    const { pathname } = useRouter();

    useEffect(() => {
        const currentPage = links.map(link => link.route).indexOf(pathname.slice(1));
        if (currentPage < 0) return;
        setCurrentSection(currentPage);
    }, [pathname]);

    return {
        currentSection,
    }
}