import { createGlobalStyle } from 'styled-components';

export default function GlobalStyle() {
    createGlobalStyle`
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
        }

        section {
        }

        nav {
        }

        footer {
        }
    `;
}