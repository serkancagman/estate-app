import React from "react";
import style from "./style/Contact.module.css";
const Contact = () => {
  return (
    <section className={style.contact}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8 col-md-12">
            <div className={style.contactForm}>
              <div className={style.contactFormHeader}>
                <h2 className={style.contactFormTitle}> Get in Touch</h2>
                <p className={style.contactFormSubTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolor quam repudiandae repellendus iure molestiae
                  quisquam, vitae aperiam veritatis cupiditate?
                </p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="name">
                      Name
                    </label>
                    <input className={style.formInput} type="text" id="name" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={style.formInput}
                      type="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="phone">
                      Phone
                    </label>
                    <input className={style.formInput} type="text" id="phone" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className={style.formInput}
                      type="text"
                      id="subject"
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-lg-12 col-md-12 col-12">
                    <label className={style.formLabel} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className={style.formInput}
                      id="message"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <button className={style.formButton}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
