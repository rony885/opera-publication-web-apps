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
  title: yup.string().required("Title is a required field!"),
  author: yup.string().required("Name is a required field!"),
  comments: yup.string().required("Comments is a required field!"),
  views: yup.string().required("Views is a required field!"),
  description: yup.string(),
  image: yup.mixed().required("Image is a required field!"),
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
    title: item.title ? item.title : "",
    author: item.author ? item.author : "",
    comments: item.comments ? item.comments : "",
    views: item.views ? item.views : "",
    description: item.description ? item.description : "",
    image: item.image ? item.image : "",
  };

  const UpdateBlogFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("title", values.title);
    formfield.append("author", values.author);
    formfield.append("comments", values.comments);
    formfield.append("views", values.views);
    formfield.append("description", content);
    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/blog_api/blog/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Blog is successfully updated...");
        // navigate("/blogs");
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
        `${process.env.REACT_APP_BASE_URL}/blog_api/blog/${id}/`,
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
                  <div className="row">
                    <div className="col-lg-3">
                      <form>
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
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
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
                      </form>
                    </div>

                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Description
                          </label>
                          <textarea
                            className="form-control bg-light-subtle"
                            id="description"
                            rows="1"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Features One
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
                            Features Two
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
                            Features Three
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
                            Features Four
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Opera Video
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
                    </div>
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
                    <button type="submit" className="btn btn-success">
                      Save Change
                    </button>
                  </div>
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
