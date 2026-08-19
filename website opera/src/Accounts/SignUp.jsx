import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">রেজিস্ট্রেশন</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  রেজিস্ট্রেশন
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="registration-wrapper">
            <div className="form-container">
              <h2>Registration</h2>

              <form>
                {/* Customer Name */}
                <div className="form-group">
                  <label htmlFor="customer_name">
                    Customer Name <span className="required">*</span>
                  </label>

                  <input
                    type="text"
                    id="customer_name"
                    name="customer_name"
                    required
                  />
                </div>

                {/* District */}
                <div className="form-group mb-3">
                  <label htmlFor="district">
                    District <span className="required">*</span>
                  </label>

                  <select
                    id="district"
                    name="district"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="rajshahi">Rajshahi</option>
                    <option value="khulna">Khulna</option>
                    <option value="sylhet">Sylhet</option>
                  </select>
                </div>

                {/* Upazila */}
                <div className="form-group mb-3">
                  <label htmlFor="upazila">
                    Upazila <span className="required">*</span>
                  </label>

                  <select id="upazila" name="upazila" required defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="kaliganj">Kaliganj</option>
                    <option value="savar">Savar</option>
                    <option value="dhamrai">Dhamrai</option>
                    <option value="keraniganj">Keraniganj</option>
                  </select>
                </div>

                {/* Customer Address */}
                <div className="form-group mb-2">
                  <label htmlFor="customer_address">
                    Customer Address <span className="required">*</span>
                  </label>

                  <textarea
                    id="customer_address"
                    name="customer_address"
                    rows="3"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group mb-3">
                  <label htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="autofill-bg"
                    // defaultValue="01609857822"
                    required
                  />
                </div>

                {/* Password */}
                <div className="form-group mb-4">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>

                {/* Register Button */}
                <button type="submit" className="register-btn">
                  Register
                </button>

                {/* Login */}
                <div className="footer-text">
                  Already have an account? <Link to="/login">Please Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* ================================= */
  /* REGISTRATION WRAPPER */
  /* ================================= */

  .registration-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  /* ================================= */
  /* FORM CONTAINER */
  /* ================================= */

  .form-container {
    width: 100%;
    max-width: 480px;
    background-color: #f8ebe5;
    padding: 30px 40px;
    border-radius: 4px;
    border: 1px solid #d1d4d8;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
  }

  /* ================================= */
  /* TITLE */
  /* ================================= */

  .form-container h2 {
    text-align: center;
    color: #ff0000;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 25px;
  }

  /* ================================= */
  /* FORM GROUP */
  /* ================================= */

  .form-group {
    margin-bottom: 15px;
  }

  /* ================================= */
  /* LABEL */
  /* ================================= */

  .form-group label {
    display: block;
    /* margin-bottom: 6px; */
    font-size: 13px;
    color: #333;
    font-weight: 400;
  }

  .required {
    color: #ff0000;
    margin-left: 2px;
  }

  /* ================================= */
  /* INPUT / SELECT / TEXTAREA */
  /* ================================= */

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .form-group input {
    height: 42px;
  }

  .form-group select {
    height: 42px;
    cursor: pointer;
  }

  .form-group textarea {
    min-height: 75px;
    resize: vertical;
  }

  /* ================================= */
  /* FOCUS */
  /* ================================= */

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #aaa;
  }

  /* ================================= */
  /* AUTOFILL BACKGROUND */
  /* ================================= */

  /* .autofill-bg {
    background-color: #F8EBE5 !important;
  } */

  /* ================================= */
  /* REGISTER BUTTON */
  /* ================================= */

  .register-btn {
    width: 100%;
    height: 44px;
    padding: 10px 15px;
    margin-top: 10px;
    font-family: Arial, sans-serif;
    background-color: #ff0000;
    color: #fff;

    border: none;
    border-radius: 4px;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .register-btn:hover {
    background-color: #e60000;
  }

  /* ================================= */
  /* FOOTER TEXT */
  /* ================================= */

  .footer-text {
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    color: #333;
    font-family: Arial, sans-serif;
  }

  .footer-text a {
    color: #ff0000;
    text-decoration: none;
  }

  .footer-text a:hover {
    text-decoration: underline;
  }

  /* ================================= */
  /* RESPONSIVE */
  /* ================================= */

  @media (max-width: 575px) {
    .form-container {
      max-width: 100%;
      padding: 25px 20px;
    }

    .form-container h2 {
      font-size: 24px;
    }
  }
`;

export default SignUp;
