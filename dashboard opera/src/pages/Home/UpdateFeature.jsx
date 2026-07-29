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
  feature_title: yup.string().required("Title is a required field!"),
  feature_image_one: yup.mixed().required("Image One is a required field!"),
  feature_image_two: yup.mixed().required("Image Two is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const UpdateFeature = () => {
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [showImage1, setShowImage1] = useState(null);
  const [showImage2, setShowImage2] = useState(null);

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

  // update
  const updatedValues = {
    status:
      item.status === true ? "true" : item.status === false ? "false" : "",
    feature_title: item.feature_title ? item.feature_title : "",
    feature_image_one: item.feature_image_one ? item.feature_image_one : "",
    feature_image_two: item.feature_image_two ? item.feature_image_two : "",
  };

  const UpdateSliderFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("feature_title", values.feature_title);
    if (values.feature_image_one !== item.feature_image_one) {
      formfield.append("feature_image_one", values.feature_image_one);
    }
    if (values.feature_image_two !== item.feature_image_two) {
      formfield.append("feature_image_two", values.feature_image_two);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_feature/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Feature is successfully updated...");
        navigate("/feature");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateFeatureForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await UpdateSliderFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateFeature = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/home_api/unpaginate_feature/${id}/`,
      );
      setItem(data);
      setShowImage1(data.feature_image_one);
      setShowImage2(data.feature_image_two);
    };
    updateFeature(id);
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
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট হোম
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-0">
                  <h4 className="card-title flex-grow-1 fs-4"> Feature Area</h4>
                </div>

                <div className="card-body">
                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateFeatureForm}
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
                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Title
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="feature_title"
                                  id="feature_title"
                                  value={values.feature_title}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.feature_title &&
                                    !!errors.feature_title
                                  }
                                  isValid={
                                    touched.feature_title &&
                                    !errors.feature_title
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.feature_title}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-0">
                              <Form.Label>
                                Status<span></span>
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

                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Image One
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="feature_image_one"
                                id="feature_image_one"
                                onChange={(event) => {
                                  setFieldValue(
                                    "feature_image_one",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange1(event);
                                }}
                                isInvalid={
                                  !!touched.feature_image_one &&
                                  !!errors.feature_image_one
                                }
                                isValid={
                                  touched.feature_image_one &&
                                  !errors.feature_image_one
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.feature_image_one}
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

                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Image Two
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="feature_image_two"
                                id="feature_image_two"
                                onChange={(event) => {
                                  setFieldValue(
                                    "feature_image_two",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange2(event);
                                }}
                                isInvalid={
                                  !!touched.feature_image_two &&
                                  !!errors.feature_image_two
                                }
                                isValid={
                                  touched.feature_image_two &&
                                  !errors.feature_image_two
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.feature_image_two}
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

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button
                              className="btn btn-success"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Submitting..." : "Update Feature"}
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

export default UpdateFeature;
