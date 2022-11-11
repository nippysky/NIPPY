import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollUp from "../components/ScrollUp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      storageKey="theme"
      enableSystem={true}
      defaultTheme="light"
      attribute="class"
      enableColorScheme={true}
      disableTransitionOnChange
    >
      <NextNProgress
        color="linear-gradient(100deg,  #FFBC00 , #4169E1 )"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
      <ScrollUp />
    </ThemeProvider>
  );
}

export default MyApp;
