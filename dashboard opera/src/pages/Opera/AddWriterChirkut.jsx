import React, { useRef } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

const initialValues = {
  status: "",
  // blog_id: "",
  // pub_date: "",
  title: "",
  author: "",
  comments: "",
  views: "",
  description: "",
  image: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  name: yup.string().required("Name is a required field!"),
  designation: yup.string().required("Designation is a required field!"),
  description: yup.string(),
  image: yup.mixed().required("Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddWriterChirkut = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const editor = useRef(null);
  const [content1, setContent1] = useState("");

  const [showImage, setShowImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddWritterChirkutFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("name", values.name);
    formfield.append("designation", values.designation);
    formfield.append("description", content1);
    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/opera_api/unpaginate_writter_chirkut/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Blog is successfuly created...");
        navigate("/writer-chirkut");
        window.location.reload(false);
      })
      // .catch((error) => {
      //   setMessage(error.message, "Error");
      // });
      .catch((error) => {
        console.log(error.response);
        console.log(error.response?.data);
        setMessage(error.response?.data || error.message);
      });
  };

  const submitAddWritterChirkutForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddWritterChirkutFunc(values);
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
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                  <h4
                    className="card-title flex-grow-1 fs-4 fw-normal"
                    style={{ fontFamily: "Chayalipi" }}
                  >
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড লেখকের চিরকুট
                  </h4>
                </div>

                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddWritterChirkutForm}
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
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Name
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
                                Name
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="name"
                                  id="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  isInvalid={!!touched.name && !!errors.name}
                                  isValid={touched.name && !errors.name}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.name}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                          <div className="col-lg-4">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Designation
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
                                Designation
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="designation"
                                  id="designation"
                                  value={values.designation}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.designation &&
                                    !!errors.designation
                                  }
                                  isValid={
                                    touched.designation && !errors.designation
                                  }
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.designation}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>
                          <div className="col-lg-4">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Image
                                </label>
                                <input
                                  type="file"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Descriptions
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="3"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end gap-2 my-2">
                          <button type="reset" className="btn btn-danger">
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-success">
                            Submit
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

export default AddWriterChirkut;
