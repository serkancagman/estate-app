import React from "react";
import style from "./style/ProductDetail.module.css";
import Image from "next/image";
import personImg from "assets/blog/person-2.jpg";
import { BiPhone } from "react-icons/bi";
const AgentBox = () => {
  return (
    <div className={style.agentBox}>
      <div className={style.agentBoxHeader}>
        <div className="d-flex align-items-center justify-content-start">
          <div className={style.agentBoxImage}>
            <Image
              src={personImg}
              width={70}
              height={70}
              className={style.personImg}
            />
          </div>
          <div className="d-flex flex-column h-100 justify-content-between align-items-start">
            <h6 className={style.agentBoxName}> Michael Scott </h6>
            <p className={style.agentBoxText}>
              <BiPhone className={style.phoneIcon} /> +000 154 4568 468
            </p>
          </div>
        </div>
      </div>
      <div className={style.agentBoxInner}>
        <form>
          <div className={style.agentBoxFormItem}>
            <label className={style.agentBoxFormLabel}>Name</label>
            <input className={style.agentBoxFormInput} type="text" />
          </div>
          <div className={style.agentBoxFormItem}>
            <label className={style.agentBoxFormLabel}>Phone</label>
            <input className={style.agentBoxFormInput} type="text" />
          </div>
          <div className={style.agentBoxFormItem}>
            <label className={style.agentBoxFormLabel}>Description</label>
            <textarea className={style.agentBoxFormInput} />
          </div>
          <button className={style.agentBoxFormButton}>Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default AgentBox;
