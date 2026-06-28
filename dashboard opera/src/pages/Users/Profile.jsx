import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="bg-primary profile-bg rounded-top position-relative mx-n3 mt-n3">
                  <img
                    src="/assets/images/users/avatar-1.jpg"
                    alt=""
                    className="avatar-xl border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
                  />
                </div>
                <div className="mt-5 d-flex flex-wrap align-items-center justify-content-between">
                  <div>
                    <h4 className="mb-1">
                      Gaston Lapierre
                      <i className="bx bxs-badge-check text-success align-middle"></i>
                    </h4>
                    <p className="mb-0">Project Head Manager</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 my-2 my-lg-0">
                    <Link to="#!" className="btn btn-info">
                      <i className="bx bx-message-dots"></i> Message
                    </Link>
                    <Link to="#!" className="btn btn-outline-primary">
                      <i className="bx bx-plus"></i> Follow
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="solar:menu-dots-bold"
                          className="fs-20 align-middle text-muted"
                        ></iconify-icon>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Export
                        </Link>

                        <Link to="#" className="dropdown-item">
                          Import
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3 gy-2">
                  <div className="col-lg-2 col-6">
                    <div className="d-flex align-items-center gap-2 border-end">
                      <div className="">
                        <iconify-icon
                          icon="solar:clock-circle-bold-duotone"
                          className="fs-28 text-primary"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h5 className="mb-1">3+ Years Job</h5>
                        <p className="mb-0">Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="d-flex align-items-center gap-2 border-end">
                      <div className="">
                        <iconify-icon
                          icon="solar:cup-star-bold-duotone"
                          className="fs-28 text-primary"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h5 className="mb-1">5 Certificate</h5>
                        <p className="mb-0">Achieved</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="d-flex align-items-center gap-2">
                      <div className="">
                        <iconify-icon
                          icon="solar:notebook-bold-duotone"
                          className="fs-28 text-primary"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h5 className="mb-1">2 Internship</h5>
                        <p className="mb-0">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Personal Information</h4>
              </div>
              <div className="card-body">
                <div className="">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:backpack-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">Project Head Manager</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:square-academic-cap-2-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Went to
                      <span className="text-dark fw-semibold">
                        Oxford International
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:map-point-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Lives in
                      <span className="text-dark fw-semibold">
                        Pittsburgh, PA 15212
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:users-group-rounded-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Followed by
                      <span className="text-dark fw-semibold">
                        16.6k People
                      </span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:letter-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Email
                      <Link to="#!" className="text-primary fw-semibold">
                        hello@dundermuffilin.com
                      </Link>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:link-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Website
                      <Link to="#!" className="text-primary fw-semibold">
                        www.larkon.co
                      </Link>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:global-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Language
                      <span className="text-dark fw-semibold">
                        English , Spanish , German
                      </span>
                    </p>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                      <iconify-icon
                        icon="solar:check-circle-bold-duotone"
                        className="fs-20 text-secondary"
                      ></iconify-icon>
                    </div>
                    <p className="mb-0 fs-14">
                      Status
                      <span className="badge bg-success-subtle text-success ms-1">
                        Active
                      </span>
                    </p>
                  </div>
                  <div className="mt-2">
                    <Link to="#!" className="text-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">About</h4>
              </div>
              <div className="card-body">
                <p>
                  I'm the model of the new Project Head Manager. I've combined
                  Link deep background in brand management at blue chip CPG
                  companies with eCommerce growth marketing at the world's
                  biggest retailer. I've run SingleFire I've created world-class
                  campaigns; I've built digital marketing organizations from the
                  ground up. I have over 20 years' experience leading...
                  <Link to="#!" className="text-primary">
                    See more
                  </Link>
                </p>
                <h4 className="card-title mb-2">My Approach :</h4>
                <p>
                  When it comes to Project Head Manager, I believe in Link
                  holistic approach that combines creativity with technical
                  expertise. I start by understanding your unique vision and
                  goals, then work tirelessly to bring that vision to life.
                  Whether you need Link sleek portfolio site, an engaging
                  e-commerce platform, or anything in between, I've got you
                  covered.
                </p>
                <div className="row g-2 mt-2 mb-4">
                  <div className="col-lg-6">
                    <div className="border p-3 rounded">
                      <h4 className="card-title">Marketing expertise</h4>
                      <div className="d-flex gap-2 flex-wrap mt-3">
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Leadership
                        </span>
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Advertising
                        </span>
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Public-relations
                        </span>
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Branding-manage
                        </span>
                      </div>
                      <p className="mb-0 text-dark mt-3">
                        Open to networking :
                        <span className="badge bg-success-subtle text-success ms-1">
                          Yes
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="border p-3 rounded">
                      <h4 className="card-title">Marketing interests</h4>
                      <div className="d-flex gap-2 flex-wrap mt-3">
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Event-marketing
                        </span>
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Performance-marketing
                        </span>
                        <span className="badge bg-body text-muted px-2 py-1 fs-12">
                          #Account-based-marketing
                        </span>
                      </div>
                      <p className="mb-0 text-dark mt-3">
                        Open to advising :
                        <span className="badge bg-success-subtle text-success ms-1">
                          Yes
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="card-title">My Core Skills :</h4>
                <div className="row mt-2">
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-satrt gap-2">
                      <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>
                      <p className="fw-medium mb-0 text-dark fs-15">
                        Inbound Marketing
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-satrt gap-2">
                      <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>
                      <p className="fw-medium mb-0 text-dark fs-15">
                        Entrepreneurship
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-flex align-items-center justify-content-satrt gap-2">
                      <ul className="d-flex text-warning m-0 fs-20 list-unstyled">
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                        <li>
                          <i className="bx bxs-star"></i>
                        </li>
                      </ul>
                      <p className="fw-medium mb-0 text-dark fs-15">
                        Growth Marketing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="avatar bg-info d-flex align-items-center justify-content-center rounded mx-auto mb-2">
                      <iconify-icon
                        icon="solar:cup-star-bold"
                        className="fs-34 text-white"
                      ></iconify-icon>
                    </div>
                    <h3 className="mb-1">+12</h3>
                    <p className="mb-0 fw-semibold fs-16">Achievements</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="avatar bg-info d-flex align-items-center justify-content-center rounded mx-auto mb-2">
                      <iconify-icon
                        icon="solar:medal-star-circle-bold-duotone"
                        className="fs-34 text-white"
                      ></iconify-icon>
                    </div>
                    <h3 className="mb-1">+24</h3>
                    <p className="mb-0 fw-semibold fs-16">Accomplishments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden z-1">
              <div className="card-body text-center">
                <h4 className="card-title mb-2">Share your profile</h4>
                <p className="text-muted">
                  Now that your agency is created, go ahead and share it to
                  start generating leads.
                </p>
                <img
                  src="/assets/images/qr-code.png"
                  alt=""
                  className="avatar-xl"
                />
                <ul className="list-inline d-flex gap-1 my-3 align-items-center justify-content-center">
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-primary avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-facebook"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-danger avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-info avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-success avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bxl-whatsapp"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-soft-warning avatar-sm d-flex align-items-center justify-content-center fs-20"
                    >
                      <i className="bx bx-envelope"></i>
                    </Link>
                  </li>
                </ul>
                <p className="text-muted">
                  Copy the URL below and share it with your friends:
                </p>
                <p className="d-flex align-items-center border p-2 rounded-2 border-dashed bg-body text-start mb-0">
                  <Link to="#!" className="ms-auto fs-4">
                    <i className="ti ti-copy"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Popular Filters</h4>
              </div>
              <div className="card-body">
                <div
                  className="d-flex flex-wrap gap-2"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="all-topic"
                    defaultChecked
                  />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="all-topic"
                  >
                    All Topics (23)
                  </label>

                  <input type="checkbox" className="btn-check" id="saas" />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="saas"
                  >
                    #SaaS (21)
                  </label>

                  <input type="checkbox" className="btn-check" id="latam" />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="latam"
                  >
                    #LatAm (5)
                  </label>

                  <input type="checkbox" className="btn-check" id="inbound" />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="inbound"
                  >
                    #inbound (4)
                  </label>

                  <input type="checkbox" className="btn-check" id="europe" />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="europe"
                  >
                    #Europe (25)
                  </label>

                  <input
                    type="checkbox"
                    className="btn-check"
                    id="performance"
                  />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="performance"
                  >
                    #Performance-marketing (7)
                  </label>

                  <input type="checkbox" className="btn-check" id="facebook" />
                  <label
                    className="btn bg-body rounded-pill d-flex justify-content-center align-items-center"
                    htmlFor="facebook"
                  >
                    #Facebook-advertising (8)
                  </label>
                </div>
              </div>
              <div className="card-footer border-top text-center">
                <Link to="#!" className="link-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt=""
                    className="avatar-md rounded-circle border border-light border-3"
                  />
                  <div>
                    <h4 className="mb-1">
                      Gaston Lapierre ,
                      <span className="fs-13 text-muted fw-medium ms-1">
                        Project Head Manager . Nov 16
                      </span>
                    </h4>
                    <p className="mb-0">
                      Asked Link question
                      <Link to="#!" className="text-primary ms-1">
                        #inbound
                      </Link>
                      <Link to="#!" className="text-primary ms-1">
                        #SaaS
                      </Link>
                    </p>
                  </div>
                </div>
                <h4 className="mt-3">
                  Do you have any experience with deploying @Hubspot for Link
                  SaaS business with both Link direct and self-serve model?
                </h4>
                <p className="mb-0">
                  We are Link Series A B2B startup offering Link custom
                  solution. Currently, we are utilizing @MixPanel and
                  collaborating with @Division of Labor to rebuild our pages.
                  Shoutout to @Jennifer Smith for her support...
                  <Link to="#!" className="link-primary">
                    See more
                  </Link>
                </p>
              </div>
              <div className="card-footer border-top">
                <div className="row">
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-primary d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:pen-new-square-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Answer
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:hand-shake-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Thanks
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:lightbulb-minimalistic-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Insightful
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt=""
                    className="avatar-md rounded-circle border border-light border-3"
                  />
                  <div>
                    <h4 className="mb-1">
                      Gaston Lapierre ,
                      <span className="fs-13 text-muted fw-medium ms-1">
                        Project Head Manager . Nov 11
                      </span>
                    </h4>
                    <p className="mb-0">
                      Asked Link question
                      <Link to="#!" className="text-primary ms-1">
                        #LatAm
                      </Link>
                      <Link to="#!" className="text-primary ms-1">
                        #Europe
                      </Link>
                    </p>
                  </div>
                </div>
                <h4 className="mt-3">
                  Looking for Link new landing page optimization vendor
                </h4>
                <p className="mb-0">
                  We are currently using @Optimizely, but find that they are
                  missing Link number with Link custom solution that no...
                  <Link to="#!" className="link-primary">
                    {" "}
                    See more
                  </Link>
                </p>
              </div>
              <div className="card-footer border-top">
                <div className="row">
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-primary d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:pen-new-square-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Answer
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:hand-shake-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Thanks
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:lightbulb-minimalistic-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Insightful
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/assets/images/users/avatar-1.jpg"
                    alt=""
                    className="avatar-md rounded-circle border border-light border-3"
                  />
                  <div>
                    <h4 className="mb-1">
                      Gaston Lapierre ,
                      <span className="fs-13 text-muted fw-medium ms-1">
                        Project Head Manager . Nov 08
                      </span>
                    </h4>
                    <p className="mb-0">
                      Asked Link question
                      <Link to="#!" className="text-primary ms-1">
                        #Performance-marketing
                      </Link>
                      <Link to="#!" className="text-primary ms-1">
                        #CRM
                      </Link>
                    </p>
                  </div>
                </div>
                <h4 className="mt-3">
                  Why Your Company Needs Link CRM to Grow Better?
                </h4>
                <p className="mb-0">
                  CRMs are powerful tools that help you expedite business growth
                  while number with Link custom eliminating friction, improving
                  cross-team collaboration, managing your contact records,
                  syncing...
                  <Link to="#!" className="link-primary">
                    See more
                  </Link>
                </p>
              </div>
              <div className="card-footer border-top">
                <div className="row">
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-primary d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:pen-new-square-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Answer
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:hand-shake-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Thanks
                    </Link>
                  </div>
                  <div className="col-lg-2 col-4">
                    <Link
                      to="#!"
                      className="text-dark d-inline-flex gap-1 align-items-center fs-14"
                    >
                      <iconify-icon
                        icon="solar:lightbulb-minimalistic-broken"
                        className="fs-16"
                      ></iconify-icon>
                      Insightful
                    </Link>
                  </div>
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

export default Profile;
