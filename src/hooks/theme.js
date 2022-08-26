import { useState } from "react";

export function useSwitchTheme() {
    const [currentTheme, setCurrentTheme] = useState('light');


    function toggleTheme() {
        setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    return {
        currentTheme,
        toggleTheme
    }
}