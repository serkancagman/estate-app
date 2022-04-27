import React from "react";
import Head from "next/head";
import {
  Header,
  BreadCrumb,
  Footer,
  AboutBanner,
  AboutServices,
  Achievement,
} from "components";
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
      <Achievement />
      <Footer />
    </>
  );
};

export default about;
