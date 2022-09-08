import React, { forwardRef, useContext, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeContext } from '../styles/ContextProviders';
import PropTypes from 'prop-types';

import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import { motion } from 'framer-motion';
import { devices } from '../../hooks/viewport';

const Wrapper = styled.header`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 300;

     // CC in HEX is 80% opacity
    background: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ?
            `${theme.colors.black}CC` :
            `${theme.colors.white}CC`};
    backdrop-filter: blur(1rem);

    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    }
`;

const Content = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;

    @media screen and (${devices.desktopL}) {
        width: 1200px;
    }
`;

const Navigation = styled.nav`
    width: 100%;
    //padding: ${({ theme }) => `calc(${theme.spacing.sm}/2) ${theme.spacing.sm}`};

    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    @media screen and (${devices.mobileL}) {
        width: fit-content;
    }
`;

const MenuItem = styled.div`
    flex: 1;
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    ${({ theme, $current }) =>
        $current && `border-bottom: 0.3rem solid ${theme.colors.primary}};`}

    // H5 settings
    text-transform: capitalize;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600; 
    font-size: 1.3rem;
    text-align: center;
    color: ${({ theme }) => theme.fontColor};

    &:hover {
        cursor: pointer;
        // TODO Need to add more to this later
    }

    @media screen and (${devices.mobileL}) {
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    }
`;

const ThemeSwitchWrapper = styled.div`
    margin-left: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
`;

const Switch = styled(motion.div)`
    width: 4.5rem;
    // height / 2 : padding + Marker height / 2
    border-radius: calc(1.5rem + 0.25rem + 0.25rem / 2);

    display: flex;
    justify-content: ${({ $currentTheme }) => $currentTheme === 'dark' ? 'flex-end' : 'flex-start'};
    align-items: center;
    
    //image size has to be smaller than Marker
    background: ${({ theme, $currentTheme }) => `
        no-repeat ${$currentTheme === 'dark' ? '30%' : '70%'}/1.3rem ` +
        `url(${$currentTheme === 'dark' ? moon : sun}) ${theme.colors.primary70}`};
    box-shadow: ${({ theme }) =>
        `inset 4px 4px 4px 4px ${theme.colors.black10}, ` +
        `inset -1px -1px 1px 1px ${theme.colors.black10}`};

    &:hover {
        cursor: pointer;
    }

`;

const Marker = styled(motion.div)`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.25rem;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    box-shadow: ${({ theme }) =>
        'inset 2px 2px 0 #ffffff, ' +
        `inset -1px -1px 0 ${theme.colors.black20}`};

    // This pseudo element is here so that component get displayed
    &::before {
        content: '.';
        visibility: hidden;
    }
`;

const Label = styled(motion.div)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400; 
    font-size: 1rem;
`;

function ThemeSwitch() {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <ThemeSwitchWrapper onClick={toggleTheme}>
            <Label
                animate={{
                    color: currentTheme === 'light' ?
                        theme.colors.black : `${theme.colors.white}66`
                }}>
                light
            </Label>
            <Switch $currentTheme={currentTheme}>
                <Marker
                    transition={{
                        stiffness: 200,
                        damping: 100
                    }}
                    layout />
            </Switch>
            <Label
                animate={{
                    color: currentTheme === 'light' ?
                        `${theme.colors.black}66` : theme.colors.white
                }}>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}

const links = [
    {
        name: 'Home',
        route: '/',
    }, {
        name: 'Projects',
        route: '/projects',
    }, {
        name: 'Contact',
        route: '#contactForm',
    }
];

function Nav() {
    const [current, setCurrent] = useState(0);

    function handleOnClick(index, route) {
        setCurrent(index);
        if (route.charAt(0) === '#') {
            scrollTo(route);
        } else {
            // Add router later
            // <Link to={route}>
        }
        return;
    }

    return (
        <Navigation>
            {links.map((link, index) =>
                <MenuItem
                    key={index}
                    $current={index === current && true}
                    onClick={() => handleOnClick(index, link.route)}>
                    {link.name}
                </MenuItem>
            )}
        </Navigation>
    )
}

export const Header = forwardRef((props, ref) => {
    const { toggleTheme } = props;
    const { currentTheme } = useContext(ThemeContext);

    return (
        <Wrapper $currentTheme={currentTheme} ref={ref}>
            <Content>
                <Nav />
                <ThemeSwitch toggleTheme={toggleTheme} />
            </Content>
        </Wrapper>
    )
});

Header.displayName = 'Header';
Header.propTypes = {
    toggleTheme: PropTypes.func,
};