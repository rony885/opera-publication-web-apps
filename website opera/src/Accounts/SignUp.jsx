import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useApiContext } from "../context/ApiContext";

const initialValues = {
  name: "",
  email: "",
  password: "",
  // district: "",
  // upazila: "",
  address: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Customer Name is a required field!"),
  email: yup.string().required("Customer Phone is a required field!"),
  password: yup.string().required("Password is a required field!"),
  // district: yup.string().required("Customer District is a required field!"),
  // upazila: yup.string().required("Customer Upazila is a required field!"),
  address: yup.string().required("Customer Address is a required field!"),
});

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Phone or Username is required!";
  } else if (/^[0-9\b]+$/.test(values.email) === false) {
    errors.email = "Only number!";
  } else if (values.email.length !== 11) {
    errors.email = "Mobile Number contains 11 digit!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password is too short!";
  }
  return errors;
};

const SignUp = () => {
  // const { district, upazila, fetchDistrict, fetchUpazila } = useApiContext();

  // useEffect(() => {
  //   fetchDistrict();
  //   fetchUpazila();
  // }, [fetchDistrict, fetchUpazila]);

  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const AddRegFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields
    formfield.append("name", values.name);
    formfield.append("email", values.email);
    formfield.append("password", values.password);
    // formfield.append("district", values.district);
    // formfield.append("upazila", values.upazila);
    formfield.append("address", values.address);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/register/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.email);
      });
  };

  const submitRegisterForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      AddRegFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  // const [selectedDistrict, setSelectedDistrict] = useState("");
  // const [selectedUpazila, setSelectedUpazila] = useState("");

  // const handleDistrictChange = (e) => {
  //   const selectedDistrictName = e.target.value;
  //   setSelectedDistrict(
  //     district.find((district) => district.name === selectedDistrictName),
  //   );
  //   setSelectedUpazila("");
  // };

  // const handleUpazilaChange = (e) => {
  //   const selectedUpazilaName = e.target.value;
  //   setSelectedUpazila(
  //     upazila.find((upazila) => upazila.name === selectedUpazilaName),
  //   );
  // };

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">রেজিস্ট্রেশন</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  রেজিস্ট্রেশন
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="registration-wrapper">
            <div className="form-container">
              <h2>Registration</h2>

              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={submitRegisterForm}
                validate={validate}
              >
                {({
                  handleSubmit,
                  handleChange,
                  isSubmitting,
                  values,
                  errors,
                  touched,
                }) => (
                  <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                    <div>
                      {/* Customer Name */}
                      {/* <div className="form-group">
                        <label htmlFor="customer_name">
                          Customer Name <span className="required">*</span>
                        </label>

                        <input
                          type="text"
                          id="customer_name"
                          name="customer_name"
                          required
                        />
                      </div> */}
                      <Form.Group className="form-group mb-3">
                        <Form.Label>
                          Customer Name<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          {/* <InputGroup.Text>@</InputGroup.Text> */}
                          <Form.Control
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!touched.name && !!errors.name}
                            isValid={touched.name && !errors.name}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* District */}
                      <div className="form-group mb-3">
                        <label htmlFor="district">
                          District <span className="required">*</span>
                        </label>

                        <select
                          id="district"
                          name="district"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="dhaka">Dhaka</option>
                          <option value="chittagong">Chittagong</option>
                          <option value="rajshahi">Rajshahi</option>
                          <option value="khulna">Khulna</option>
                          <option value="sylhet">Sylhet</option>
                        </select>
                      </div>

                      {/* Upazila */}
                      <div className="form-group mb-3">
                        <label htmlFor="upazila">
                          Upazila <span className="required">*</span>
                        </label>

                        <select
                          id="upazila"
                          name="upazila"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="kaliganj">Kaliganj</option>
                          <option value="savar">Savar</option>
                          <option value="dhamrai">Dhamrai</option>
                          <option value="keraniganj">Keraniganj</option>
                        </select>
                      </div>

                      {/* Customer Address */}
                      {/* <div className="form-group mb-2">
                        <label htmlFor="customer_address">
                          Customer Address <span className="required">*</span>
                        </label>

                        <textarea
                          id="customer_address"
                          name="customer_address"
                          rows="3"
                          required
                        />
                      </div> */}
                      <Form.Group className="form-group mb-2">
                        <Form.Label>
                          Customer Address<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            as="textarea"
                            name="address"
                            id="address"
                            value={values.address}
                            onChange={handleChange}
                            isInvalid={!!touched.address && !!errors.address}
                            isValid={touched.address && !errors.address}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.address}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Phone */}
                      {/* <div className="form-group mb-3">
                        <label htmlFor="phone">
                          Phone <span className="required">*</span>
                        </label>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="autofill-bg"
                          // defaultValue="01609857822"
                          required
                        />
                      </div> */}
                      <Form.Group className="form-group mb-3 ">
                        <Form.Label>
                          Phone<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!touched.email && !!errors.email}
                            isValid={touched.email && !errors.email}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Password */}
                      {/* <div className="form-group mb-4">
                        <label htmlFor="password">
                          Password <span className="required">*</span>
                        </label>

                        <input
                          type="password"
                          id="password"
                          name="password"
                          required
                        />
                      </div> */}

                      <Form.Group className="form-group mb-4 ">
                        <Form.Label>
                          Password<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!touched.password && !!errors.password}
                            isValid={touched.password && !errors.password}
                            className="form-control my-0"
                            autoComplete="on"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Register Button */}
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="register-btn"
                      >
                        Register
                      </button>
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontSize: "15px",
                        textTransform: "capitalize",
                      }}
                    >
                      {message}
                    </p>
                  </FormikForm>
                )}
              </Formik>

              {/* Login */}
              <div className="footer-text">
                Already have an account? <Link to="/login">Please Login</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* ================================= */
  /* REGISTRATION WRAPPER */
  /* ================================= */

  .registration-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  /* ================================= */
  /* FORM CONTAINER */
  /* ================================= */

  .form-container {
    width: 100%;
    max-width: 480px;
    background-color: #f8ebe5;
    padding: 30px 40px;
    border-radius: 4px;
    border: 1px solid #d1d4d8;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
  }

  /* ================================= */
  /* TITLE */
  /* ================================= */

  .form-container h2 {
    text-align: center;
    color: #ff0000;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 25px;
  }

  /* ================================= */
  /* FORM GROUP */
  /* ================================= */

  .form-group {
    margin-bottom: 15px;
  }

  /* ================================= */
  /* LABEL */
  /* ================================= */

  .form-group label {
    display: block;
    /* margin-bottom: 6px; */
    font-size: 13px;
    color: #333;
    font-weight: 400;
  }

  .required {
    color: #ff0000;
    margin-left: 2px;
  }

  /* ================================= */
  /* INPUT / SELECT / TEXTAREA */
  /* ================================= */

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .form-group input {
    height: 42px;
  }

  .form-group select {
    height: 42px;
    cursor: pointer;
  }

  .form-group textarea {
    min-height: 75px;
    resize: vertical;
  }

  /* ================================= */
  /* FOCUS */
  /* ================================= */

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #aaa;
  }

  /* ================================= */
  /* AUTOFILL BACKGROUND */
  /* ================================= */

  /* .autofill-bg {
    background-color: #F8EBE5 !important;
  } */

  /* ================================= */
  /* REGISTER BUTTON */
  /* ================================= */

  .register-btn {
    width: 100%;
    height: 44px;
    padding: 10px 15px;
    margin-top: 10px;
    font-family: Arial, sans-serif;
    background-color: #ff0000;
    color: #fff;

    border: none;
    border-radius: 4px;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .register-btn:hover {
    background-color: #e60000;
  }

  /* ================================= */
  /* FOOTER TEXT */
  /* ================================= */

  .footer-text {
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    color: #333;
    font-family: Arial, sans-serif;
  }

  .footer-text a {
    color: #ff0000;
    text-decoration: none;
  }

  .footer-text a:hover {
    text-decoration: underline;
  }

  /* ================================= */
  /* RESPONSIVE */
  /* ================================= */

  @media (max-width: 575px) {
    .form-container {
      max-width: 100%;
      padding: 25px 20px;
    }

    .form-container h2 {
      font-size: 24px;
    }
  }
`;

export default SignUp;
