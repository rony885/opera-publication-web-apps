import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().required("Login Phone is a required field!"),
  password: yup.string().required("Password is a required field!"),
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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const AddLoginFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields
    formfield.append("email", values.email);
    formfield.append("password", values.password);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/login/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        localStorage.setItem(
          "operaPublicationAccessToken",
          response.data.access,
        );
        localStorage.setItem(
          "operaPublicationRefreshToken",
          response.data.refresh,
        );
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.non_field_errors);
      });
  };

  const submitLoginForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      AddLoginFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

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
            <h1 className="breadcumb-title fs-4 fw-normal">লগইন</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  লগইন
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
              <h2>Login To Your Account</h2>

              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={submitLoginForm}
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

                      <Form.Group className="form-group mb-3">
                        <Form.Label>
                          Password<span className="text-danger">*</span>
                        </Form.Label>

                        <InputGroup
                          hasValidation
                          className="password-input-group"
                        >
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!touched.password && !!errors.password}
                            isValid={touched.password && !errors.password}
                            className="form-control my-0"
                            autoComplete="on"
                          />

                          <span
                            className="password-eye-icon"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>

                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="register-btn"
                      >
                        Sign In
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

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="footer-text">
                  New here? Please <Link to="/registration">Sign Up</Link>
                </div>

                <div className="footer-text">
                  <Link
                    to="/forgot-password"
                    className="text-decoration-underline"
                  >
                    Forgotten Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .registration-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

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

  .form-container h2 {
    text-align: center;
    color: #ff0000;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 25px;
  }

  .form-group {
    margin-bottom: 15px;
  }

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

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #aaa;
  }

  /* .autofill-bg {
    background-color: #F8EBE5 !important;
  } */

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

  @media (max-width: 575px) {
    .form-container {
      max-width: 100%;
      padding: 25px 20px;
    }

    .form-container h2 {
      font-size: 24px;
    }
  }

  /* ===== Password icon ===== */
  .password-input-group {
    position: relative;
  }
  .password-input-group .form-control {
    padding-right: 42px;
  }
  .password-eye-icon {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    color: #777;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .password-eye-icon:hover {
    color: #ff0000;
  }
`;

export default Login;
