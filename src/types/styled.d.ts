import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {
        currentTheme: CurrentTheme;
        toggleTheme: () => void;
        pointingMethod: PointingMethod | null;
        currentTheme: 'light' | 'dark';
    }
}