import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { links } from '../../data/content';
import { useTrackViewport } from '../../hooks/viewport';

import { Header } from './Header';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Footer from './Footer';

export default function Page() {
    const [headerHeight, setHeaderHeight] = useState(null);
    const headerRef = useRef(null);

    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;

    useEffect(() => {
        if (!headerRef.current) return;
        function handleResize() {
            setHeaderHeight(headerRef.current.clientHeight);
        }

        setHeaderHeight(headerRef.current.clientHeight);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headerRef]);

    return (
        <>
            <Header ref={headerRef} current={currentSection} links={links} />
            <Routes>
                <Route path="/" element={<Home headerHeight={headerHeight} />} />
                <Route path="/projects" element={<Projects headerHeight={headerHeight} />} />
            </Routes>
            <Footer contactRef={contactRef} />
        </>
    )
}
