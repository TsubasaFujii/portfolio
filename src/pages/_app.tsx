import Layout from '@/components/layout';
import { GlobalStyles, ThemeProvider } from '@/context';
import { devices } from '@/static/viewport';
import type { AppProps } from 'next/app';
import { Josefin_Sans, Lato } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                body, main {
                    font-size: 1rem;
                }

            ///
            // Typography: Josefin sans
            ///
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                button,
                div.intro,
                div.navItem,
                aside.filters,
                footer li,
                span.large,
                .josefin {
                    font-family: ${josefin.style.fontFamily};
                }

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

                ///
                // Typography: Lato
                ///

                p,
                label,
                input,
                textarea,
                div.copyright,
                aside.filters,
                .lato {
                    font-family: ${lato.style.fontFamily};
                    font-weight: 400;
                }

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

            `}</style>
            <ThemeProvider>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}
