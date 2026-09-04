import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as yup from "yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik, Form as FormikForm } from "formik";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup.string().required("Username is a required field!"),
  password: yup.string().required("Password is required!"),
});

const validate = (values) => {
  let errors = {};

  return errors;
};

const SignIn = () => {
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
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/staff_and_superuser_login/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        localStorage.setItem(
          "operaPublicationSuperuserandstaffAccessToken",
          response.data.access,
        );
        localStorage.setItem(
          "operaPublicationSuperuserandstaffRefreshToken",
          response.data.refresh,
        );
        localStorage.removeItem("operaPublicationAccessToken");
        localStorage.removeItem("operaPublicationRefreshToken");
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(
          error.response.data.non_field_errors ?? error.response.data.error,
        );
      });
  };

  // const submitLoginForm = async (
  //   values,
  //   { setErrors, setSubmitting, resetForm },
  // ) => {
  //   try {
  //     LoginFunc(values);
  //     setSubmitting(false);
  //     // resetForm();
  //   } catch (error) {
  //     setErrors({ error: error.message });
  //   }
  // };

  
  const submitLoginForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true); // Disable button during submission
      await AddLoginFunc(values); // Ensure this function returns a promise
      setSubmitting(false); // Re-enable button if necessary after submission
      // resetForm(); // Uncomment if you want to reset the form after submission
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false); // Re-enable button in case of an error
    }
  };

  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6 py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="auth-logo mb-4">
                    <Link to="/" className="logo-dark">
                      <img
                        src="/assets/images/logo-dark.png"
                        height="24"
                        alt="logo dark"
                      />
                    </Link>

                    <Link to="/" className="logo-light">
                      <img
                        src="/assets/images/logo-light.png"
                        height="24"
                        alt="logo light"
                      />
                    </Link>
                  </div>

                  <h2 className="fw-bold fs-24">Sign In</h2>

                  <p className="text-muted mt-1 mb-4">
                    Enter your email address and password to access admin panel.
                  </p>

                  <div className="mb-5">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={schema}
                      onSubmit={submitLoginForm}
                      validate={validate}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        isSubmitting,
                      }) => (
                        <FormikForm noValidate onSubmit={handleSubmit}>
                          <div className="authentication-form">
                            <div className="mb-2">
                              <Form.Group className="form-outline">
                                <Form.Label>
                                  Username<span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  {/* <InputGroup.Text>@</InputGroup.Text> */}
                                  <Form.Control
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.email && !!errors.email
                                    }
                                    isValid={touched.email && !errors.email}
                                    className="form-control"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="mb-4">
                              <Link
                                to="/forgot-password"
                                className="float-end text-muted text-unline-dashed ms-1"
                              >
                                Forgot password
                              </Link>

                              <Form.Group className="form-outline">
                                <Form.Label>
                                  Password<span className="text-danger">*</span>
                                </Form.Label>

                                <InputGroup hasValidation>
                                  <Form.Control
                                    type={showPassword ? "text" : "password"} // toggle between text and password
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.password && !!errors.password
                                    }
                                    isValid={
                                      touched.password && !errors.password
                                    }
                                    className="form-control"
                                  />
                                  <InputGroup.Text
                                    onClick={() =>
                                      setShowPassword((prev) => !prev)
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                  </InputGroup.Text>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>

                            <div className="mb-1 text-center d-grid">
                              <button
                                className="btn btn-soft-primary"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                {/* Sign In */}
                                 {isSubmitting ? "Signing..." : "Login"}
                              </button>
                            </div>
                          </div>
                          {message && (
                            <div className="alert alert-danger text-center">
                              {message}
                            </div>
                          )}
                        </FormikForm>
                      )}
                    </Formik>

                    <p className="mt-3 fw-semibold no-span">OR sign with</p>

                    <div className="d-grid gap-2">
                      <Link to="#" className="btn btn-soft-dark">
                        <i className="bx bxl-google fs-20 me-1"></i> Sign in
                        with Google
                      </Link>
                      <Link to="#" className="btn btn-soft-primary">
                        <i className="bx bxl-facebook fs-20 me-1"></i> Sign in
                        with Facebook
                      </Link>
                    </div>
                  </div>

                  <p className="text-danger text-center">
                    Don't have an account?
                    <Link to="/register" className="text-dark fw-bold ms-1">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img
                  src="/assets/images/small/img-10.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
