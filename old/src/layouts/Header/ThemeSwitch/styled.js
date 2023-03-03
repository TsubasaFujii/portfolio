import styled from 'styled-components';
import { motion } from 'framer-motion';

import sun from '../../../assets/icons/sun.svg';
import moon from '../../../assets/icons/moon.svg';

export const ThemeSwitchWrapper = styled.div`
    margin-left: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
`;

export const Switch = styled(motion.div).attrs(() => ({
    role: 'button',
    ['aria-label']: 'Switch theme'
}))`
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

export const Marker = styled(motion.div)`
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

export const Label = styled(motion.div)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400; 
    font-size: 1rem;
`;