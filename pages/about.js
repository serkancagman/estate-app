import React from "react";
import Head from "next/head";
import { Header, BreadCrumb, Footer, AboutBanner, AboutServices } from "components";
const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumb currentTitle="About Us" />
      <AboutBanner />
    <AboutServices />
      <Footer />
    </>
  );
};

export default about;
