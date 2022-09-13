import React from 'react';
import { GlobalStyles } from './components/styles/GlobalStyles.styled';
import Theme from './components/styles/Theme.styled';
import { ThemeContext } from './components/styles/ContextProviders';
import { useSwitchTheme } from './hooks/theme';
import { getPointingMethod } from './js/device';

import Main from './components/layouts/Main';

function App() {
    const { currentTheme, toggleTheme } = useSwitchTheme();
    const { pointingMethod } = getPointingMethod();

    return (
        <Theme theme={currentTheme}>
            <ThemeContext.Provider value={{ currentTheme, toggleTheme, pointingMethod }}>
                <GlobalStyles />
                <Main />
            </ThemeContext.Provider>
        </Theme>
    );
}

export default App;
