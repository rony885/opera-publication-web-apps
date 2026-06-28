import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              {/* <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:settings-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  General Settings
                </h4>
              </div> */}
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4
                  className="card-title flex-grow-1 fs-4 fw-normal"
                  style={{ fontFamily: "Chayalipi" }}
                >
                  <Link to="/">ড্যাশবোর্ড</Link> | সেটিংস
                </h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-name" className="form-label">
                          Company
                        </label>
                        <input
                          type="text"
                          id="meta-name"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-tag" className="form-label">
                          Address
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
                        <label htmlFor="themes" className="form-label">
                          Number
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
                        <label htmlFor="meta-name" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          id="meta-name"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-tag" className="form-label">
                          Logo
                        </label>
                        <input
                          type="file"
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
                          Facebook Link
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
                        <label htmlFor="meta-name" className="form-label">
                          Instagram Link
                        </label>
                        <input
                          type="text"
                          id="meta-name"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-tag" className="form-label">
                          Twitter Link
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
                          Youtube Link
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
                        <label htmlFor="meta-tag" className="form-label">
                          Map URL
                        </label>
                        <input
                          type="text"
                          id="meta-tag"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4"></div>
                  <div className="col-lg-4"></div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="">
                      <label htmlFor="description" className="form-label">
                        Terms & Conditions
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="description"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="">
                      <label htmlFor="description" className="form-label">
                        Privacy Policy
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="description"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="my-4 d-flex rounded justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Save Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
