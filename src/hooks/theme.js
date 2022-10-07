import { useEffect, useState } from 'react';

function getUserPref() {
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useCurrentTheme() {
    const [currentTheme, setCurrentTheme] = useState(getUserPref());

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
        toggleTheme,
    }
}