import React, { forwardRef } from 'react';
import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeContext } from '../styles/ContextProviders';

import sun from '../../assets/icons/sun.svg';
import moon from '../../assets/icons/moon.svg';
import { motion } from 'framer-motion';

const Wrapper = styled.header`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;

     // CC in HEX is 80% opacity
    background: ${({ theme, mode }) =>
        mode === 'dark' ?
            `${theme.colors.black}CC` :
            `${theme.colors.white}CC`};
    backdrop-filter: blur(1rem);
`;

const Navigation = styled.nav`
    width: 100%;
    padding: ${({ theme }) => `calc(${theme.spacing.sm}/2) ${theme.spacing.sm}`};

    display: flex;
    flex-direction: row;
    gap: 0.6rem;
`;

const MenuItem = styled.div`
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
    ${({ theme, current }) =>
        current && `border-bottom: 0.3rem solid ${theme.colors.primary}};`
    }

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
    justify-content: ${({ mode }) => mode === 'dark' ? 'flex-end' : 'flex-start'};
    align-items: center;
    
    //image size has to be smaller than Marker
    background: ${({ theme, mode }) => `
        no-repeat ${mode === 'dark' ? '30%' : '70%'}/1.3rem ` +
        `url(${mode === 'dark' ? moon : sun}) ${theme.colors.primary70}`};

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

function ThemeSwitch(props) {
    const { toggleTheme } = props;
    const mode = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <ThemeSwitchWrapper mode={mode} onClick={toggleTheme}>
            <Label
                mode={mode}
                animate={{
                    color: mode === 'light' ? theme.colors.black : `${theme.colors.white}66`
                }}>
                light
            </Label>
            <Switch mode={mode}>
                <Marker
                    transition={{
                        stiffness: 200,
                        damping: 100
                    }}
                    layout />
            </Switch>
            <Label
                mode={mode}
                animate={{
                    color: mode === 'dark' ? theme.colors.white : theme.colors.grey
                }}>
                dark
            </Label>
        </ThemeSwitchWrapper >
    )
}

export const Header = forwardRef((props, ref) => {
    const { toggleTheme } = props;
    const mode = useContext(ThemeContext);

    return (
        <Wrapper mode={mode} ref={ref}>
            <Navigation>
                <MenuItem mode={mode} current>Home</MenuItem>
                <MenuItem mode={mode}>Projects</MenuItem>
                <MenuItem mode={mode}>Contact</MenuItem>
            </Navigation>
            <ThemeSwitch toggleTheme={toggleTheme} />
        </Wrapper>
    )
});
