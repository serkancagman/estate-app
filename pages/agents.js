import React from "react";
import { Header, Footer, BreadCrumb, Agents } from "components";
import Head from "next/head";
const agents = () => {
  return (
    <>
     <Head>
        <title>Explore The Best Agents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumb currentTitle="Agents" />
      <Agents />
      <Footer />
    </>
  );
};

export default agents;
