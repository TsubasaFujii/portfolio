import { useRef } from 'react';

import { ThemeProvider } from './context/ThemeContext';
import Theme from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/GlobalStyles.styled';

import { useTrackViewport } from './hooks/viewport';
import { links } from './data/content';

import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

function App() {
    const headerRef = useRef(null);
    const { currentSection, refs } = useTrackViewport(links);
    const { contactRef } = refs;

    return (
        <ThemeProvider>
            <Theme>
                <GlobalStyles />
                <Header ref={headerRef} current={currentSection} links={links} />
                <Main />
                <Footer contactRef={contactRef} />
            </Theme>
        </ThemeProvider>
    );
}

export default App;
