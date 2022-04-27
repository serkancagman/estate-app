import React from "react";
import style from "./style/Contact.module.css";
import { useFormik } from "formik";
import { validationSchema } from "./Validation";
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
                    {errors.name && touched.name && ( <span className={style.errorMessage}>{errors.name}</span> )}
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
                    {errors.email && touched.email && ( <span className={style.errorMessage}>{errors.email}</span> )}
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
                    {errors.phone && touched.phone && ( <span className={style.errorMessage}>{errors.phone}</span> )}
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
                    {errors.subject && touched.subject && ( <span className={style.errorMessage}>{errors.subject}</span> )}
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
                    {errors.message && touched.message && ( <span className={style.errorMessage}>{errors.message}</span> )}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
