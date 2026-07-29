import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  status: yup.boolean(),
  banner_title: yup.string().required("Title is a required field!"),
  banner_price: yup.string().required("Price is a required field!"),
  banner_background_image: yup
    .mixed()
    .required("Background Image is a required field!"),
  banner_image: yup.mixed().required("Banner Image is a required field!"),
  banner_shape_image: yup.mixed().required("Shape Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};
const UpdateBanner = () => {
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const { id } = useParams();
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

  // update
  const updatedValues = {
    status:
      item.status === true ? "true" : item.status === false ? "false" : "",
    banner_title: item.banner_title ? item.banner_title : "",
    banner_price: item.banner_price ? item.banner_price : "",
    banner_background_image: item.banner_background_image
      ? item.banner_background_image
      : "",
    banner_image: item.banner_image ? item.banner_image : "",
    banner_shape_image: item.banner_shape_image ? item.banner_shape_image : "",
  };

  const UpdateBannerFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("banner_title", values.banner_title);
    formfield.append("banner_price", values.banner_price);
    if (values.banner_background_image !== item.banner_background_image) {
      formfield.append(
        "banner_background_image",
        values.banner_background_image,
      );
    }
    if (values.banner_image !== item.banner_image) {
      formfield.append("banner_image", values.banner_image);
    }
    if (values.banner_shape_image !== item.banner_shape_image) {
      formfield.append("banner_shape_image", values.banner_shape_image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_banner/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Banner is successfully updated...");
        navigate("/banner");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateBannerForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await UpdateBannerFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateBanner = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_banner/${id}/`,
      );
      setItem(data);
      setShowImage1(data.banner_background_image);
      setShowImage2(data.banner_image);
      setShowImage3(data.banner_shape_image);
    };
    updateBanner(id);
  }, [id]);

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
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট হোম ব্যানার
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
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateBannerForm}
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
                            {/* <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Title
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                            {/* <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Price
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                            {/* <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Background Image
                                </label>
                                <input
                                  type="file"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                            {/* <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Banner Image
                                </label>
                                <input
                                  type="file"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                            {/* <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Shape Image
                                </label>
                                <input
                                  type="file"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                            {isSubmitting ? "Submitting..." : "Update Banner"}
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

export default UpdateBanner;
