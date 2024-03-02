import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-grid.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/ag-grid-community@31.0.1/styles/ag-theme-quartz.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
