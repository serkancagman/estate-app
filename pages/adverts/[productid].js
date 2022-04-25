import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";
import { BreadCrumb, Footer, Header, ProductDetail } from "components";
const Product = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const router = useRouter();
  const { productid } = router.query;

  const { data, error } = useSWR(
    `${process.env.API_URL}product/${productid}`,
    fetcher
  );
  console.log(data);
  console.log(error);
  return (
    <>
      <Head>
        <title>{data && data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <BreadCrumb secondTitle="Adverts" currentTitle="Advert Details" />
        {
          data && <ProductDetail product={data} />
        }
        <Footer />
      </main>
    </>
  );
};

export default Product;
