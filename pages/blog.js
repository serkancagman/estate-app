import React from "react";
import { Header, Footer, BreadCrumb, Blog } from "components";
import Head from "next/head";
const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog About The Properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BreadCrumb currentTitle="Blog" />
      <Blog />
      <Footer />
    </>
  );
};

export default BlogPage;
