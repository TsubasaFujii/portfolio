const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

export const devices = {
    mobileL: `(min-width: ${breakpoints.sm}px)`,
    tablet: `(min-width: ${breakpoints.md}px)`,
    desktop: `(min-width: ${breakpoints.lg}px)`,
    desktopL: `(min-width: ${breakpoints.xl}px)`,
};