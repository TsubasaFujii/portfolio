import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const spacing = {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
    gap: '8rem',
    doubleGap: '16rem',
};

const max = {
    width: '70rem',
}

const common = {
    spacing,
    max,
};

////
//  Light
///

const lightThemeColors = {
    white: '#FAF7F5',
    grey: '#EBE6E4',
    black: '#1A0D06',
    disabled: '#998b82',
    black70: 'rgba(26, 13, 6, 70%)',
    black40: 'rgba(26, 13, 6, 40%)',
    black20: 'rgba(26, 13, 6, 20%)',
    black10: 'rgba(26, 13, 6, 10%)',
    primary: '#F16E28',
    primary70: '#F18348',
    primary50: '#F19B6C',
    primary20: '#F1D2C1',
};

const light = {
    ...common,
    colors: lightThemeColors,
    fontColor: lightThemeColors.black,
};

////
//  Dark
///

const darkThemeColors = {
    white: '#FAF8F5',
    grey: '#EBE8E4',
    black: '#1A1406',
    black70: 'rgba(26, 20, 6, 70%)',
    black40: 'rgba(26, 20, 6, 40%)',
    black20: 'rgba(26, 20, 6, 20%)',
    black10: 'rgba(26, 20, 6, 10%)',
    primary: '#F1B228',
    primary70: '#F1BC48',
    primary50: '#F1CB79',
    primary20: '#F1E2C1',
};

const dark = {
    ...common,
    colors: darkThemeColors,
    fontColor: darkThemeColors.white,
};

export default function Theme({ children }) {
    const { currentTheme } = useContext(ThemeContext);
    return (
        <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
            {children}
        </ThemeProvider>
    );
}

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element,
    ]),
};