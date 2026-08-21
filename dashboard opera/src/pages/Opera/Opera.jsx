import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  status: yup.boolean(),
  title: yup.string().required("Title is a required field!"),
  features_one: yup.string().required("Features One is a required field!"),
  features_two: yup.string().required("Features Two is a required field!"),
  features_three: yup.string().required("Features Three is a required field!"),
  features_four: yup.string().required("Features Four is a required field!"),
  opera_video: yup.string(),
  description: yup.string(),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const Opera = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();

  const [showImage, setShowImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // update
  const updatedValues = {
    status:
      item.status === true ? "true" : item.status === false ? "false" : "",
    title: item.title ? item.title : "",
    features_one: item.features_one ? item.features_one : "",
    features_two: item.features_two ? item.features_two : "",
    features_three: item.features_three ? item.features_three : "",
    features_four: item.features_four ? item.features_four : "",
    opera_video: item.opera_video ? item.opera_video : "",
    description: item.description ? item.description : "",
    image: item.image ? item.image : "",
  };

  const UpdateOperaSectFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("title", values.title);
    formfield.append("features_one", values.features_one);
    formfield.append("features_two", values.features_two);
    formfield.append("features_three", values.features_three);
    formfield.append("features_four", values.features_four);
    formfield.append("opera_video", values.opera_video);
    formfield.append("description", content);
    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_opera_section/1/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Opera Section is successfully updated...",
        );
        // navigate("/blogs");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateOperaSectForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await UpdateOperaSectFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateOperaSection = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_opera_section/1/`,
      );
      setItem(data);
      setShowImage(data.image);
      setContent(data.description);
    };
    updateOperaSection(id);
  }, [id]);

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                  <h4
                    className="card-title flex-grow-1 fs-4 fw-normal"
                    style={{ fontFamily: "Chayalipi" }}
                  >
                    <Link to="/">ড্যাশবোর্ড</Link> | অপেরা
                  </h4>

                  {/* <button
                    className="btn btn-sm btn-primary fs-5"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenteredScrollable"
                  >
                    Create Customer
                  </button> */}
                </div>

                <div className="card-body">
                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateOperaSectForm}
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
                                  name="title"
                                  id="title"
                                  value={values.title}
                                  onChange={handleChange}
                                  isInvalid={!!touched.title && !!errors.title}
                                  isValid={touched.title && !errors.title}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.title}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Opera Video
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="opera_video"
                                  id="opera_video"
                                  value={values.opera_video}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.opera_video &&
                                    !!errors.opera_video
                                  }
                                  isValid={
                                    touched.opera_video && !errors.opera_video
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.opera_video}
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
                        </div>

                        <div className="row">
                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Features One
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="features_one"
                                  id="features_one"
                                  value={values.features_one}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.features_one &&
                                    !!errors.features_one
                                  }
                                  isValid={
                                    touched.features_one && !errors.features_one
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.features_one}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Features Two
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="features_two"
                                  id="features_two"
                                  value={values.features_two}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.features_two &&
                                    !!errors.features_two
                                  }
                                  isValid={
                                    touched.features_two && !errors.features_two
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.features_two}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Features Three
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="features_three"
                                  id="features_three"
                                  value={values.features_three}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.features_three &&
                                    !!errors.features_three
                                  }
                                  isValid={
                                    touched.features_three &&
                                    !errors.features_three
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.features_three}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                          <div className="col-lg-3">
                            <Form.Group className="form-outline mb-3">
                              <Form.Label>
                                Features Four
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="features_four"
                                  id="features_four"
                                  value={values.features_four}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.features_four &&
                                    !!errors.features_four
                                  }
                                  isValid={
                                    touched.features_four &&
                                    !errors.features_four
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.features_four}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <Form.Group className="form-outline mb-0 w-100">
                              <Form.Label>
                                Descriptions<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <JoditEditor
                                  name="description"
                                  id="description"
                                  ref={editor}
                                  value={content}
                                  onChange={(newContent) =>
                                    setContent(newContent)
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.description}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-6">
                            <Form.Group className="form-outline mb-3 imgDiv divv">
                              <Form.Label>
                                Image
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                                id="image"
                                onChange={(event) => {
                                  setFieldValue(
                                    "image",
                                    event.currentTarget.files[0],
                                  );
                                  onImageChange(event);
                                }}
                                isInvalid={!!touched.image && !!errors.image}
                                isValid={touched.image && !errors.image}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.image}
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

                          {/* <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Count
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            M/+
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Label
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div> */}
                        </div>

                        {/* <div className="d-flex justify-content-end gap-2 my-2">
                    <button type="reset" className="btn btn-danger">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div> */}
                        <div className="my-4 d-flex rounded justify-content-end">
                          <button
                            className="btn btn-success"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Save"}
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

              {/* ========= Add Customer Modal ========= */}
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

export default Opera;
