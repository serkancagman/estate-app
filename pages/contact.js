import React from "react";
import { Header, Footer, BreadCrumb, Contact } from "components";
import Head from "next/head";
const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumb currentTitle="Contact Us" />
      <Contact />
      <Footer />
    </>
  );
};

export default contact;
