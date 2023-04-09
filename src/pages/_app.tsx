import Layout from '@/components/layout';
import { GlobalStyles, ThemeProvider } from '@/context';
import type { AppProps } from 'next/app';
import { Josefin_Sans, Lato } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'] });
const lato = Lato({ subsets: ['latin'], weight: ['400'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
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
