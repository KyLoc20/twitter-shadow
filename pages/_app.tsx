import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function TwitterShadow({ Component, pageProps }: AppProps) {
  console.log("APP TwitterShadow");
  useEffect(() => {
    console.log("APP TwitterShadow useEffect");
  });
  return <Component {...pageProps} />;
}
export default TwitterShadow;
