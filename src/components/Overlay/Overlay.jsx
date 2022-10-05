import { forwardRef } from 'react';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { OverlayWrapper } from './styled';

export const Overlay = forwardRef((_, ref) => {
    const { currentTheme } = useContext(ThemeContext);

    return createPortal((
        <OverlayWrapper id='overlay' ref={ref} $currentTheme={currentTheme} />
    ), document.querySelector('body'));
});

Overlay.displayName = 'Overlay';