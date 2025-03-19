import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ola-obaado Oluwadara&apos;s Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
