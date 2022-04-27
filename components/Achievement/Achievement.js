import React from "react";
import style from "./style/Achievement.module.css";
const Achievement = () => {
  return (
    <section className={style.achievement}>
      <div className={style.achievementInner}>
        <div className="container">
          <div className={style.achievementHeader}>
            <h2 className={style.achievementTitle}> Our Achievements</h2>
            <p className={style.achievementSubTitle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda sint suscipit qui dignissimos reiciendis temporibus sunt
              tempore, delectus quaerat inventore.
            </p>
          </div>
          <div className="row g-3 my-2">
            <div className="col-md-6 text-center col-lg-3">
              <h5 className={style.achievementItemTitle}> 10,245 + </h5>
              <p className={style.achievementItemSubTitle}>
                Completed Property
              </p>
            </div>
            <div className="col-md-6 text-center col-lg-3">
              <h5 className={style.achievementItemTitle}> 21,325 + </h5>
              <p className={style.achievementItemSubTitle}> Apartment Rent </p>
            </div>
            <div className="col-md-6 text-center col-lg-3">
              <h5 className={style.achievementItemTitle}> 9,213 + </h5>
              <p className={style.achievementItemSubTitle}> Property Sales </p>
            </div>
            <div className="col-md-6 text-center col-lg-3">
              <h5 className={style.achievementItemTitle}> 90,231 + </h5>
              <p className={style.achievementItemSubTitle}> Happy Clients </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.achievementFade}></div>
    </section>
  );
};

export default Achievement;
