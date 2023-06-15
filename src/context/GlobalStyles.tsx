import { devices } from '@/static/viewport';
import { Hex } from '@/types/hex';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    *,
    *:after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ///
    // Typography (font-family is located in _app.tsx)
    ///
    
    body,
    main {
                    font-size: 1rem;
    }

    // Josefin
    h1,
    span.large {
        font-size: 4em;
        font-weight: 700;

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
        font-size: 3.5em;
        font-weight: 700;

        @media screen and (${devices.mobileL}) {
            font-size: 4em;
        }
        @media screen and (${devices.tablet}) {
            font-size: 5.6em;
        }
    }

    h3 {
        font-size: 2em;
        font-weight: 700;

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
    div.navItem,
    div.intro > div,
    footer li {
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

    // Lato
    div.intro > span {
        font-weight: 400;
        font-size: 1em;
        @media screen and (${devices.mobileL}) {
            font-size: 1.2em;
        }
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
        min-height: 100vh;

        display: grid;
        grid-template-rows: repeat(2, max-content) 1fr;
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
        align-self: end;
        width: 100vw;
        flex-grow: 1;
        margin-top: ${({ theme }) => theme.spacing.gap};
        padding: ${({ theme }) => theme.spacing.md};

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
    // Colors
    ///

    body,
    a,
    a:visited,
    label {
        color: ${({ theme }) => theme.fontColor};
    }

    button {
        color: ${({ theme }) => theme.colors.black};
    }

    footer {
        color: ${({ theme }) => theme.currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
        background: ${({ theme }) => theme.currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
    }

    footer a,
    footer a:visited {
        color: ${({ theme }) => theme.currentTheme === 'dark' ? theme.colors.black : theme.colors.white};
        background: ${({ theme }) => theme.currentTheme === 'dark' ? theme.colors.white : theme.colors.black};
    }

    header,
    div.modal {
        background: ${({ theme }) =>
        theme.currentTheme === 'dark' ?
            `${theme.colors.black}${Hex.opacity80}` :
            `${theme.colors.white}${Hex.opacity80}`};
        backdrop-filter: blur(1rem);
    }

    body.lock header,
    body.lock div.modal {
        background: ${({ theme }) =>
        theme.currentTheme === 'dark' ?
            theme.colors.black :
            theme.colors.white};
    }
`;

export function GlobalStyles() {
    return <StyledGlobalStyle />
}

