import "../styles/globals.css";
import type { AppProps } from "next/app";
import "milligram/dist/milligram.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
