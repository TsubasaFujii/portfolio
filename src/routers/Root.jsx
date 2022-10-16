import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

import { useTrackViewport } from '../hooks/useTrackViewport';
import { ThemeProvider } from '../context';
import { links } from '../data/content';

import { GlobalStyles } from '../components/styles/GlobalStyles';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Root() {
    const headerRef = useRef(null);
    const { currentSection } = useTrackViewport(links);
    return (

        <ThemeProvider>
            <GlobalStyles />
            <Header ref={headerRef} current={currentSection} links={links} />
            <Outlet />
            <Footer />
        </ThemeProvider>
    )
}