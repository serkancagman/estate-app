import React from "react";
import { Header, Footer, BreadCrumb, Blog } from "components";
const blog = () => {
  return (
    <>
      <Header />
      <BreadCrumb currentTitle="Blog" />
      <Blog />
      <Footer />
    </>
  );
};

export default blog;
