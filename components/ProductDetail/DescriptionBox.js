import React from 'react'
import style from "./style/ProductDetail.module.css";
const DescriptionBox = () => {
  return (
    <div className={style.descriptionBox}> 
        <div className={style.descriptionBoxInner}>
            <h3 className={style.descriptionBoxTitle}>Description</h3>
            <p className={style.descriptionBoxText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim incidunt nulla neque fugiat, hic fugit excepturi quae suscipit necessitatibus accusamus placeat adipisci distinctio odio tempore, temporibus vitae! Omnis, quis.
            </p>
            <p className={style.descriptionBoxText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem suscipit voluptatum nemo cum aliquam praesentium amet, tenetur consequatur iusto architecto enim animi asperiores distinctio.
                </p>
            </div>
    </div>
  )
}

export default DescriptionBox