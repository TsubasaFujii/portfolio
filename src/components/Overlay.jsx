import React, { forwardRef } from 'react';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ThemeContext } from './styles/ContextProviders';

const OverlayWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme, $currentTheme }) =>
        $currentTheme === 'dark' ? `${theme.colors.white}CC` : theme.colors.black40};

    &:after {
        content: '.';
        visibility: hidden;
    }
`;

export const Overlay = forwardRef((_, ref) => {
    const { currentTheme } = useContext(ThemeContext);

    return createPortal((
        <OverlayWrapper id='overlay' ref={ref} $currentTheme={currentTheme} />
    ), document.querySelector('main'));
});

Overlay.displayName = 'Overlay';