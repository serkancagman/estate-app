import React from "react";
import style from "./style/Agents.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Rate } from "antd";
import { BsFillTelephoneFill } from "react-icons/bs";

const AgentItem = ({item}) => {
  return (
  
      <div className={style.agentItem}>
        <div className={style.agentItemInner}>
          <div className={style.agentImageWrapper}>
            <Image src={item.image} alt="agent" className={style.agentImage} />
            <div className={style.agentSocial}>
              <div className="d-flex align-items-center justify-content-start">
                <a href="#" className={style.agentSocialLink}>
                  <FaFacebookF />
                </a>
                <a href="#" className={style.agentSocialLink}>
                  <FaInstagram />
                </a>
                <a href="#" className={style.agentSocialLink}>
                  <FaTwitter />
                </a>
                <a href="#" className={style.agentSocialLink}>
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-start flex-column">
            <div className="d-flex justify-content-between w-100 my-2 align-items-center">
              <h3 className={style.agentName}>{item.name}</h3>
              <a href="mailto:example@.com" className={style.agentEmail}>
                <AiOutlineMail />
              </a>
            </div>
            <p className={style.agentProperties}>
              {item.properties} Properties
            </p>
            <Rate disabled defaultValue={item.average} />
          </div>
        </div>
        <div className={style.agentBottom}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-start">
              <BsFillTelephoneFill className={style.phoneIcon} />
              <a href="tel:+123456789" className={style.agentPhone}>
                {item.phone}
              </a>
            </div>

            <button className={style.agentButton}>View Profile</button>
          </div>
        </div>
      </div>

  );
};

export default AgentItem;
