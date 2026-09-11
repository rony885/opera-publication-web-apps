import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as yup from "yup";
import axios from "axios";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const initialValues = {
  old_password: "",
  new_password: "",
  confirm_new_password: "",
};

const schema = yup.object().shape({
  old_password: yup.string().required("Old password is a required field!"),
  new_password: yup.string().required("New Password is a required field!"),
  confirm_new_password: yup
    .string()
    .required("Confirm Password is a required field!"),
});

const validate = (values) => {
  let errors = {};

  if (!values.old_password) {
    errors.old_password = "Old Password is required!";
  } else if (values.old_password.length < 4) {
    errors.old_password = "Old Password is too short!";
  }

  if (!values.new_password) {
    errors.new_password = "New Password is required!";
  } else if (values.new_password.length < 4) {
    errors.new_password = "New Password is too short!";
  }

  if (!values.confirm_new_password) {
    errors.confirm_new_password = "Confirm Password is required!";
  } else if (values.confirm_new_password.length < 4) {
    errors.confirm_new_password = "Confirm Password is too short!";
  }

  return errors;
};

const ChangesPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const aT = localStorage.getItem("operaPublicationAccessToken");

  // add
  const AddChangeFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("old_password", values.old_password);
    formfield.append("new_password", values.new_password);
    formfield.append("confirm_new_password", values.confirm_new_password);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/change_password/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${aT}`,
      },
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "User is successfuly created...");
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          error.response.data.old_password ||
            error.response.data.new_password ||
            error.response.data.confirm_new_password ||
            error.response.data.non_field_errors ||
            error.response.data.error ||
            error.message,
          "Error",
        );
      });
  };

  const submitChangeForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true); // Disable button during submission
      await AddChangeFunc(values); // Ensure this function returns a promise
      setSubmitting(false); // Re-enable button if necessary after submission
      // resetForm(); // Uncomment if you want to reset the form after submission
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false); // Re-enable button in case of an error
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
            <h1 className="breadcumb-title fs-4 fw-normal">Change Password</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  Change Password
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
              <h2>Change Password</h2>

              <p
                style={{
                  color: "#495057",
                  fontSize: "14px",
                  marginBottom: "20px",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "justify",
                }}
              >
                Change Your Password Here...
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={submitChangeForm}
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
                  <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="form-group mb-3">
                      <Form.Label className="mb-0">
                        Old Password<span className="text-danger">*</span>
                      </Form.Label>

                      <InputGroup
                        hasValidation
                        className="password-input-group"
                      >
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="old_password"
                          id="old_password"
                          value={values.old_password}
                          onChange={handleChange}
                          isInvalid={
                            !!touched.old_password && !!errors.old_password
                          }
                          isValid={touched.old_password && !errors.old_password}
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
                          {errors.old_password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="form-group mb-3">
                      <Form.Label className="mb-0">
                        New Password<span className="text-danger">*</span>
                      </Form.Label>

                      <InputGroup
                        hasValidation
                        className="password-input-group"
                      >
                        <Form.Control
                          type={showPassword1 ? "text" : "password"}
                          name="new_password"
                          id="new_password"
                          value={values.new_password}
                          onChange={handleChange}
                          isInvalid={
                            !!touched.new_password && !!errors.new_password
                          }
                          isValid={touched.new_password && !errors.new_password}
                          className="form-control my-0"
                          autoComplete="on"
                        />

                        <span
                          className="password-eye-icon"
                          onClick={() => setShowPassword1((prev) => !prev)}
                        >
                          {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        <Form.Control.Feedback type="invalid">
                          {errors.new_password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="form-group mb-3">
                      <Form.Label className="mb-0">
                        Confirm New Password
                        <span className="text-danger">*</span>
                      </Form.Label>

                      <InputGroup
                        hasValidation
                        className="password-input-group"
                      >
                        <Form.Control
                          type={showPassword2 ? "text" : "password"}
                          name="confirm_new_password"
                          id="confirm_new_password"
                          value={values.confirm_new_password}
                          onChange={handleChange}
                          isInvalid={
                            !!touched.confirm_new_password &&
                            !!errors.confirm_new_password
                          }
                          isValid={
                            touched.confirm_new_password &&
                            !errors.confirm_new_password
                          }
                          className="form-control my-0"
                          autoComplete="on"
                        />

                        <span
                          className="password-eye-icon"
                          onClick={() => setShowPassword2((prev) => !prev)}
                        >
                          {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        <Form.Control.Feedback type="invalid">
                          {errors.confirm_new_password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    {/* message  */}
                    {message && (
                      <h6 className="text-center my-4 m-2 ">{message}</h6>
                    )}

                    <button
                      className="register-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Changing..." : "Change Password"}
                    </button>
                  </FormikForm>
                )}
              </Formik>

              <div className="footer-text">
                <Link to="/login">Back to Login</Link>
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

  .form-group label {
    display: block;
    font-size: 13px;
    color: #333;
    font-weight: 400;
  }

  .required {
    color: #ff0000;
    margin-left: 2px;
  }

  .form-group input {
    width: 100%;
    height: 42px;
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

  .form-group input:focus {
    border-color: #aaa;
    box-shadow: none;
  }

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

export default ChangesPassword;
