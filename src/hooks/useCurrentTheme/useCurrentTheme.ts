import { CurrentTheme, CustomTheme } from '@/types/styled';
import { useEffect, useState } from 'react';
import { theme as customTheme } from './theme';

export function useCurrentTheme(): {
    theme: CustomTheme;
    currentTheme: CurrentTheme;
    toggleTheme: () => void;
} {
    const [currentTheme, setCurrentTheme] = useState<CurrentTheme>('light');
    const [theme, setTheme] = useState<CustomTheme>(customTheme[currentTheme]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setCurrentTheme(isDarkMode ? 'dark' : 'light')
        }
    }, []);

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