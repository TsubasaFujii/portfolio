import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *:after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        overflow-x: hidden;
        background-color: ${({ theme, mode }) =>
        mode === 'dark' ?
            theme.colors.black :
            theme.colors.white
    };
    }

    section {
    }

    header {

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

        text-transform: capitalize;
        font-family: 'Josefin Sans', sans-serif;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.4rem;
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
    }

    `;