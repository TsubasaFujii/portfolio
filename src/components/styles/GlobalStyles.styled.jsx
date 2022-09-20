import { createGlobalStyle } from 'styled-components';
import { devices } from '../../hooks/viewport';

export const GlobalStyles = createGlobalStyle`
    *,
    *:after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ///
    // Position, width, height, padding, margin, z-index, overflow
    ///
    body {
        width: 100vw;
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
    }

    body.lock {
        overflow-y: hidden;
    }

    #root {
        width: 100%;
    }

    header {
        width: 100vw;
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};

        position: sticky;
        top: 0;
        left: 0;
        right: 0;

        z-index: 300;

        aside {
            width: 100%;
        }

        & .modal {
            padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
        }

        @media screen and (${devices.mobileL}) {
            padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};

            & .modal {
                padding: 0;
            }
        }
    }

    main {
        width: 100%;
        z-index: 200;

        & section:last-child {
            margin-bottom: ${({ theme }) => theme.spacing.gap};
        }
    }

    footer {
        width: 100vw;
        margin-top: ${({ theme }) => theme.spacing.gap};
        padding: ${({ theme }) => `${theme.spacing.gap} ${theme.spacing.md} ${theme.spacing.md}`};
        min-height: 50vh;

        z-index: 300;
    }

    #overlay {
        z-index: 250;
    }
    
    section {
        position: relative;
        padding: ${({ theme }) => `0 ${theme.spacing.md}`};

        @media screen and (${devices.mobileL}) {
            padding: ${({ theme }) => `0 ${theme.spacing.xl}`};
        }
    }

    ///
    // Typography
    ///
    body, main {
        font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    span.intro,
    div.navItem,
    aside.filters {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
    }

    h1 {
        font-size: 3em;

        @media screen and (${devices.mobileL}) {
            font-size: 5.6em;
        }

        @media screen and (${devices.tablet}) {
            font-size: 7em;
        }

        @media screen and (${devices.desktop}) {
            font-size: 8em;
        }
    }

    h2 {
        font-size: 3em;
        @media screen and (${devices.mobileL}) {
            font-size: 5.6em;
        }
    }

    h3 {
        font-size: 2em;
        @media screen and (${devices.mobileL}) {
            font-size: 2.8em;
        }
    }

    h4 {
        font-weight: 600;
        font-size: 1.6em;
        @media screen and (${devices.mobileL}) {
            font-size: 2em;
        }
    }

    h5,
    button,
    div.navItem {
        font-weight: 600;
        font-size: 1.3em;
        @media screen and (${devices.mobileL}) {
            font-size: 1.4em;
        }
    }

    h6 {
        font-weight: 400;
        font-size: 1em;
        @media screen and (${devices.mobileL}) {
            font-size: 1.2em;
        }
    }

    span.intro {
        font-weight: 400;
        font-size: 1em;
        @media screen and (${devices.mobileL}) {
            font-size: 1.2em;
        }
    }

    p,
    label,
    input,
    textarea,
    div.copyright,
    aside.filters {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

    label,
    input,
    textarea {
        font-size: 1em;
    }

    p {
        font-size: 1.2em;
    }

    a {
        text-decoration: none;
    }

    ///
    // Colors
    ///

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span.intro,
    aside.filters,
    p,
    header {
        color: ${({ theme }) => theme.fontColor};
    }

    button {
        color: ${({ theme }) => theme.black};
    }

    body {
        background-color: ${({ theme, currentTheme }) =>
        currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
    }

    header,
    div.modal {
        // CC in HEX is 80% opacity
        background: ${({ theme, currentTheme }) =>
        currentTheme === 'dark' ?
            `${theme.colors.black}CC` :
            `${theme.colors.white}CC`};
        backdrop-filter: blur(1rem);
    }

    body.lock header,
    body.lock div.modal {
        background: ${({ theme, currentTheme }) =>
        currentTheme === 'dark' ?
            theme.colors.black :
            theme.colors.white};
    }

    footer {
        color: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
        background: ${({ theme, $currentTheme }) => $currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
    }
`;