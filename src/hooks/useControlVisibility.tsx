import { MutableRefObject, useEffect, useRef, useState } from 'react';

type HooksType = {
    ref: MutableRefObject<HTMLElement | null>;
    isVisible: boolean;
    updateVisibility: (value: boolean) => void;
}

export default function useControlVisibility(): HooksType {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<null | HTMLElement>(null);

    function handleKeyDown(this: Window, event: globalThis.KeyboardEvent) {
        if (event.key === 'Escape') {
            setIsVisible(false);
        }
    }

    function handleClickEvent(this: Window, event: globalThis.MouseEvent) {
        if (ref.current && ref.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    }

    function updateVisibility(value: boolean) {
        setIsVisible(value);
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown, true);
        window.addEventListener('click', handleClickEvent, true);
        return () => {
            window.removeEventListener('keydown', handleKeyDown, true);
            window.removeEventListener('click', handleClickEvent, true);
        };
    });

    useEffect(() => {
        if (isVisible) {
            document.querySelector('body')!.classList.add('lock');
        } else {
            document.querySelector('body')!.classList.remove('lock');
        }
    }, [isVisible]);

    return {
        ref,
        isVisible,
        updateVisibility
    }
}