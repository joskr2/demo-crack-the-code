import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head
        title="Crack the code demo"
      >
        <meta property="og:title" content="Crack the code demo" key="crack the code" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
