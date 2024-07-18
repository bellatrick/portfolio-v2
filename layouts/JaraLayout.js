"use client";

import { Fragment, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jaraUtilits } from "../utility";
import Popup from "../components/popup/Index";
import Header from "../components/Header";
import Footer from "../components/Footer";


const JaraLayout = ({ children }) => {
  useEffect(() => {
    jaraUtilits.dataImage();
    jaraUtilits.imgToSVG();
    jaraUtilits.processImage();
    jaraUtilits.jarallax();
    jaraUtilits.animation();
    jaraUtilits.gradientText();
    jaraUtilits.waypoints();
  }, []);

  return (
    <NextThemesProvider enableSystem attribute="class" defaultTheme="dark">
      <Fragment>
        <Popup />
        <Header />

        {children}

        <Footer />

      </Fragment>
    </NextThemesProvider>
  );
};
export default JaraLayout;
