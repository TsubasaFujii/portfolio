import { useRef } from 'react';

import { ThemeProvider } from './context/ThemeProvider';
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
            <GlobalStyles />
            <Header ref={headerRef} current={currentSection} links={links} />
            <Main />
            <Footer contactRef={contactRef} />
        </ThemeProvider>
    );
}

export default App;
