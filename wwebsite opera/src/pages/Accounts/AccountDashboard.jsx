import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AccountDashboard = () => {
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
            <h1 className="breadcumb-title fs-4 fw-normal">
              Account Dashboard
            </h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  Account Dashboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="my-account-content account-dashboard">
                <div className="mb_60">
                  <h5 className="fw-5 mb_20">Hello Customer</h5>

                  <p>
                    From your account dashboard you can view your{" "}
                    <Link className="text_primary" to="/account-orders">
                      recent orders
                    </Link>
                    , manage your{" "}
                    <Link className="text_primary" to="/account-address">
                      shipping and billing address
                    </Link>
                    , and{" "}
                    <Link className="text_primary" to="/account-edit">
                      edit your password and account details
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .wrap-sidebar-account {
    /* border: 1px solid #e5e5e5; */
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
    font-family: Arial, sans-serif;
  }

  .my-account-nav {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .my-account-nav li {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .my-account-nav li:last-child {
    border-bottom: none;
  }

  .my-account-nav-item {
    display: block;
    width: 100%;
    padding: 15px 20px;
    color: #333;
    background: #fff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    border-left: 3px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .my-account-nav-item:hover {
    color: #ff3333;
    background: #fff7f7;
    border-left-color: #ff3333;
    padding-left: 24px;
  }

  .my-account-nav-item.active {
    color: #ff3333;
    background: #fff7f7;
    font-weight: 600;
    border-left: 3px solid #ff3333;
  }

  .my-account-content {
    /* border: 1px solid #e5e5e5; */
    border-radius: 6px;
    background: #fff;
    /* padding: 30px; */
    font-family: Arial, sans-serif;
  }

  .my-account-content h5 {
    color: #222;
  }

  .my-account-content p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 0;
  }

  .text_primary {
    color: #ff3333;
    text-decoration: none;
    margin: 0 4px;
    transition: all 0.3s ease;
  }

  .text_primary:hover {
    color: #222;
    text-decoration: underline;
  }

  @media (max-width: 991px) {
    .wrap-sidebar-account {
      margin-bottom: 30px;
    }

    .my-account-content {
      padding: 25px 20px;
    }
  }

  @media (max-width: 575px) {
    .my-account-nav-item {
      padding: 13px 16px;
    }

    .my-account-content {
      padding: 20px 15px;
    }
  }
`;

export default AccountDashboard;
