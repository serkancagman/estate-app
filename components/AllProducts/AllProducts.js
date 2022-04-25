import React from "react";
import style from "./style/AllProducts.module.css";
import { useDispatch } from "react-redux";
import Product from "components/Product/Product";
import useSWR from "swr";
import { getProducts } from "API/Api";
const AllProducts = ({ products }) => {
  const { data, error } = useSWR("product", getProducts);

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
