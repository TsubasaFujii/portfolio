import { Hex } from '@/types/hex';

const spacing = {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
    gap: '8rem',
    doubleGap: '16rem',
};

const max = {
    width: '70rem',
}

const common = {
    spacing,
    max,
};

////
//  Light
///

const lightThemeColors = {
    primary: '#F16E28',
    black: '#1A0D06',
    white: '#FAF7F5',
    grey: '#EBE6E4',
    disabled: '#998b82',
};

const lightThemeColorVariation = {
    black70: lightThemeColors.black + Hex.opacity70,
    black40: lightThemeColors.black + Hex.opacity40,
    black20: lightThemeColors.black + Hex.opacity20,
    black10: lightThemeColors.black + Hex.opacity10,
    primary70: '#F18348',
    primary50: '#F19B6C',
    primary20: '#F1D2C1',
}

const light: CustomTheme = {
    ...common,
    colors: {
        ...lightThemeColors,
        ...lightThemeColorVariation,
    },
    fontColor: lightThemeColors.black,
};

////
//  Dark
///

const darkThemeColors = {
    white: '#FAF8F5',
    grey: '#EBE8E4',
    black: '#1A1406',
    primary: '#F1B228',

};

const darkThemeColorVariation = {
    black70: darkThemeColors.black + Hex.opacity70,
    black40: darkThemeColors.black + Hex.opacity40,
    black20: darkThemeColors.black + Hex.opacity20,
    black10: darkThemeColors.black + Hex.opacity10,
    primary70: '#F1BC48',
    primary50: '#F1CB79',
    primary20: '#F1E2C1',
}

const dark: CustomTheme = {
    ...common,
    colors: {
        ...darkThemeColors,
        ...darkThemeColorVariation,
    },
    fontColor: darkThemeColors.white,
};

interface Theme {
    dark: CustomTheme;
    light: CustomTheme;
}

export const theme: Theme = {
    dark,
    light
}