import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

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

const UpdateWriterChirkut = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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
    name: item.name ? item.name : "",
    designation: item.designation ? item.designation : "",
    description: item.description ? item.description : "",
    image: item.image ? item.image : "",
  };

  const UpdateBlogFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("name", values.name);
    formfield.append("designation", values.designation);
    formfield.append("description", content);
    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/opera_api/writter_chirkut/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Writter Chirkut is successfully updated...",
        );
        navigate("/writer-chirkut");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateSliderForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await UpdateBlogFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const updateBlog = async (id) => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/opera_api/writter_chirkut/${id}/`,
      );
      setItem(data);
      setShowImage(data.image);
      setContent(data.description);
    };
    updateBlog(id);
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
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট লেখকের চিরকুট
                  </h4>
                </div>

                <div className="card-body">
                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateSliderForm}
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
                            <Form.Group className="form-outline mb-0 w-100">
                              <Form.Label>
                                Descriptions<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                <JoditEditor
                                  className="w-100"
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
                            {isSubmitting
                              ? "Submitting..."
                              : " Update Witter Chirkut"}
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

export default UpdateWriterChirkut;
