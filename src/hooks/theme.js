import { useEffect, useState } from 'react';

export function useSwitchTheme() {
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        // dark -> theme.colors.black, light -> theme.colors.white
        document.body.style.backgroundColor = currentTheme === 'dark' ?
            '#1A1406' :
            '#FAF7F5';
    }, [currentTheme]);
    
    function toggleTheme() {
        setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    return {
        currentTheme,
        toggleTheme
    }
}