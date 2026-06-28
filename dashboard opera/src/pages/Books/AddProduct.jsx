import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

const AddProduct = () => {
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
                    <Link to="/">ড্যাশবোর্ড</Link> | অ্যাড বই
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
                            Subtitle
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
                            Author
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Category
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Sub Category
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Old Price
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
                            Price
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
                            Stock
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
                          <label htmlFor="layout" className="form-label">
                            {/* Discount */}
                            Book Total Page
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
                            Discount (%)
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
                            Note
                          </label>
                          <textarea
                            className="form-control bg-light-subtle"
                            id="description"
                            rows="1"
                          ></textarea>
                        </div>
                      </form>
                    </div>

                    {/* <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Due Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div> */}

                    {/* <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Payment Method
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div> */}
                  </div>

                  {/* <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Total amount After Discount
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
                            Payable Amount
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
                            Change Amount
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
                            Account
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div> */}

                  {/* <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Note
                          </label>
                          <textarea
                            className="form-control bg-light-subtle"
                            id="description"
                            rows="1"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div> */}

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

              {/* ========= Add Customer Modal ========= */}
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
                        Create Customer
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
                                <label htmlFor="layout" className="form-label">
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

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Contact Person
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
                                  Contact Person Designation
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
                                  Adress
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
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
                                  Note
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
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

export default AddProduct;
