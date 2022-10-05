import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useToggleTheme } from '../hooks/theme';
import { getPointingMethod } from '../js/device';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const { children } = props;
    const { currentTheme, toggleTheme } = useToggleTheme();
    const { pointingMethod } = getPointingMethod();

    return (
        <ThemeContext.Provider
            value={{ currentTheme, toggleTheme, pointingMethod }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element,
    ]),
};

