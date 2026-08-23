import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const UpdateAddCountOpera = () => {
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
                    <Link to="/">ড্যাশবোর্ড</Link> | আপডেট অর্জন ও সম্মাননা
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Count
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
                            M/+
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
                            Label
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
                    <button type="reset" className="btn btn-danger">
                      Cancel
                    </button>
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

export default UpdateAddCountOpera;
