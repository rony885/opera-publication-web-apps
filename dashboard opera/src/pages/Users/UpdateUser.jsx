import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const UpdateUser = () => {
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
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট ইউজার
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
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
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
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
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
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
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Role
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
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
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
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
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
                  </div>

                  <div className="d-flex justify-content-end gap-2 my-2">
                    <button type="submit" className="btn btn-success">
                      Update
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

export default UpdateUser;
