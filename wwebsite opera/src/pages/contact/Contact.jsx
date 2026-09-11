import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import { useApiContext } from "../../context/ApiContext";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  subject: "",
  message: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is a required field!"),
  email: yup.string().required("Email is a required field!"),
  phone: yup.string().required("Phone is a required field!"),
  address: yup.string().required("Address is a required field!"),
  subject: yup.string().required("Subject is a required field!"),
  message: yup.string().required("Message is a required field!"),
});

const validate = (values) => {
  let errors = {};

  if (!values.phone) {
    errors.phone = "Phone is required!";
  } else if (/^[0-9\b]+$/.test(values.phone) === false) {
    errors.phone = "Only number!";
  } else if (values.phone.length !== 11) {
    errors.phone = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const Contact = () => {
  // data fetching
  // const { contact, fetchContact } = useApiContext();

  // console.log("contact", contact);
  // useEffect(() => {
  //   fetchContact();
  // }, [fetchContact]);

  const [message, setMessage] = useState();

  // add
  const AddContactFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("email", values.email);
    formfield.append("phone", values.phone);
    formfield.append("address", values.address);
    formfield.append("subject", values.subject);
    formfield.append("message", values.message);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/contact_api/unpaginate_contact/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Contact is successfuly created...");
        // navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
        console.log(error);
      });
  };

  const submitAddContactForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddContactFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("/assets/img/bg/breadcumb-bg.png")`,
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">যোগাযোগ </h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  যোগাযোগ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-layout2 space">
        <div className="container">
          <div className="row g-4 space-bottom">
            {/* Address */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">ঠিকানা</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/location.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text fw-normal fs-5">
                    {/* Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212 */}ঘ - ২৭/২
                    এ, শাহজাদপুর, গুলশান, ঢাকা-১২১২, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.45s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">যোগাযোগ নম্বর</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/call.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text fw-normal">
                    <Link
                      to="tel:01739392329"
                      className="contact-link media-text fs-5"
                    >
                      01739392329
                    </Link>
                    <br />
                    <Link
                      to="tel:01914503351"
                      className="contact-link media-text fw-normal fs-5"
                    >
                      01914503351
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.65s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">ই-মেইল</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/mail.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text">
                    <Link
                      to="mailto:info@operapublication.com"
                      className="contact-link media-text fs-4"
                    >
                      info@operapublication.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <div
                className="form-style1 ajax-contact wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="title-area animation-style1 title-anime">
                  <h2 className="sec-title text-title title-anime__title fw-normal">
                    {/* Get In Touch With Opera Publication */}
                    আমাদের সাথে যোগাযোগ করুন
                  </h2>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={submitAddContactForm}
                  validate={validate}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    setFieldValue,
                  }) => (
                    <FormikForm
                      noValidate
                      onSubmit={(e) => handleSubmit(e)}
                      className="custom-form"
                      name="contactform"
                      id="contactform"
                    >
                      <div className="row gx-20">
                        <div className="col-md-6 form-group">
                          {/* <input
                            className="form-control"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="নাম"
                          />
                          <i className="fas fa-user"></i> */}
                          <Form.Group className="col-md-6 form-group w-100">
                            <div className="input-single">
                              <Form.Control
                                type="text"
                                name="name"
                                id="name"
                                placeholder="নাম"
                                value={values.name}
                                onChange={handleChange}
                                isInvalid={!!touched.name && !!errors.name}
                                required
                              />
                              <i className="fas fa-user"></i>
                            </div>

                            <Form.Control.Feedback
                              type="invalid"
                              className="error-message"
                            >
                              {errors.name}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-md-6 form-group">
                          <Form.Group className="col-md-6 form-group w-100">
                            <div className="input-single">
                              <Form.Control
                                type="text"
                                name="email"
                                id="email"
                                placeholder="ই-মেইল"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!touched.email && !!errors.email}
                                required
                              />
                              <i className="fas fa-envelope"></i>
                            </div>

                            <Form.Control.Feedback
                              type="invalid"
                              className="error-message"
                            >
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6 form-group">
                          <Form.Group className="col-md-6 form-group w-100">
                            <div className="input-single">
                              <Form.Control
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="নাম্বার"
                                value={values.phone}
                                onChange={handleChange}
                                isInvalid={!!touched.phone && !!errors.phone}
                                required
                              />
                              <i className="fas fa-phone"></i>
                            </div>

                            <Form.Control.Feedback
                              type="invalid"
                              className="error-message"
                            >
                              {errors.phone}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="col-md-6 form-group">
                          <Form.Group className="col-md-6 form-group w-100">
                            <div className="input-single">
                              <Form.Control
                                type="text"
                                name="address"
                                id="address"
                                placeholder="ঠিকানা"
                                value={values.address}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.address && !!errors.address
                                }
                                required
                              />
                              <i className="fas fa-location-dot"></i>
                            </div>

                            <Form.Control.Feedback
                              type="invalid"
                              className="error-message"
                            >
                              {errors.address}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-md-6 form-group">
                          <Form.Group className="col-md-6 form-group w-100">
                            <div className="input-single">
                              <Form.Control
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="বিষয়"
                                value={values.subject}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.subject && !!errors.subject
                                }
                                required
                              />
                              <i className="fas fa-pen"></i>
                            </div>

                            <Form.Control.Feedback
                              type="invalid"
                              className="error-message"
                            >
                              {errors.subject}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-md-6 form-group">
                          {/* <textarea
                            name="message"
                            className="form-control"
                            placeholder="এখানে বার্তা লিখুন..."
                            required=""
                          ></textarea> */}
                          <div className="col-md-6 form-group w-100">
                            <Form.Group className="w-100">
                              <div className="input-single">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  name="message"
                                  id="message"
                                  className="form-control"
                                  placeholder="এখানে বার্তা লিখুন..."
                                  value={values.message}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.message && !!errors.message
                                  }
                                />
                              </div>

                              <Form.Control.Feedback type="invalid">
                                {errors.message}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="col-md-12 form-group">
                          <button
                            className="vs-btn justify-content-center fw-normal"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {/* বার্তা পাঠান */}
                            {isSubmitting ? "Sending..." : "বার্তা পাঠান"}
                          </button>
                        </div>
                      </div>
                      {/* message  */}
                      {message && (
                        <h2 className="text-center m-5">{message}</h2>
                      )}
                    </FormikForm>
                  )}
                </Formik>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </div>
        </div>
      </section>

      <div className="map-layout1" style={{ marginBottom: "130px" }}>
        <div
          className="ratio ratio-21x9 wow animate__fadeInUp"
          data-wow-delay="0.35s"
          style={{ height: "742px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7158088157403!2d90.42331221429782!3d23.793132293060978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f25f178fd%3A0x22726cf916252c05!2sEKATTOR%20iT!5e0!3m2!1sen!2sbd!4v1582343331795!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EKATTOR IT Location"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .media-text .contact-link:hover {
    color: #fff; /* hover white */
  }

  .contact-media {
    height: 100%;
  }

  .media-style1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .media-text {
    min-height: 70px;
  }
  .orderby {
    /* background-color: #ffffff !important; */
    color: #3333 !important;
  }

  .orderby option {
    /* background-color: #ffffff; */
    color: #000000;
  }
  .form-control {
  text-transform: none;
}

  .form-control:focus {
    /* background-color: transparent !important; */
    /* color: #fff !important; */
    outline: none !important;
    border-color: none !important;
  }
  .input-single .form-control:focus {
    outline: none;
    box-shadow: none;
  }

  //formik css
  .invalid-feedback {
    font-size: 12px;
    color: red;
  }

  .imgDiv {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  //formik css

  .form-group {
    position: relative;
  }

  .input-single {
    position: relative;
  }

  .input-single .form-control {
    padding-right: 45px;
  }

  .input-single i {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #777;
    pointer-events: none;
  }
  .input-single textarea.form-control {
    min-height: 150px;
    resize: vertical; /* or resize: none; */
  }

  .error-message {
    display: block !important;
    font-size: 16px;
    position: relative;
    z-index: 99999;
  }
`;

export default Contact;
