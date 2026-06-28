import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const UpdateHome = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="card bg-light-subtle">
            <div className="card-header border-0">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6">
                  <h4
                    className="card-title flex-grow-1 fs-4 fw-normal"
                    style={{ fontFamily: "Chayalipi" }}
                  >
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট হোম
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-0">
                      <h4 className="card-title flex-grow-1 fs-4">
                        Hero Section
                      </h4>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
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
                        <div className="col-lg-6">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
                                Highlight Text
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
                        <div className="col-lg-6">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
                                Description
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
                              <label htmlFor="meta-tag" className="form-label">
                                Hero Image
                              </label>
                              <input
                                type="file"
                                id="meta-tag"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-0">
                      <h4 className="card-title flex-grow-1 fs-4">
                        Offer Banner Section
                      </h4>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-4">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
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
                        <div className="col-lg-4">
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
                        <div className="col-lg-4">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
                                White Style
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
                        <div className="col-lg-12">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="meta-tag" className="form-label">
                                Banner Image
                              </label>
                              <input
                                type="file"
                                id="meta-tag"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default UpdateHome;
