import React, { forwardRef, useContext, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from '../styles/ContextProviders';
import PropTypes from 'prop-types';

import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import { devices } from '../../hooks/viewport';
import { scrollTo, scrollToTop } from '../../js/window';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(motion.header)`
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

    display: flex;
    flex-direction: row;
    gap: 0.6rem;

    @media screen and (${devices.mobileL}) {
        width: fit-content;
    }
`;

const MenuItem = styled.div.attrs(() => ({
    className: 'navItem',
}))`
    padding: ${({ theme }) => `${theme.spacing.sm} 0`};
    position: relative;

    flex: 1;
    text-align: center;

    &:after {
        content: '';
        width: 0%;
        margin: auto;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 0.3rem solid ${({ theme }) => theme.colors.primary};
        transition: all ease-in 0.3s;
    }

    &:hover {
        cursor: pointer;

        &:after {
            width: 100%;
            border-radius: 0.15rem;
            border-bottom-color: ${({ theme }) => theme.colors.primary20};
        }
    }

    &.current:after {
        width: 100%;
        border-radius: 0.15rem;
        border-bottom-color: ${({ theme }) => theme.colors.primary};
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

function Nav(props) {
    const { current, links } = props;
    const navigate = useNavigate();

    function handleOnClick(route) {
        if (route.charAt(0) === '#') {
            scrollTo(route);
        } else {
            navigate(route);
            scrollToTop();
        }
        return;
    }

    return (
        <Navigation>
            {links.map((link, index) =>
                <MenuItem
                    key={index}
                    className={index === current ? 'current' : null}
                    onClick={() => handleOnClick(link.route)}>
                    {link.name}
                </MenuItem>
            )}
        </Navigation>
    )
}

Nav.propTypes = {
    current: PropTypes.number,
    links: PropTypes.array,
};

export const Header = forwardRef((props, ref) => {
    const { toggleTheme, current, links } = props;
    const { currentTheme } = useContext(ThemeContext);

    // For smaller screen
    const [y, setY] = useState(0);
    // -1: up, 0: page top, 1: down
    const [direction, setDirection] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        function detectDirection() {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                setDirection(0);
            } else if (scrolled > y) {
                setDirection(1);
            } else if (scrolled < y) {
                setDirection(-1);
            }
            setY(scrolled);
        }

        window.addEventListener('scroll', detectDirection);
        return () => window.removeEventListener('scroll', detectDirection);
    }, [y]);

    useEffect(() => {
        if (matchMedia(devices.mobileL).matches) return;

        // Show always at the top
        if (direction < 0) {
            setIsHidden(false);
        } else if (direction > 0) {
            setIsHidden(true);
        }
    }, [direction]);

    return (
        <Wrapper
            ref={ref}
            $currentTheme={currentTheme}
            animate={{
                y: isHidden ? '-100%' : 0,
            }}>
            <Content>
                <Nav current={current} links={links} />
                <ThemeSwitch toggleTheme={toggleTheme} />
            </Content>
        </Wrapper>
    )
});

Header.displayName = 'Header';
Header.propTypes = {
    toggleTheme: PropTypes.func,
    current: PropTypes.number,
    links: PropTypes.array,
};