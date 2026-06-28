import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ActivityTimeline = () => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end border-0"
        tabIndex="-1"
        id="theme-activity-offcanvas"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
          <h5 className="text-white m-0 fw-semibold">Activity Stream</h5>
          <button
            type="button"
            className="btn-close btn-close-white ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          <div data-simplebar="true" className="h-100 p-4">
            <div className="position-relative ms-2">
              <span className="position-absolute start-0 top-0 border border-dashed h-100"></span>

              {/* Timeline Item 1 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 avatar-sm translate-middle-x bg-danger d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <Icon icon="iconamoon:folder-check-duotone" />
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-15 lh-base">
                    Report-Fix / Update
                  </h5>
                  <p className="d-flex align-items-center">
                    Add 3 files to
                    <span className="d-flex align-items-center text-primary ms-1">
                      <Icon icon="iconamoon:file-light" />
                      Tasks
                    </span>
                  </p>
                  <div className="bg-light bg-opacity-50 rounded-2 p-2">
                    <div className="row">
                      <div className="col-lg-6 border-end border-light">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bx bxl-figma fs-20 text-red"></i>
                          <Link to="#!" className="text-dark fw-medium">
                            Concept.fig
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bx bxl-file-doc fs-20 text-success"></i>
                          <Link to="#!" className="text-dark fw-medium">
                            larkon.docs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-2 text-muted">Monday, 4:24 PM</h6>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 avatar-sm translate-middle-x bg-success d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <Icon icon="iconamoon:check-circle-1-duotone" />
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-15 lh-base">
                    Project Status
                  </h5>
                  <p className="d-flex align-items-center mb-0">
                    Marked
                    <span className="d-flex align-items-center text-primary mx-1">
                      <Icon icon="iconamoon:file-light" />
                      Design
                    </span>
                    as
                    <span className="badge bg-success-subtle text-success px-2 py-1 ms-1">
                      Completed
                    </span>
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-1 bg-light bg-opacity-50 p-2 rounded-2">
                    <Link to="#!" className="fw-medium text-dark">
                      UI/UX Figma Design
                    </Link>
                    <div className="ms-auto">
                      <Link
                        to="#!"
                        className="fw-medium text-primary fs-18"
                        data-bs-toggle="tooltip"
                        title="Download"
                        data-bs-placement="bottom"
                      >
                        <Icon icon="iconamoon:cloud-download-duotone" />
                      </Link>
                    </div>
                  </div>
                  <h6 className="mt-3 text-muted">Monday, 3:00 PM</h6>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 avatar-sm translate-middle-x bg-primary d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-16">
                  UI
                </span>
                <div className="ms-2">
                  <h5 className="mb-1 text-dark fw-semibold fs-15">
                    Larkon Application UI v2.0.0
                    <span className="badge bg-primary-subtle text-primary px-2 py-1 ms-1">
                      Latest
                    </span>
                  </h5>
                  <p>
                    Get access to over 20+ pages including Link dashboard
                    layout, charts, kanban board, calendar, and pre-order
                    E-commerce & Marketing pages.
                  </p>
                  <div className="mt-2">
                    <Link to="#!" className="btn btn-light btn-sm">
                      Download Zip
                    </Link>
                  </div>
                  <h6 className="mt-3 text-muted">Monday, 2:10 PM</h6>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <img
                    src="/assets/images/users/avatar-7.jpg"
                    alt="avatar"
                    className="avatar-sm rounded-circle"
                  />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                    Alex Smith Attached Photos
                  </h5>
                  <div className="row g-2 mt-2">
                    <div className="col-lg-4">
                      <Link to="#!">
                        <img
                          src="/assets/images/small/img-6.jpg"
                          alt="attachment-1"
                          className="img-fluid rounded"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-4">
                      <Link to="#!">
                        <img
                          src="/assets/images/small/img-3.jpg"
                          alt="attachment-2"
                          className="img-fluid rounded"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-4">
                      <Link to="#!">
                        <img
                          src="/assets/images/small/img-4.jpg"
                          alt="attachment-3"
                          className="img-fluid rounded"
                        />
                      </Link>
                    </div>
                  </div>
                  <h6 className="mt-3 text-muted">Monday, 1:00 PM</h6>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 translate-middle-x bg-success bg-gradient d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <img
                    src="/assets/images/users/avatar-6.jpg"
                    alt="avatar"
                    className="avatar-sm rounded-circle"
                  />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                    Rebecca J. added Link new team member
                  </h5>
                  <p className="d-flex align-items-center gap-1">
                    <Icon
                      icon="iconamoon:check-circle-1-duotone"
                      className="text-success"
                    />
                    Added Link new member to Front Dashboard
                  </p>
                  <h6 className="mt-3 text-muted">Monday, 10:00 AM</h6>
                </div>
              </div>

              {/* Timeline Item 6 */}
              <div className="position-relative ps-4 mb-4">
                <span className="position-absolute start-0 avatar-sm translate-middle-x bg-warning d-inline-flex align-items-center justify-content-center rounded-circle text-light fs-20">
                  <Icon icon="iconamoon:certificate-badge-duotone" />
                </span>
                <div className="ms-2">
                  <h5 className="mb-0 text-dark fw-semibold fs-15 lh-base">
                    Achievements
                  </h5>
                  <p className="d-flex align-items-center gap-1 mt-1">
                    Earned Link
                    <Icon
                      icon="iconamoon:certificate-badge-duotone"
                      className="text-danger fs-20"
                    />
                    "Best Product Award"
                  </p>
                  <h6 className="mt-3 text-muted">Monday, 9:30 AM</h6>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <Link to="#!" className="btn btn-outline-dark w-100 mt-3">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
