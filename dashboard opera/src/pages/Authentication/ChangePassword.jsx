import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="d-flex flex-column h-100 p-3">
                <div className="d-flex flex-column flex-grow-1">
                  <div className="row h-100">
                    <div className="col-xxl-12">
                      <div className="row justify-content-center h-100">
                        <div className="col-lg-6 py-lg-5">
                          <div className="d-flex flex-column h-100 justify-content-center">
                            <div className="auth-logo mb-4">
                              <Link to="/" className="logo-dark">
                                <img
                                  src="/assets/images/logo-dark.png"
                                  height="24"
                                  alt="logo dark"
                                />
                              </Link>

                              <Link to="/" className="logo-light">
                                <img
                                  src="/assets/images/logo-light.png"
                                  height="24"
                                  alt="logo light"
                                />
                              </Link>
                            </div>

                            <h2 className="fw-bold fs-24">Change Password</h2>

                            <p className="text-muted mt-1 mb-4">
                              Change Your Password Here...
                            </p>

                            <div>
                              <form className="authentication-form">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    for="example-email"
                                  >
                                    Old Pasword
                                  </label>
                                  <input
                                    type="email"
                                    id="example-email"
                                    name="example-email"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                              <form className="authentication-form">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    for="example-email"
                                  >
                                    New Pasword
                                  </label>
                                  <input
                                    type="email"
                                    id="example-email"
                                    name="example-email"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                              <form className="authentication-form">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    for="example-email"
                                  >
                                    Confirm Pasword
                                  </label>
                                  <input
                                    type="email"
                                    id="example-email"
                                    name="example-email"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                              <div className="mb-1 text-center d-grid">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Change Password
                                </button>
                              </div>
                            </div>

                            {/* <p className="mt-5 text-danger text-center">
                              Back to
                              <Link
                                to="/signin"
                                className="text-dark fw-bold ms-1"
                              >
                                Sign In
                              </Link>
                            </p> */}
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
      </div>
    </div>
  );
};

export default ChangePassword;
