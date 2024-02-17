import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}
