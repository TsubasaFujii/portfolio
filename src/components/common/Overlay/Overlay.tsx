import { forwardRef, Ref, RefObject } from 'react';
import { createPortal } from 'react-dom';

import { OverlayWrapper } from './styled';

export const Overlay = forwardRef((_, ref: Ref<HTMLElement>) => {
    return createPortal((
        <OverlayWrapper id='overlay' ref={ref as RefObject<HTMLDivElement>} />
    ), document.querySelector('body')!);
});

Overlay.displayName = 'Overlay';