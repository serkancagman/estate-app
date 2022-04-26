import React from "react";
import { useRouter } from "next/router";
import userProduct from "hooks/UseProduct";
import Head from "next/head";
import { BreadCrumb, Footer, Header, ProductDetail } from "components";
const Product = () => {
  const router = useRouter();
  const { productid } = router.query;
  const { data, isLoading, isError } = userProduct(productid);

  return (
    <>
      <Head>
        <title>{data && data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <BreadCrumb secondTitle="Adverts" currentTitle="Advert Details" />
        {data && <ProductDetail product={data} />}
        <Footer />
      </main>
    </>
  );
};

export default Product;
