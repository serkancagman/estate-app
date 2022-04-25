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
  Blog,
  Footer,
} from "components";
import React from "react";
import Head from "next/head";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "redux/Product/ProductSlice";
export default function Home({ products }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (products) {
      dispatch(getProducts(products));
    }
  }, [products]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
        <Blog />
        <Footer />
      </main>
    </>
  );
}
Home.getInitialProps = async () => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}product`);
  console.log(res.data);

  return { 
    products: res.data
  };
}
