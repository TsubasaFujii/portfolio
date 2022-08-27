import { GlobalStyles } from "./components/styles/GlobalStyles.styled";
import Theme from "./components/styles/Theme.styled";
import { ScreenSizeContext, ThemeContext } from './components/styles/ContextProviders';
import { useSwitchTheme } from "./hooks/theme";
import { useScreenSize } from "./hooks/viewport";

import Home from "./pages/Home";


function App() {
    const { currentTheme, toggleTheme } = useSwitchTheme();
    const { screenSize } = useScreenSize();

    return (
        <Theme theme={currentTheme}>
            <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
                <ScreenSizeContext.Provider value={screenSize}>
                    <GlobalStyles />
                    <Home />
                </ScreenSizeContext.Provider>
            </ThemeContext.Provider>
        </Theme>
    );
}

export default App;
