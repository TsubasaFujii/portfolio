import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { links } from '../../data/content';
import { useTrackViewport } from '../../hooks/viewport';

import { Header } from './Header';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Footer from './Footer';

export default function Page() {
    const headerRef = useRef(null);

    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;

    return (
        <>
            <Header ref={headerRef} current={currentSection} links={links} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer contactRef={contactRef} />
        </>
    )
}
