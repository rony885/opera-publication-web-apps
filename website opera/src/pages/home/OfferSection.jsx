import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <Wrapper>
      <div className="offer-layout1 space-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-6 col-lg-6">
              <div
                className="offer-style1 wow animate__fadeInLeft"
                data-wow-delay="0.30s"
                // data-bg-src="assets/img/bg/offer-bg1.jpg"
                style={{
                  backgroundImage: `url("/assets/img/bg/offer-bg1.jpg")`,
                }}
              >
                <div className="offer-img">
                  <img
                    src="/assets/img/offer/offer-img1.png"
                    alt="offer imagee"
                  />
                </div>
                <div className="offer-content">
                  <div className="star-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h2 className="offer-title fw-normal">E Emeher Mme</h2>
                  <p className="offer-price fw-normal">
                    Only From{" "}
                    <span className="fw-normal" style={{ color: "#FF3333" }}>
                      ৳85.00
                    </span>
                  </p>
                  <Link className="vs-btn fw-normal" to="/shop">
                    Shop Now
                  </Link>
                </div>
                <span
                  className="shape-mockup element1 z-index1 d-xxl-block d-none"
                  data-wow-delay="0.80s"
                  style={{ right: "0px", bottom: "-5px" }}
                >
                  <img
                    src="/assets/img/shapes/offer-shape1.png"
                    alt="offer shape"
                  />
                </span>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div
                className="offer-style1 white-style wow animate__fadeInRight"
                data-wow-delay="0.30s"
                // data-bg-src="assets/img/bg/offer-bg2.jpg"
                style={{
                  backgroundImage: `url("/assets/img/bg/offer-bg2.jpg")`,
                }}
              >
                <div className="offer-img">
                  <img
                    src="/assets/img/offer/offer-img1.png"
                    alt="offer imagee"
                  />
                </div>
                <div className="offer-content">
                  <div className="star-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h2 className="offer-title fw-normal">Viving Moneme</h2>
                  <p className="offer-price fw-normal">
                    Only From <span className="fw-normal">৳85.00</span>
                  </p>
                  <Link className="vs-btn fw-normal" to="/shop">
                    Shop Now
                  </Link>
                </div>
                <span
                  className="shape-mockup element1 z-index1 d-xxl-block d-none"
                  data-wow-delay="0.80s"
                  style={{ right: "0px", bottom: "-5px" }}
                >
                  <img
                    src="/assets/img/shapes/offer-shape2.png"
                    alt="offer shape"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .star-rating,
  .star-rating i,
  .star-rating svg,
  .star-rating span {
    color: #ff3333 !important;
    fill: #ff3333 !important;
  }
`;

export default OfferSection;
