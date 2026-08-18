import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BestSelling = () => {
  return (
    <Wrapper>
      <section
        className="selling-layout1 space"
        style={{
          backgroundImage: `url("/assets/img/bg/selling-bg.jpg")`,
        }}
      >
        <div className="container">
          <div className="row g-4 gx-40 align-items-center">
            <div className="col-xl-5">
              <div className="selling-content">
                <h2
                  className="selling-title wow animate__fadeInUp fw-normal"
                  data-wow-delay="0.20s"
                >
                  {/* Best Seller Author Of The Month */}
                  মাসের সর্বাধিক বিক্রিত লেখক
                </h2>
                <h4
                  className="author-name wow animate__fadeInUp fw-normal"
                  data-wow-delay="0.30s"
                >
                  Joseph Martin
                </h4>
                <span
                  className="published wow animate__fadeInUp fw-normal"
                  data-wow-delay="0.40s"
                >
                  30+ Published Book
                </span>
                <p
                  className="selling-text wow animate__fadeInUp fw-normal"
                  data-wow-delay="0.50s"
                >
                  Lorem ipsum dolor a amet, consectetur adipiscing elit, eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut eim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum.
                </p>
                <Link
                  className="vs-btn wow animate__flipInX fw-normal py-3 fs-5"
                  data-wow-delay="0.60s"
                  to="/author-details"
                >
                  {/* Read More */}
                 আরও দেখুন
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div
                className="selling-img-tag wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div
                  className="wow animate__fadeInDownBig"
                  data-wow-delay="0.30s"
                >
                  <div className="tag" data-wow-delay="0.30s">
                    <img
                      src="/assets/img/selling/selling-icon.png"
                      alt="selling icon"
                    />
                    <h4 className="tag-title fw-normal">
                      no.1 Best Seller Of The Month
                    </h4>
                  </div>
                </div>
                <img
                  src="/assets/img/selling/selling-img.jpg"
                  className="w-100"
                  alt="selling images"
                />
              </div>
            </div>
            <div className="col-xl-3">
              <div className="selling-books">
                <div
                  className="book-item wow animate__fadeInDown"
                  data-wow-delay="0.30s"
                >
                  <img
                    src="/assets/img/selling/book-img1.jpg"
                    alt="book imagee"
                  />
                </div>
                <div
                  className="book-item wow animate__fadeInDown"
                  data-wow-delay="0.40s"
                >
                  <img
                    src="/assets/img/selling/book-img2.jpg"
                    alt="book imagee"
                  />
                </div>
                <div
                  className="book-item wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <img
                    src="/assets/img/selling/book-img3.jpg"
                    alt="book imagee"
                  />
                </div>
                <div
                  className="book-item wow animate__fadeInUp"
                  data-wow-delay="0.60s"
                >
                  <img
                    src="/assets/img/selling/book-img4.jpg"
                    alt="book imagee"
                  />
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
  .selling-layout1 .published {
    color: #ff3333 !important;
  }
`;

export default BestSelling;
