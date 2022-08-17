import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;400;500;700&display=swap" rel="stylesheet" />
      <body className="text-body bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
