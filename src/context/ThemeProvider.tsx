import { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProps, ThemeProvider as StyledThemeProvider } from 'styled-components';
import useCurrentTheme from '@/hooks/useCurrentTheme';

export const ThemeContext = createContext<null | ThemeProps<DefaultTheme>>(null);

type Props = {
    children: ReactNode;
}

export function ThemeProvider(props: Props) {
    const { children } = props;
    const { currentTheme, toggleTheme, theme } = useCurrentTheme();
    const [pointingMethod, setPointingMethod] = useState<'mouse' | 'touch' | null>(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            setPointingMethod(window.matchMedia('(any-pointer : fine)').matches ? 'mouse' : 'touch');
        }
    }, []);

    const value = {
        ...theme,
        currentTheme,
        toggleTheme,
        pointingMethod
    }

    return (
        <StyledThemeProvider theme={value}>
            {children}
        </StyledThemeProvider >
    )
}
