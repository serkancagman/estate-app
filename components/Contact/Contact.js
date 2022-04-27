import React from "react";
import style from "./style/Contact.module.css";
import { useFormik } from "formik";
import { validationSchema } from "./Validation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
const Contact = () => {
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

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
              <form onSubmitCapture={handleSubmit}>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="name">
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      className={`${style.formInput} ${
                        errors.name && touched.name && style.errorInput
                      }`}
                      type="text"
                      id="name"
                      name="name"
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <span className={style.errorMessage}>{errors.name}</span>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="email">
                      Email
                    </label>
                    <input
                      className={`${style.formInput} ${
                        errors.email && touched.email && style.errorInput
                      }`}
                      type="email"
                      id="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className={style.errorMessage}>{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      onChange={handleChange}
                      className={`${style.formInput} ${
                        errors.phone && touched.phone && style.errorInput
                      }`}
                      type="text"
                      id="phone"
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone && (
                      <span className={style.errorMessage}>{errors.phone}</span>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <label className={style.formLabel} htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className={`${style.formInput} ${
                        errors.subject && touched.subject && style.errorInput
                      }`}
                      type="text"
                      id="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject && (
                      <span className={style.errorMessage}>
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-lg-12 col-md-12 col-12">
                    <label className={style.formLabel} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className={`${style.formInput} ${
                        errors.message && touched.message && style.errorInput
                      }`}
                      id="message"
                      name="message"
                      onBlur={handleBlur}
                      rows="6"
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && touched.message && (
                      <span className={style.errorMessage}>
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className={style.formButton}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={style.contactInfo}>
              <div className={style.contactInfoHeader}>
                <h2 className={style.contactInfoTitle}> Contact Info</h2>
                <p className={style.contactInfoSubTitle}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolor quam repudiandae.
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <div className="d-flex justify-content-start my-2 align-items-center">
                  <HiOutlineLocationMarker className={style.contactInfoIcon} />
                  <p className={style.contactInfoText}>
                    48 Brooke Street, New York United States of America
                  </p>
                </div>
                <div className="d-flex justify-content-start my-2 align-items-center">
                  <BsFillTelephoneFill className={style.contactInfoIcon} />
                  <p className={style.contactInfoText}>+1 (234) 567 8901</p>
                </div>
                <div className="d-flex justify-content-start my-2 align-items-center">
                  <FiMail className={style.contactInfoIcon} />
                  
                    <a className={style.contactInfoText} href="mailto:cagmanserkann@gmail.com">
                      cagmanserkann@gmail.com
                    </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
