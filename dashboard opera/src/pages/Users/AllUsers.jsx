import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "@iconify-icon/react";
import Tooltip from "@mui/material/Tooltip";

const AllUsers = () => {
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
                    <Link to="/">ড্যাশবোর্ড</Link> | সকল ইউজার
                  </h4>
                  <Link
                    className="btn btn-sm btn-primary fs-5"
                    // data-bs-toggle="modal"
                    // data-bs-target="#createModalCenteredScrollable"
                    to="/create-user"
                  >
                    ক্রিয়েট ইউজার
                  </Link>
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
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Username</th>
                        <th className="text-center">Role</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Email</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start">1</td>

                        <td>
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="/assets/images/product/p-1.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">FFFF XYZ</td>
                        <td className="text-center">LLLL XYZ</td>
                        <td className="text-center">XYZ</td>
                        <td className="text-center">Admin</td>
                        <td className="text-center">01700000000</td>
                        <td className="text-center">xyz@gmail.com</td>
                        <td>
                          <div className="d-flex gap-2 justify-content-end align-items-center">
                            <Tooltip title="Edit" arrow>
                              <Link
                                to="/user-update"
                                className="btn btn-soft-primary btn-sm"
                                // data-bs-toggle="modal"
                                // data-bs-target="#exampleModalCenteredScrollable"
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
                        আপডেট ইউজার
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
                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  First Name
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
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Last Name
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
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  User Name
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
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  User Role
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

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Phone
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
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Email
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
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Profile Image
                                </label>
                                <input
                                  type="file"
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AllUsers;
