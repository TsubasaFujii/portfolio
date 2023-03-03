import { CustomTheme } from '@/types/styled';
import { useEffect, useState } from 'react';
import { theme as customTheme } from './theme';

function getUserPref() {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useCurrentTheme(): {
    theme: CustomTheme;
    currentTheme: string;
    toggleTheme: () => void;
} {
    const [theme, setTheme] = useState<CustomTheme>(customTheme[getUserPref()]);
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(getUserPref());

    useEffect(() => {
        // dark -> theme.colors.black, light -> theme.colors.white
        document.body.style.backgroundColor = currentTheme === 'dark' ?
            '#1A1406' :
            '#FAF7F5';
        setTheme(customTheme[currentTheme])
    }, [currentTheme]);

    function toggleTheme() {
        setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    return {
        theme,
        currentTheme,
        toggleTheme,
    }
}