import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *:after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #root {
        width: 100vw;
        overflow: hidden;
        position: relative;
    }

    section {
    }

    header {
        z-index: 500;
    }

    footer {
    }

    ///
    // Typography
    ///
    h1,
    h2,
    h3,
    h4,
    h5,
    button {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
    }

    h1, h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-weight: 400;
        font-size: 1.6rem;
    }

    h5,
    button {
        font-weight: 600;
        font-size: 1.3rem;
    }

    p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height: 1.5em;
        font-size: 1.2rem;
    }

    `;