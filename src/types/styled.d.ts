import 'styled-components';

interface IPalette {
    main: string
    contrastText: string
}

interface Spacing {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    gap: string;
    doubleGap: string;
}

interface MaxWidth {
    width: string;
}

interface Palette {
    white: string;
    grey: string;
    black: string;
    disabled: string;
    black70: string;
    black40: string;
    black20: string;
    black10: string;
    primary: string;
    primary70: string;
    primary50: string;
    primary20: string;
}

interface CustomTheme {
    spacing: Spacing,
    max: MaxWidth,
    colors: Pallette;
    fontColor: string;
}

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {
        currentTheme: string;
        toggleTheme: () => void;
        pointingMethod: string;
    }
}