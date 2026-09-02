import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Wrapper>
      {/* Breadcrumb */}
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">Forgot Password</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  Forgot Password
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Form */}
      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="registration-wrapper">
            <div className="form-container">
              <h2>Forgot Password</h2>

              <p
                style={{
                  color: "#495057",
                  fontSize: "14px",
                  marginBottom: "20px",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "justify",
                }}
              >
                Forgot your password? No problem! Simply provide your{" "}
                <span className="fw-bold">Phone Number</span> and press the
                "Send OTP" button. We'll send you an OTP to help you set a new
                password.
              </p>
              <div className="form-group mb-3">
                <label htmlFor="phone">
                  Enter Phone Number <span className="required">*</span>
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  required
                />
              </div>

              <button type="submit" className="register-btn">
                Send OTP
              </button>

              {/* Back to Login */}
              <div className="footer-text">
                <Link to="/login">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .registration-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

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

  .form-container h2 {
    text-align: center;
    color: #ff0000;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 25px;
  }

  .form-group label {
    display: block;
    font-size: 13px;
    color: #333;
    font-weight: 400;
  }

  .required {
    color: #ff0000;
    margin-left: 2px;
  }

  .form-group input {
    width: 100%;
    height: 42px;
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

  .form-group input:focus {
    border-color: #aaa;
    box-shadow: none;
  }

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

  .footer-text {
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    font-family: Arial, sans-serif;
  }

  .footer-text a {
    color: #ff0000;
    text-decoration: none;
  }

  .footer-text a:hover {
    text-decoration: underline;
  }

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

export default ForgotPassword;
