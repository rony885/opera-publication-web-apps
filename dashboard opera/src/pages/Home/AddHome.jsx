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
  slider_title: "",
  slider_description: "",
  slider_image: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  slider_title: yup.string().required("Title is a required field!"),
  slider_description: yup.mixed().required("Description is a required field!"),
  slider_image: yup.mixed().required("Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddHome = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddSliderFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("slider_title", values.slider_title);
    formfield.append("slider_description", values.slider_description);
    if (values.slider_image) {
      formfield.append("slider_image", values.slider_image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/home_api/home/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Home Slider is successfuly created...");
        navigate("/home-list");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddSliderForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddSliderFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
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
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড স্লাইডার
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
                    Slider Section
                  </h4>
                </div>

                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddSliderForm}
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
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Title
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="slider_title"
                                  id="slider_title"
                                  value={values.slider_title}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.slider_title &&
                                    !!errors.slider_title
                                  }
                                  isValid={
                                    touched.slider_title && !errors.slider_title
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.slider_title}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                status<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Select
                                  name="status"
                                  id="status"
                                  value={values.status}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.status && !!errors.status
                                  }
                                  isValid={touched.status && !errors.status}
                                  className="form-control mb-0"
                                >
                                  <option value="">Select</option>
                                  <option value={`${true}`}>Active</option>
                                  <option value={`${false}`}>Inactive</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.status}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Descriptions
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="slider_description"
                                  id="slider_description"
                                  value={values.slider_description}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.slider_description &&
                                    !!errors.slider_description
                                  }
                                  isValid={
                                    touched.slider_description &&
                                    !errors.slider_description
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.slider_description}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          {" "}
                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Image
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="slider_image"
                                id="slider_image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "slider_image",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange(event);
                                }}
                                isInvalid={
                                  !!touched.slider_image &&
                                  !!errors.slider_image
                                }
                                isValid={
                                  touched.slider_image && !errors.slider_image
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.slider_image}
                              </Form.Control.Feedback>

                              {showImage && (
                                <div>
                                  <img
                                    alt="img"
                                    style={{
                                      width: "150px",
                                      height: "150px",
                                      marginTop: "20px",
                                      borderRadius: "50%",
                                    }}
                                    src={showImage}
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
                            {isSubmitting ? "Submitting..." : " Add Slider"}
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

export default AddHome;
