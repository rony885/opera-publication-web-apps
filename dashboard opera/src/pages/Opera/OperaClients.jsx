import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import "@iconify-icon/react";
import Tooltip from "@mui/material/Tooltip";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  status: "",
  operaClientLink: "",
  image: "",
};

const schema = yup.object().shape({
  status: yup.boolean(),
  operaClientLink: yup.string().required("Please enter a valid URL"),
  image: yup.mixed().required("Image is a required field!"),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const OperaClients = () => {
  const {
    opera_client,
    fetchOperaClient,
    // handleApiPageChange,
    // handleApiItemPerPageChange,
    // handleApiSearchItemChange,
    // resetPagination,
  } = useApiContext();

  useEffect(() => {
    fetchOperaClient();
  }, [fetchOperaClient]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(null);
  const [showUpdateImage, setShowUpdateImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onUpdateImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowUpdateImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // update
  const [item, setItem] = useState({});
  // const { id } = useParams();

  // add
  const AddOperaClientsFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("operaClientLink", values.operaClientLink);

    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/opera_api/opera_clients/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Opera Clients is successfuly created...");
        navigate("/opera-clients");
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

  const submitAddOperaClientsForm = async (
    values,
    { setErrors, setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);
      await AddOperaClientsFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  // update
  const updatedValues = {
    status:
      item.status === true ? "true" : item.status === false ? "false" : "",
    operaClientLink: item.operaClientLink ? item.operaClientLink : "",
    image: item.image ? item.image : "",
  };

  const UpdateOperaClientsFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("status", values.status === "true");
    formfield.append("operaClientLink", values.operaClientLink);
    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/opera_api/opera_clients/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Opera Clients is successfully updated...",
        );
        navigate("/opera-clients");
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
      await UpdateOperaClientsFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
      setSubmitting(false);
    }
  };

  // Get single client by ID for edit
  const updateOperaClients = async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/opera_api/opera_clients/${id}/`,
      );

      setItem(data);

      // Show existing image
      setShowUpdateImage(data.image);
    } catch (error) {
      console.log("Edit data error:", error);
    }
  };

  const [receivedId, setReceivedId] = useState(null);

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteclient = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/opera_api/opera_clients/${id}/`,
    );
    window.location.reload(false);
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3 pb-2">
                  <h4
                    className="card-title flex-grow-1 fs-4 fw-normal"
                    style={{ fontFamily: "Chayalipi" }}
                  >
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড ক্লায়েন্ট
                  </h4>
                  <button
                    className="btn btn-sm btn-primary fs-5"
                    data-bs-toggle="modal"
                    data-bs-target="#createModalCenteredScrollable"
                  >
                    অ্যাড ক্লায়েন্ট
                  </button>
                </div>

                <div className="table-responsive">
                  <div className="barcode-input mb-2 mx-2">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Search here..."
                    />
                  </div>
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light">
                      <tr>
                        <th className="text-start" style={{ width: "20px" }}>
                          #
                        </th>
                        <th className="text-center">Image</th>
                        <th className="text-center">Status</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {opera_client &&
                        opera_client.map((client, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-start">{index + 1}</td>
                              <td>
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                    <img
                                      src={client.image}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                {" "}
                                {client.status === true ? "Active" : "Inactive"}
                              </td>
                              <td>
                                <div className="d-flex gap-2 justify-content-end align-items-center">
                                  <Tooltip title="Edit" arrow>
                                    <button
                                      onClick={() =>
                                        updateOperaClients(client.id)
                                      }
                                      className="btn btn-soft-primary btn-sm"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModalCenteredScrollable"
                                    >
                                      <iconify-icon
                                        icon="solar:pen-2-broken"
                                        className="align-middle fs-18"
                                      ></iconify-icon>
                                    </button>
                                  </Tooltip>

                                  <Tooltip title="Delete" arrow>
                                    <button className="btn btn-soft-danger btn-sm">
                                      <iconify-icon
                                        icon="solar:trash-bin-minimalistic-2-broken"
                                        className="align-middle fs-18"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                        type="button"
                                        onClick={() => getId(client.id)}
                                      ></iconify-icon>
                                    </button>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                <div className="card-footer border-top">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end mb-0">
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* ========= Add Modal ========= */}
              <div
                className="modal fade"
                id="createModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="createModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-normal"
                        id="createModalCenteredScrollableTitle"
                        style={{ fontFamily: "Chayalipi" }}
                      >
                        অ্যাড ক্লায়েন্ট
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body">
                        <Formik
                          initialValues={initialValues}
                          validationSchema={schema}
                          onSubmit={submitAddOperaClientsForm}
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
                            <FormikForm
                              noValidate
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className="row">
                                <div className="col-lg-12">
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
                                      isInvalid={
                                        !!touched.image && !!errors.image
                                      }
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
                                <div className="col-lg-12">
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
                                        isValid={
                                          touched.status && !errors.status
                                        }
                                        className="form-control mb-0"
                                      >
                                        <option value="">Select</option>
                                        <option value={`${true}`}>
                                          Active
                                        </option>
                                        <option value={`${false}`}>
                                          Inactive
                                        </option>
                                      </Form.Select>
                                      <Form.Control.Feedback type="invalid">
                                        {errors.status}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>
                                <div className="col-lg-12">
                                  <Form.Group className="form-outline mb-3">
                                    <Form.Label>
                                      URL
                                      <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup hasValidation>
                                      <Form.Control
                                        type="text"
                                        name="operaClientLink"
                                        id="operaClientLink"
                                        value={values.operaClientLink}
                                        onChange={handleChange}
                                        isInvalid={
                                          !!touched.operaClientLink &&
                                          !!errors.operaClientLink
                                        }
                                        isValid={
                                          touched.operaClientLink &&
                                          !errors.operaClientLink
                                        }
                                        classname="form-control mb-0"
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.operaClientLink}
                                      </Form.Control.Feedback>
                                    </InputGroup>
                                  </Form.Group>
                                </div>

                                <div className="d-flex justify-content-end gap-2 my-2">
                                  <button
                                    type="reset"
                                    className="btn btn-danger"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className="btn btn-success"
                                    type="submit"
                                    disabled={isSubmitting}
                                  >
                                    {isSubmitting
                                      ? "Submitting..."
                                      : " Add Client"}
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

              {/* ========= Edit Modal ========= */}
              <div
                className="modal fade"
                id="exampleModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="exampleModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title fw-normal"
                        id="exampleModalCenteredScrollableTitle"
                        style={{ fontFamily: "Chayalipi" }}
                      >
                        আপডেট ক্লায়েন্ট
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
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
                            <FormikForm
                              noValidate
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <div className="row">
                                <div className="col-lg-12">
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
                                        onUpdateImageChange(event);
                                      }}
                                      isInvalid={
                                        !!touched.image && !!errors.image
                                      }
                                      isValid={touched.image && !errors.image}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.image}
                                    </Form.Control.Feedback>

                                    {showUpdateImage && (
                                      <div>
                                        <img
                                          alt="img"
                                          style={{
                                            width: "150px",
                                            height: "150px",
                                            marginTop: "20px",
                                            borderRadius: "50%",
                                          }}
                                          src={showUpdateImage}
                                        />
                                      </div>
                                    )}
                                  </Form.Group>
                                </div>
                              </div>
                              <div className="col-lg-12">
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
                                      <option value={`${false}`}>
                                        Inactive
                                      </option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                      {errors.status}
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </div>
                              <div className="col-lg-12">
                                <Form.Group className="form-outline mb-3">
                                  <Form.Label>
                                    URL
                                    <span className="text-danger">*</span>
                                  </Form.Label>
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      type="text"
                                      name="operaClientLink"
                                      id="operaClientLink"
                                      value={values.operaClientLink}
                                      onChange={handleChange}
                                      isInvalid={
                                        !!touched.operaClientLink &&
                                        !!errors.operaClientLink
                                      }
                                      isValid={
                                        touched.operaClientLink &&
                                        !errors.operaClientLink
                                      }
                                      classname="form-control mb-0"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.operaClientLink}
                                    </Form.Control.Feedback>
                                  </InputGroup>
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
                                  {isSubmitting
                                    ? "Submitting..."
                                    : "Update Client"}
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

              {/* ========= Delete Modal ========= */}
              <div
                className="modal fade"
                id="deleteModal"
                tabIndex="-1"
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="deleteModalLabel">
                        Delete Modal
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body d-flex flex-column justify-content-center align-items-center text-center">
                      <iconify-icon
                        icon="solar:trash-bin-minimalistic-bold-duotone"
                        className="fs-1 text-danger mb-3"
                      ></iconify-icon>
                      <p className="mb-0">
                        Are you sure you want to delete this item?
                      </p>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteclient(receivedId)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
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

const Wrapper = styled.section``;

export default OperaClients;
