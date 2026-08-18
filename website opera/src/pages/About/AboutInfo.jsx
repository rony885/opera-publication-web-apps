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
            <h1 className="breadcumb-title fs-4 fw-normal">অপেরা</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  অপেরা
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
                    className="about-text wow animate__fadeInUp fw-normal text-justify"
                    data-wow-delay="0.30s"
                  >
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. */}
                    সবাই বলে—‘মানুষ এখন আর বই পড়ে না’, আর অপেরা পাবলিকেশন
                    বিশ্বাস করে— ‘মানুষ এখনও বই পড়ে, যদি সেটা ভালো বই হয়।’
                    <br />
                    আমরা মনে করি, একটি প্রকাশনীর প্রথম ও প্রধান কাজ হচ্ছে—ভালো ও
                    উন্নতমানের বই প্রকাশ করা। সেই বইটিকে পাঠকের কাছে পৌঁছে দেওয়া
                    একটি প্রকাশনীর দ্বিতীয় প্রধান কাজ। গত অর্ধদশক ধরে অগণিত
                    পাঠকের কথা মাথায় রেখে মানসম্মত (ফিকশন, ননফিকশন, মৌলিক,
                    অনুবাদ, শিশুতোষ) বই প্রকাশ ও তা পাঠকের কাছে পৌঁছে দেওয়ার
                    কাজটি অপেরা পাবলিকেশন নিরলসভাবে করে যাচ্ছে। একঝাঁক নবীন ও
                    প্রবীন লেখকমণ্ডলীর মানসম্মত লেখা এবং আমাদের দক্ষ ও
                    অভিজ্ঞতাসম্পন্ন টিম দ্বারা নিখুঁত সম্পাদনা ও প্রিমিয়াম
                    কোয়ালিটির প্রোডাকশন, যা একটি উন্নত কন্টেন্টকে আরও উন্নততর
                    করে তোলে।
                    <br />
                    অপেরার প্রধান লক্ষ্য দেশের গণ্ডি পেরিয়ে সারা বিশ্বের পাঠকের
                    কাছে পৌঁছে যাওয়া। সেই লক্ষ্য বাস্তবায়িত সম্ভব, যদি আমাদের এই
                    অগ্রযাত্রায় আমরা আপনাদেরকে পাশে পাই।
                  </p>
                </div>
                <div
                  className="list-style1 wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <ul className="list-unstyled fw-normal">
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>দক্ষ ও নির্ভুল
                      সম্পাদনা
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>উন্নতমানের
                      প্রোডাকশন
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>পাঠক বান্ধব
                      সুলভ মূল্য
                    </li>
                    <li className="fw-normal">
                      <i className="fa-solid fa-badge-check"></i>দেশের যেকোনো
                      প্রান্ত থেকে সংগ্রহের নিশ্চয়তা
                    </li>
                  </ul>
                </div>
                <div
                  className="about-content wow animate__fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <div className="about-box">
                    <div
                      className="about-inner mb-0 wow animate__fadeInUp"
                      data-wow-delay="0.95s"
                    >
                      <Link className="vs-btn fw-normal py-2 fs-5" to="/opera">
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play"></i>
            </Link>
          </div>
        </div>
      </div>
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
  .text-justify {
    text-align: justify;
    text-justify: inter-word;
    font-size: 19px;
    /* line-height: 1.8; */
  }
  .about-text {
    width: 100% !important;
    max-width: 100% !important;
    text-align: justify;
  }
`;

export default AboutInfo;
