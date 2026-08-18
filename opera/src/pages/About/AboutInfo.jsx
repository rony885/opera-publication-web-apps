import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutInfo = () => {
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
            <h1 className="breadcumb-title fs-4 fw-normal">সম্বন্ধে</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  সম্বন্ধে
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-layout1 space-top">
        <div className="container space-bottom">
          <div className="row g-5 justify-content-center align-items-center">
            <div className="col-lg-4">
              <div
                className="about-img wow animate__fadeInUp"
                data-wow-delay="0.45s"
              >
                <img
                  src="/assets/img/about/about-img-1-1.jpg"
                  alt="about imagee"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-content">
                <div className="wow animate__fadeInUp" data-wow-delay="0.35s">
                  <div className="title-area animation-style1 title-anime">
                    <h2 className="sec-title text-title title-anime__title fw-normal fw-normal">
                      We Are The Best Online Book Selling Store In The World
                    </h2>
                  </div>
                  <p
                    className="about-text wow animate__fadeInUp fw-normal"
                    data-wow-delay="0.30s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div
                  className="list-style1 wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <ul className="list-unstyled fw-normal">
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>Lorem ipsum
                      dolor sit amet, qua. 
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>Lorem ipsum
                      dolor sit qua. 
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>Lorem ipsum
                      dolor sit amet 
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>Lorem ipsum
                      dolor sit.
                    </li>
                  </ul>
                </div>
                <div
                  className="about-content wow animate__fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <div className="about-box">
                    <div
                      className="about-img wow animate__fadeInUp"
                      data-wow-delay="0.55s"
                    >
                      <img
                        src="/assets/img/about/about-img-1-2.jpg"
                        alt="about imagee"
                      />
                    </div>
                    <div
                      className="about-inner mb-0 wow animate__fadeInUp"
                      data-wow-delay="0.95s"
                    >
                      <p className="about-text mb-20 fw-normal">
                        Lorem ipsum dolor sit amet, consecteturdvnd adipiscing
                        elit, sed do jdvj eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link className="vs-btn fw-normal py-2 fs-5" to="/about">
                        আরও জানুন
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="video-style1"
        style={{
          backgroundImage: "url('/assets/img/bg/video-bg1.jpg')",
        }}
      >
        <div className="container">
          <div className="title-area text-center animation-style1 title-anime">
            <h2 className="sec-title text-white title-anime__title fw-normal">
              We are providing Best Services
            </h2>
          </div>
          <div className="video-btn text-center">
            <Link
              to="https://www.youtube.com/watch?v=moYayPRgaY0"
              className="play-btn popup-video"
            >
              <i className="fas fa-play"></i>
            </Link>
          </div>
        </div>
      </div>

      <section className="counter-layout1 bg-theme">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="counter-style1">
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="2"
                    >
                      00
                    </h2>
                    <span className="count-icon fw-normal">M+</span>
                  </div>
                  <p className="media-text fw-normal">বইয়ের সংগ্রহ</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="99"
                    >
                      00
                    </h2>
                    <span className="count-icon fw-normal">+</span>
                  </div>
                  <p className="media-text fw-normal">প্রাপ্ত সম্মাননা</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="10"
                    >
                      00
                    </h2>
                    <span className="count-icon fw-normal">k+</span>
                  </div>
                  <p className="media-text fw-normal">সম্মানিত লেখক</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="100"
                    >
                      00
                    </h2>
                    <span className="count-icon fw-normal">+</span>
                  </div>
                  <p className="media-text fw-normal">দলের সদস্য</p>
                </div>
                <span className="counter-line">
                  <img
                    className="icon"
                    src="/assets/img/shapes/round-ring.svg"
                    alt="line shape"
                  />
                </span>
              </div>
              <div
                className="media-inner wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="media-counter text-center">
                  <div className="media-count">
                    <h2
                      className="media-title counter-number fw-normal"
                      data-count="12"
                    >
                      00
                    </h2>
                    <span className="count-icon fw-normal">k+</span>
                  </div>
                  {/* <p className="media-text fw-normal">Trusted Clients</p> */}
                  <p className="media-text fw-normal">পাঠক</p>
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
  .bg-theme {
    background-color: #ff3333 !important;
  }
  .about-layout1 .list-style1 .list-unstyled li i {
    background-color: #ff3333 !important;
  }
  .video-style1 .video-btn .play-btn i {
    background-color: #cc0033 !important;
  }
  .video-style1 .video-btn .play-btn:hover i {
    background-color: #ff3333 !important;
  }
  .play-btn:after,
  .play-btn:before {
    content: "";
    background-color: #ff3333 !important;
  }
`;

export default AboutInfo;
