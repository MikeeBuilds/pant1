import React, { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./global.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();

  return (
    <React.Fragment>
      <Head>
        <title>pant1</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <header className="flex justify-between items-center lg:flex-row flex-col">
          <div className="flex items-center">
            {/* Logo and other elements go here */}
          </div>
          <nav className={`lg:flex hidden ${isMenuOpen ? "flex" : "hidden"}`}>
            {/* Desktop menu items go here */}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            <img src="/menuburgerfreeiconfont-1.svg" alt="Menu" />
          </button>
          <div className={`absolute top-0 right-0 w-[200px] h-full bg-white transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[200px]'}`}>
            <button onClick={() => setIsMenuOpen(false)}>Close</button>
            {/* Mobile menu items go here */}
          </div>
        </header>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
