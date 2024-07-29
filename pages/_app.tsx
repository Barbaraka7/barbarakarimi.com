import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bawanan — Frontend</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Barbara Karimi"></meta>
        <meta
          name="description"
          content="Barbara Karimi is a ui/ux designer who loves to work in the figma."
        ></meta>
        <meta name="theme-color" content="#794856"></meta>
      </Head>

      <LogRocket />
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
