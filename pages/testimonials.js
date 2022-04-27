import React from "react";
import { Header, Footer, BreadCrumb, Testimonials, Partners } from "components";
import Head from "next/head";
const testimonials = () => {
  return (
    <>
      <Head>
        <title>Our Reviews By Customers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumb currentTitle="Testimonials" />
      <Testimonials />
      <Partners />
      <Footer />
    </>
  );
};

export default testimonials;
