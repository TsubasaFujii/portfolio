import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyles } from './components/styles/GlobalStyles.styled';
import Theme from './components/styles/Theme.styled';
import { ThemeContext } from './components/styles/ContextProviders';
import { useSwitchTheme } from './hooks/theme';
import { getPointingMethod } from './js/device';

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { useTrackViewport } from './hooks/viewport';
import { links } from './data/content';

function App() {
    const [headerHeight, setHeaderHeight] = useState(null);
    //const [currentSection, setCurrentSection] = useState(0);
    const headerRef = useRef(null);

    const { currentTheme, toggleTheme } = useSwitchTheme();
    const { pointingMethod } = getPointingMethod();

    useEffect(() => {
        if (!headerRef.current) return;
        function handleResize() {
            setHeaderHeight(headerRef.current.clientHeight);
        }

        setHeaderHeight(headerRef.current.clientHeight);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [headerRef]);

    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;

    return (
        <Theme theme={currentTheme}>
            <ThemeContext.Provider value={{ currentTheme, toggleTheme, pointingMethod }}>
                <GlobalStyles />
                <Header ref={headerRef} current={currentSection} links={links} />
                <Routes>
                    <Route path="/" element={<Home headerHeight={headerHeight} />} />
                </Routes>
                <Footer contactRef={contactRef} />
            </ThemeContext.Provider>
        </Theme>
    );
}

export default App;
