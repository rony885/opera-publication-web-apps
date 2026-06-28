import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
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

                  <h2 className="fw-bold fs-24">Sign Up</h2>

                  <p className="text-muted mt-1 mb-4">
                     New to our platform? Sign up now! It only takes a minute.
                  </p>

                  <div>
                    <form className="authentication-form">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-name">
                          User Name
                        </label>
                        <input
                          type="name"
                          id="example-name"
                          name="example-name"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-name">
                          First Name
                        </label>
                        <input
                          type="name"
                          id="example-name"
                          name="example-name"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-name">
                          Last Name
                        </label>
                        <input
                          type="name"
                          id="example-name"
                          name="example-name"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="example-email"
                          name="example-email"
                          className="form-control bg-"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-email">
                          Phone
                        </label>
                        <input
                          type="email"
                          id="example-email"
                          name="example-email"
                          className="form-control bg-"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="example-email">
                          Password
                        </label>
                        <input
                          type="email"
                          id="example-email"
                          name="example-email"
                          className="form-control bg-"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="example-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="text"
                          id="example-password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkbox-signin"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-signin"
                          >
                            I accept Terms and Condition
                          </label>
                        </div>
                      </div>

                      <div className="mb-1 text-center d-grid">
                        <button className="btn btn-soft-primary" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>

                    <p className="mt-3 fw-semibold no-span">OR sign with</p>

                    <div className="d-grid gap-2">
                      <Link to="#" className="btn btn-soft-dark">
                        <i className="bx bxl-google fs-20 me-1"></i> Sign Up
                        with Google
                      </Link>
                      <Link to="#" className="btn btn-soft-primary">
                        <i className="bx bxl-facebook fs-20 me-1"></i> Sign Up
                        with Facebook
                      </Link>
                    </div>
                  </div>

                  <p className="mt-auto text-danger text-center">
                    I already have an account
                    <Link to="/" className="text-dark fw-bold ms-1">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img
                  src="/assets/images/small/img-10.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
