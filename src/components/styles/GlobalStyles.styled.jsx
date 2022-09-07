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
    body {
        width: 100vw;
        position: relative;
        overflow-x: hidden;
    }

    #root {
        width: 100%;
    }

    section {
        width: 100%;
    }

    main {
        width: 100%;
        @media screen and (${devices.desktopL}) {
            width: 1200px;
            margin: auto;
        }
    }

    header {
        width: 100vw;
        z-index: 500;
        @media screen and (${devices.desktopL}) {
            width: 1200px;
            margin: auto;
        }
    }

    footer {
    }

    ///
    // Typography
    ///
    body {
        font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    button,
    span.intro {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
    }

    h1, h2 {
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
    button {
        font-weight: 600;
        font-size: 1.3em;
        @media screen and (${devices.mobileL}) {
            font-size: 1.4em;
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
    div.copyright {
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

    ///
    // Colors
    ///
    h1,
    h2,
    h3,
    h4,
    h5,
    span.intro,
    p {
        color: ${({ theme }) => theme.fontColor};
    }

    button {
        color: ${({ theme }) => theme.black};
    }
    `;