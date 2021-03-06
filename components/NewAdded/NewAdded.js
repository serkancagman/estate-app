import ProductList from "components/ProductList/ProductList";
import React from "react";
import style from "./style/NewAdded.module.css";
import { useSelector } from "react-redux";
const NewAdded = () => {

  const {products, loading, error} = useSelector(state => state.products);
  const filteredProducts = products.filter(product => !product.isOld);
  return (
    <section className={style.newAdded}>
      <div className="container">
        <div className={style.newAddedHeader}>
          <h2 className={style.newAddedTitle}>New Added Properties</h2>
          <p className={style.newAddedSubTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="row g-3">
          {
            filteredProducts.map((product,index) => {
              return(
                <ProductList key={index} product={product} />
              )
            })
          }
       
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className={style.viewAllBtn}>VIEW ALL APARTMENTS</button>
        </div>
      </div>
    </section>
  );
};

export default NewAdded;
