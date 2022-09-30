import React, { useRef } from 'react';

import { GlobalStyles } from './components/styles/GlobalStyles.styled';
import Theme from './components/styles/Theme.styled';
import { ThemeContext } from './components/styles/ContextProviders';

import { getPointingMethod } from './js/device';

import { useSwitchTheme } from './hooks/theme';
import { useTrackViewport } from './hooks/viewport';
import { links } from './data/content';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

function App() {
    const headerRef = useRef(null);
    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;
    const { currentTheme, toggleTheme } = useSwitchTheme();
    const { pointingMethod } = getPointingMethod();

    return (
        <Theme theme={currentTheme}>
            <ThemeContext.Provider value={{ currentTheme, toggleTheme, pointingMethod }}>
                <GlobalStyles currentTheme={currentTheme} />
                <Header ref={headerRef} current={currentSection} links={links} />
                <Main />
                <Footer contactRef={contactRef} />
            </ThemeContext.Provider>
        </Theme>
    );
}

export default App;
