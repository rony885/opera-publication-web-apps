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
  blog_id: "",
  pub_date: "",
  title: "",
  author: "",
  comments: "",
  views: "",
  description: "",
  image: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  blog_id: yup.string().required("Blog Id is a required field!"),
  pub_date: yup.string().required("Date Id is a required field!"),
  title: yup.string().required("Title is a required field!"),
  author: yup.string().required("Author is a required field!"),
  comments: yup.string().required("Comments is a required field!"),
  views: yup.string().required("Views is a required field!"),
  description: yup.mixed().required("Description is a required field!"),
  image: yup.mixed().required("Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const AddBlog = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddBlogFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status);
    formfield.append("blog_id", values.blog_id);
    formfield.append("pub_date", values.pub_date);
    formfield.append("title", values.title);
    formfield.append("author", values.author);
    formfield.append("comments", values.comments);
    formfield.append("views", values.views);
    formfield.append("description", values.description);
    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/blog_api/blog/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Blog is successfuly created...");
        navigate("/blogs");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddBlogForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddBlogFunc(values);
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
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড ব্লগ
                  </h4>
                </div>

                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddBlogForm}
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
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Blog Id
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
                                Blog Id
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="blog_id"
                                  id="blog_id"
                                  value={values.blog_id}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.blog_id && !!errors.blog_id
                                  }
                                  isValid={touched.blog_id && !errors.blog_id}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.blog_id}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
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
                                  name="author"
                                  id="author"
                                  value={values.author}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.author && !!errors.author
                                  }
                                  isValid={touched.author && !errors.author}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.author}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Date
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
                                Date
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="date"
                                  name="pub_date"
                                  id="pub_date"
                                  value={values.pub_date}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.pub_date && !!errors.pub_date
                                  }
                                  isValid={touched.pub_date && !errors.pub_date}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.pub_date}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-3">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
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
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Comments
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
                                Comments
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="comments"
                                  id="comments"
                                  value={values.comments}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.comments && !!errors.comments
                                  }
                                  isValid={touched.comments && !errors.comments}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.comments}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="col-lg-4">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Views
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
                                Views
                                <span className="text-danger">*</span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="text"
                                  name="views"
                                  id="views"
                                  value={values.views}
                                  onChange={handleChange}
                                  isInvalid={!!touched.views && !!errors.views}
                                  isValid={touched.views && !errors.views}
                                  classname="form-control mb-0"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.views}
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
                          <div className="col-lg-6">
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

                          <div className="col-lg-6">
                            {/* <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Image
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form> */}
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
                          <button  className="btn btn-success"     type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : " Add Blog"}
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

export default AddBlog;
