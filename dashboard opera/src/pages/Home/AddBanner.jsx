import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  status: "",
  banner_title: "",
  banner_price: "",
  banner_background_image: "",
  banner_image: "",
  banner_shape_image: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  banner_title: yup.string().required("Title is a required field!"),
  banner_price: yup.string().required("Price is a required field!"),
  banner_background_image: yup
    .mixed()
    .required("Background Image is a required field!"),
  banner_image: yup.mixed().required("Image is a required field!"),
  banner_shape_image: yup.mixed().required("Shape Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddBanner = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [showImage1, setShowImage1] = useState(null);
  const [showImage2, setShowImage2] = useState(null);
  const [showImage3, setShowImage3] = useState(null);

  const onImageChange1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage1(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage2(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImageChange3 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage3(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddBannerFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("banner_title", values.banner_title);
    formfield.append("banner_price", values.banner_price);
    if (values.banner_background_image) {
      formfield.append(
        "banner_background_image",
        values.banner_background_image,
      );
    }
    if (values.banner_image) {
      formfield.append("banner_image", values.banner_image);
    }
    if (values.banner_shape_image) {
      formfield.append("banner_shape_image", values.banner_shape_image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_banner/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Banner is successfuly created...");
        navigate("/banner");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
        console.log(error);
      });
  };

  const submitAddBannerForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddBannerFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <h4
                    className="card-title flex-grow-1 fs-4 fw-normal"
                    style={{ fontFamily: "Chayalipi" }}
                  >
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড হোম ব্যানার
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-0">
                  <h4 className="card-title flex-grow-1 fs-4">
                    {" "}
                    Banner Section
                  </h4>
                </div>

                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddBannerForm}
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
                        <div className="row">
                          <div className="col-lg-6">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Title
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="banner_title"
                                  id="banner_title"
                                  value={values.banner_title}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.banner_title &&
                                    !!errors.banner_title
                                  }
                                  isValid={
                                    touched.banner_title && !errors.banner_title
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.banner_title}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Price
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="banner_price"
                                  id="banner_price"
                                  value={values.banner_price}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.banner_price &&
                                    !!errors.banner_price
                                  }
                                  isValid={
                                    touched.banner_price && !errors.banner_price
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.banner_price}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Background Image
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="banner_background_image"
                                id="banner_background_image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "banner_background_image",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange1(event);
                                }}
                                isInvalid={
                                  !!touched.banner_background_image &&
                                  !!errors.banner_background_image
                                }
                                isValid={
                                  touched.banner_background_image &&
                                  !errors.banner_background_image
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.banner_background_image}
                              </Form.Control.Feedback>

                              {showImage1 && (
                                <div>
                                  <img
                                    alt="img"
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      marginTop: "20px",
                                      borderRadius: "50%",
                                    }}
                                    src={showImage1}
                                  />
                                </div>
                              )}
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Banner Image
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="banner_image"
                                id="banner_image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "banner_image",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange2(event);
                                }}
                                isInvalid={
                                  !!touched.banner_image &&
                                  !!errors.banner_image
                                }
                                isValid={
                                  touched.banner_image && !errors.banner_image
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.banner_image}
                              </Form.Control.Feedback>

                              {showImage2 && (
                                <div>
                                  <img
                                    alt="img"
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      marginTop: "20px",
                                      borderRadius: "50%",
                                    }}
                                    src={showImage2}
                                  />
                                </div>
                              )}
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Shape Image
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="banner_shape_image"
                                id="banner_shape_image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "banner_shape_image",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange3(event);
                                }}
                                isInvalid={
                                  !!touched.banner_shape_image &&
                                  !!errors.banner_shape_image
                                }
                                isValid={
                                  touched.banner_shape_image &&
                                  !errors.banner_shape_image
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.banner_shape_image}
                              </Form.Control.Feedback>

                              {showImage3 && (
                                <div>
                                  <img
                                    alt="img"
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      marginTop: "20px",
                                      borderRadius: "50%",
                                    }}
                                    src={showImage3}
                                  />
                                </div>
                              )}
                            </Form.Group>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end gap-2 my-2">
                          <button type="reset" className="btn btn-danger">
                            Cancel
                          </button>
                          <button
                            className="btn btn-success"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : " Add Banner"}
                          </button>
                        </div>

                        {/* message  */}
                        {message && (
                          <h2 className="text-center m-5">{message}</h2>
                        )}
                      </FormikForm>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .choices__inner {
    background-color: transparent !important;
  }
  .choices__inner:focus {
    border: transparent !important;
  }
`;

export default AddBanner;
