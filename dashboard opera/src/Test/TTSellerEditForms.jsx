import React, { useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import ImageFiled1 from "../../components/Image/ImageFiled1";
import ImageFiled2 from "../../components/Image/ImageFiled2";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import SelectwithSearch from "../../components/SelectwithSearch/SelectwithSearch";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const SellerEdit = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="position-relative bg-light p-2 rounded text-center">
                  <img
                    src="assets/images/seller/zara.svg"
                    alt=""
                    className="avatar-xxl"
                  />
                  <div className="position-absolute top-0 end-0 m-1">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <iconify-icon
                          icon="iconamoon:menu-kebab-vertical-circle-duotone"
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
                <div className="d-flex flex-wrap justify-content-between my-3">
                  <div>
                    <h4 className="mb-1">
                      ZARA International
                      {/* <span className="text-muted fs-13 ms-1">(Fashion)</span> */}
                    </h4>
                    {/* <div>
                      <Link to="#!" className="link-primary fs-16 fw-medium">
                        www.zarafashion.co
                      </Link>
                    </div> */}
                  </div>
                  {/* <div>
                    <p className="mb-0">
                      <span className="badge bg-light text-dark fs-12 me-1">
                        <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                        4.5
                      </span>
                      3.5k
                    </p>
                  </div> */}
                </div>
                <div className="">
                  <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:point-on-map-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    4604 , Philli Lane Kiowa IN 47404
                  </p>
                  {/* <p className="d-flex align-items-center gap-2 mb-1">
                    <iconify-icon
                      icon="solar:letter-bold-duotone"
                      className="fs-18 text-primary"
                    ></iconify-icon>
                    zarafashionworld@dayrep.com
                  </p> */}
                  <p className="d-flex align-items-center gap-2 mb-0">
                    <iconify-icon
                      icon="solar:outgoing-call-rounded-bold-duotone"
                      className="fs-20 text-primary"
                    ></iconify-icon>
                    +243 812-801-9335
                  </p>
                </div>
                {/* <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                  <p className="mb-0 fs-15 fw-medium text-dark">Fashion</p>
                  <div>
                    <p className="mb-0 fs-15 fw-medium text-dark">
                      $200k
                      <span className="ms-1">
                        <iconify-icon
                          icon="solar:course-up-outline"
                          className="text-success"
                        ></iconify-icon>
                      </span>
                    </p>
                  </div>
                </div> */}
                {/* <div className="progress progress-soft progress-md">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow=""
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div> */}
                {/* <div className="p-2 pb-0 mx-n3 mt-2">
                  <div className="row text-center g-2">
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">865</h5>
                      <p className="text-muted mb-0">Item Stock</p>
                    </div>
                    <div className="col-lg-4 col-4 border-end">
                      <h5 className="mb-1">+4.5k</h5>
                      <p className="text-muted mb-0">Sells</p>
                    </div>
                    <div className="col-lg-4 col-4">
                      <h5 className="mb-1">+2k</h5>
                      <p className="text-muted mb-0">Happy Client</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Profile Image</h4>
                  </div>
                  <div className="card-body">
                    <ImageFiled1 />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Scan Image</h4>
                  </div>
                  <div className="card-body">
                    <ImageFiled2 />
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          Employee Id
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                          disabled
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-weight" className="form-label">
                          Emplyee Name (English)
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-weight"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-weight" className="form-label">
                          Emplyee Name (Bangla){" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-weight"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="seller-number" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <iconify-icon
                            icon="solar:outgoing-call-rounded-bold-duotone"
                            className="fs-20"
                          ></iconify-icon>
                        </span>
                        <input
                          type="text"
                          id="seller-number"
                          className="form-control"
                          placeholder="Phone number"
                          defaultValue="+243 812-801-9335"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          Date of Birth <span className="text-danger">*</span>
                        </label>

                        {/* <input
                          type="text"
                          id="schedule-date"
                          class="form-control flatpickr-input active"
                          placeholder="dd-mm-yyyy"
                          readonly="readonly"
                        /> */}

                        <Flatpickr
                          id="schedule-date"
                          className="form-control flatpickr-input active"
                          placeholder="dd-mm-yyyy"
                          value={date}
                          onChange={([selectedDate]) => setDate(selectedDate)}
                          options={{
                            dateFormat: "d-m-Y",
                          }}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    {/* <form>
                      <label htmlFor="gender" className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Gender</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Third Gender">Third Gender</option>
                        <option value="Other">Other</option>
                      </select>
                    </form> */}

                    <SelectwithSearch />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Identification <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Identification</option>
                        <option value="National ID">National ID</option>
                        <option value="Passport">Passport</option>
                        <option value="Driving License">Driving License</option>
                        <option value="Birth Certificate">
                          Birth Certificate
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          --- <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Professional Information</h4>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Business <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Business</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Service">Service</option>
                        <option value="Other">Other</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Designation</option>
                        <option value="Manager">Manager</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Senior Developer">Developer</option>
                        <option value="Senior Developer">
                          Driving License
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Ward No <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Ward No</option>
                        <option value="1">Ward 1</option>
                        <option value="2">Ward 2</option>
                        <option value="3">Ward 3</option>
                        <option value="3">Other Ward</option>
                      </select>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Account Type <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Account Type</option>
                        <option value="Savings">Savings</option>
                        <option value="Current">Current</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                        <option value="Recurring Deposit">
                          Recurring Deposit
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          ---
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          ---
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Supervisor Name <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Supervisor</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Michael Johnson">Michael Johnson</option>
                        <option value="Other">Other</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Salary Type
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        id="gender"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Gender"
                      >
                        <option value="">Select Salary Type</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          ---
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-brand"
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
                        <label htmlFor="product-brand" className="form-label">
                          Joining Date
                          <span className="text-danger">*</span>
                        </label>

                        <Flatpickr
                          id="schedule-date"
                          className="form-control flatpickr-input active"
                          placeholder="dd-mm-yyyy"
                          value={date}
                          onChange={([selectedDate]) => setDate(selectedDate)}
                          options={{
                            dateFormat: "d-m-Y",
                          }}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          Resign Date
                          <span className="text-danger">*</span>
                        </label>

                        <Flatpickr
                          id="schedule-date"
                          className="form-control flatpickr-input active"
                          placeholder="dd-mm-yyyy"
                          value={date}
                          onChange={([selectedDate]) => setDate(selectedDate)}
                          options={{
                            dateFormat: "d-m-Y",
                          }}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          Driving License
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Personal Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-brand"
                              className="form-label"
                            >
                              Father Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-brand"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <label htmlFor="gender" className="form-label">
                            Nationality <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="gender"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Gender"
                          >
                            <option value="">Select Nationality</option>
                            <option value="Bangladeshi">Bangladeshi</option>
                            <option value="Indian">Indian</option>
                            <option value="Pakistani">USA</option>
                            <option value="Nepali">UK</option>
                            <option value="Other">Other</option>
                          </select>
                        </form>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <form>
                          <label htmlFor="gender" className="form-label">
                            Marital Status{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="gender"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Gender"
                          >
                            <option value="">Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Separated">Separated</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-brand"
                              className="form-label"
                            >
                              Mother Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-brand"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-brand"
                              className="form-label"
                            >
                              Religion <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-brand"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <form>
                          <label htmlFor="gender" className="form-label">
                            Blood Group
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="gender"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Gender"
                          >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header" style={{ marginTop: "24px" }}>
                    <h4 className="card-title">Present Address</h4>
                  </div>

                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-brand"
                              className="form-label"
                            >
                              Village / Road / House / Flat{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-brand"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <label htmlFor="division" className="form-label">
                            Division <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="division"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Division"
                          >
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Mymensingh">Mymensingh</option>
                          </select>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <form>
                              <label htmlFor="district" className="form-label">
                                District <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="district"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select District"
                              >
                                <option value="">Select District</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Narsingdi">Narsingdi</option>
                              </select>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Upazila / P.S{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Upazila</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Motijheel">Motijheel</option>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Uttara">Uttara</option>
                              </select>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="product-weight"
                              className="form-label"
                            >
                              Post Code <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-weight"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <label className="form-check-label" for="customCheck1">
                        Same as Present Address
                      </label>
                    </div>
                    <h4 className="card-title">Permanent Address</h4>
                  </div>

                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-brand"
                              className="form-label"
                            >
                              Village / Road / House / Flat{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-brand"
                              className="form-control"
                            />
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <label htmlFor="division" className="form-label">
                            Division <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="division"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Division"
                          >
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Rajshahi">Rajshahi</option>
                            <option value="Sylhet">Sylhet</option>
                            <option value="Barishal">Barishal</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Mymensingh">Mymensingh</option>
                          </select>
                        </form>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-6">
                            <form>
                              <label htmlFor="district" className="form-label">
                                District <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="district"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select District"
                              >
                                <option value="">Select District</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Narsingdi">Narsingdi</option>
                              </select>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <label htmlFor="gender" className="form-label">
                                Upazila / P.S{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                className="form-control"
                                id="gender"
                                data-choices
                                data-choices-groups
                                data-placeholder="Select Gender"
                              >
                                <option value="">Select Upazila</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Motijheel">Motijheel</option>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Uttara">Uttara</option>
                              </select>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <form>
                          <div className="">
                            <label
                              htmlFor="product-weight"
                              className="form-label"
                            >
                              Post Code <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="product-weight"
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

            <div className="p-3 bg-light mb-3 rounded">
              <div className="row justify-content-end g-2">
                <div className="col-lg-2">
                  <button type="reset" className="btn btn-primary w-100">
                    Cancel
                  </button>
                </div>

                <div className="col-lg-2">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary w-100"
                  >
                    Submit & Add Another
                  </button>
                </div>
                <div className="col-lg-2">
                  <button
                    type="submit"
                    className="btn btn-outline-secondary w-100"
                  >
                    Submit
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

export default SellerEdit;
