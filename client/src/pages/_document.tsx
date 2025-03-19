import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* google fonts */}
      <Head>
        <meta
          name="google-site-verification"
          content="6fT63fDi5k7OS74LD6JbglvkwDKGTRyMFXM1XU22LBU"
        />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
