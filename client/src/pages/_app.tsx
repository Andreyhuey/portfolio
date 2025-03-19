import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ola-obaado Oluwadara&apos;s Portfolio</title>
        <meta name="description" content="Software Engineer" />
        <meta
          name="keywords"
          content="oluwadara, ola-obaado, obaado, dara, andreyhuey, andrey, software engineer, developer, problem solver, portfolio, frontend, backend, architect"
        />
        <meta property="og:title" content="Ola-obaado Oluwadara's Portfolio" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:image" content="/assets/avatar.jpeg" />
        <link rel="icon" href="/assets/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
