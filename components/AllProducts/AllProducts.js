import React from "react";
import style from "./style/AllProducts.module.css";
import Product from "components/Product/Product";
import useSWR from "swr";

const AllProducts = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error } = useSWR(`${process.env.API_URL}product`, fetcher);

  return (
    <section className={style.allProducts}>
      <div className="container">
        <div className="row g-3">
          {data &&
            data.map((product, index) => {
              return (
                <div key={index} className="col-lg-4">
                  <Product product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
