import React from "react";
import Head from "next/head";

import { Header, Footer, BreadCrumb, Filterbar, AllProducts } from "components";
const AllProductsPage = () => {
  return (
    <>
      <Head>
        <title>Best Budget Homes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BreadCrumb currentTitle="Properties" />
      <Filterbar />
      <AllProducts />
      <Footer />
    </>
  );
};

export default AllProductsPage;
