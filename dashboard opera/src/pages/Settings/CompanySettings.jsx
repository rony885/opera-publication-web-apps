import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

const CompanySettings = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/">Dashboard</Link> | Company Info
                  </h4>

                  <button
                    className="btn btn-sm btn-primary fs-5 d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#createModalCenteredScrollable"
                  >
                    Create xyz
                  </button>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Company Name
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
                            Country
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

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Division
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

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            District
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

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Post Code
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
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
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

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Phone Number
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
                            Mobile Number
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
                          <label htmlFor="meta-tag" className="form-label">
                            Contact Person Phone
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
                            Fax
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
                            Website Url
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
                      Save Changes
                    </button>
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

export default CompanySettings;
