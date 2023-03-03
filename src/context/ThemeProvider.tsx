import { createContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getPointingMethod } from '@/utils/device';
import useCurrentTheme from '@/hooks/useCurrentTheme';

export const ThemeContext = createContext<null>(null);

type Props = {
    children: ReactNode;
}

export function ThemeProvider(props: Props) {
    const { children } = props;
    const { currentTheme, toggleTheme, theme } = useCurrentTheme();
    const { pointingMethod } = getPointingMethod();

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
