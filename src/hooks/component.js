import { useEffect, useRef, useState } from 'react';

export function useControlVisibility() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    function handleKeyDown(event) {
        if (event.key === 'Escape') {
            setIsVisible(false);
        }
    }

    function handleClickEvent(event) {
        if (ref.current && ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('click', handleClickEvent, true);
        return () => {
            document.removeEventListener('keydown', handleKeyDown, true);
            document.removeEventListener('click', handleClickEvent, true);
        };
    });

    useEffect(() => {
        if (isVisible) {
            document.querySelector('body').classList.add('lock');
        } else {
            document.querySelector('body').classList.remove('lock');
        }
    }, [isVisible]);

    return {
        ref,
        isVisible,
        setIsVisible
    }
}