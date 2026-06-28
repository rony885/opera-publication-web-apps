import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "@iconify-icon/react";
import Tooltip from "@mui/material/Tooltip";

const Utilities = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-fluid">
          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/">Dashboard</Link> | Create Product
                  </h4>
                </div>

                <div className="col-lg-6">
                  <div className="text-md-end mt-3 mt-md-0 d-flex justify-content-md-end gap-1 d-none">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#invoiceModalLg"
                      className="btn btn-sm btn-primary fs-5"
                    >
                      Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h4 className="card-title flex-grow-1 fs-4 mb-2">Data Type</h4>

          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="overflow-auto">
                <div className="d-flex align-items-center gap-2 flex-nowrap">
                  {[
                    "Product Type",
                    "Product Tax Method",
                    "Product Unit Quantity",
                    "Color",
                    "Payment Method",
                    "User Role",
                    "Product Warranty",
                    "MFS",
                    "BANK",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center gap-2 px-1 py-1 bg-white rounded border flex-shrink-0"
                    >
                      <p className="mb-0 fw-semibold text-nowrap">{item}</p>
                      {/* Delete */}
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        aria-label="Delete"
                        to="#"
                        className="text-danger"
                      >
                        <i className="fa fa-times"></i>
                      </Link>

                      {/* Edit */}
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#editDataTypeModalCenteredScrollable"
                        aria-label="Update"
                        to="#"
                        className="text-primary"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>
                    </div>
                  ))}

                  {/* Add Button */}
                  <div className="flex-shrink-0">
                    <button
                      className="btn btn-sm btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#createDataTypeModalCenteredScrollable"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                  <h4 className="card-title flex-grow-1 fs-4">Data</h4>
                </div>

                <div className="table-responsive">
                  {/* <div className="barcode-input mb-2 mx-2">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Search here..."
                    />

                    <button className="btn btn-sm btn-primary fs-5">
                      Create Data
                    </button>
                  </div> */}

                  <div className="row align-items-center mb-3 mx-1">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here..."
                      />
                    </div>

                    <div className="col-6 text-end ">
                      <button
                        className="btn btn-sm btn-primary fs-5"
                        data-bs-toggle="modal"
                        data-bs-target="#createModalCenteredScrollable"
                      >
                        Create Data
                      </button>
                    </div>
                  </div>

                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light">
                      <tr>
                        <th className="text-start" style={{ width: "20px" }}>
                          #
                        </th>
                        <th className="text-center">Data Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Data Type</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start">1</td>
                        <td className="text-center">Abc</td>
                        <td className="text-center">Active</td>
                        <td className="text-center">Bank</td>
                        <td>
                          <div className="d-flex gap-2 justify-content-end align-items-center">
                            <Tooltip title="Edit" arrow>
                              <Link
                                className="btn btn-soft-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenteredScrollable"
                              >
                                <iconify-icon
                                  icon="solar:pen-2-broken"
                                  className="align-middle fs-18"
                                ></iconify-icon>
                              </Link>
                            </Tooltip>

                            <Tooltip title="Delete" arrow>
                              <button className="btn btn-soft-danger btn-sm">
                                <iconify-icon
                                  icon="solar:trash-bin-minimalistic-2-broken"
                                  className="align-middle fs-18"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteModal"
                                  type="button"
                                ></iconify-icon>
                              </button>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
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
                        className="modal-title"
                        id="createModalCenteredScrollableTitle"
                      >
                        Create Data
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
                        <div className="row">
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Type
                                </label>
                                <select
                                  className="form-control"
                                  id="layout"
                                  data-choices
                                  data-choices-groups
                                  data-placeholder="Select Layout"
                                >
                                  <option defaultValue="">Select</option>
                                  <option defaultValue="">ABC</option>
                                  <option defaultValue="">XYZ</option>
                                </select>
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </div>
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
                        className="modal-title"
                        id="exampleModalCenteredScrollableTitle"
                      >
                        Update Data
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
                        <div className="row">
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Type
                                </label>
                                <select
                                  className="form-control"
                                  id="layout"
                                  data-choices
                                  data-choices-groups
                                  data-placeholder="Select Layout"
                                >
                                  <option defaultValue="">Select</option>
                                  <option defaultValue="">ABC</option>
                                  <option defaultValue="">XYZ</option>
                                </select>
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                              Update
                            </button>
                          </div>
                        </div>
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
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==== Add Data Type Modal ==== */}
              <div
                className="modal fade"
                id="createDataTypeModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="createDataTypeModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="createDataTypeModalCenteredScrollableTitle"
                      >
                        Create Data Type
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
                        <div className="row">
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Type Name
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ==== Update Data Type Modal ==== */}
              <div
                className="modal fade"
                id="editDataTypeModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="editDataTypeModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="editDataTypeModalCenteredScrollableTitle"
                      >
                        Update Data Type
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
                        <div className="row">
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Type Name
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
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

export default Utilities;
