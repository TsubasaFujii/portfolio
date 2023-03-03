import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

import { useTrackViewport } from '../hooks/useTrackViewport';
import { links } from '../static/content.js';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Layout() {
    const headerRef = useRef(null);
    const { currentSection } = useTrackViewport(links);

    return (
        <>
            <Header ref={headerRef} current={currentSection} links={links} />
            <Outlet />
            <Footer />
        </>
    )
}