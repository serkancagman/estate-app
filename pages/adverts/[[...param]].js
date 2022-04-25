import React from "react";
import Head from "next/head";

import { Header, Footer, BreadCrumb, Filterbar, AllProducts } from "components";
const products = () => {
  return (
    <>
      <Head>
        <title>Best Budget Homes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <BreadCrumb currentTitle="Adverts" />
        <Filterbar />
        <AllProducts />
        <Footer />
      </main>
    </>
  );
};

export default products;
