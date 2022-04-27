import {
  Banner,
  Case,
  Featured,
  Header,
  Neighborhood,
  NewAdded,
  Options,
  Partners,
  Solution,
  Articles,
  Footer,
  BlogHome,
} from "components";
import React from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { getProducts } from "redux/Product/ProductSlice";
export default function Home({ products }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (products) {
      dispatch(getProducts(products));
    }
  }, [products]);
  console.log(products);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Partners />
      <Options />
      <Featured />
      <Solution />
      <NewAdded />
      <Case />
      <Neighborhood />
      <Articles />
      <BlogHome />
      <Footer />
    </>
  );
}
