import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased relative bg-white overflow-x-hidden select-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
