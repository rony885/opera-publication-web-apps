import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const featureData = [
  {
    id: 1,
    icon1: "assets/img/feature/feature-icon-1-1.png",
    icon2: "assets/img/feature/feature-icon-2-1.png",
    // title: "Free Delivery",
    title: "ফ্রি ডেলিভারি",
    // desc: "To get free delivery order now",
    desc: "ফ্রি ডেলিভারি পেতে এখনই অর্ডার করুন",
    delay: "0.20s",
  },
  {
    id: 2,
    icon1: "assets/img/feature/feature-icon-1-2.png",
    icon2: "assets/img/feature/feature-icon-2-2.png",
    // title: "Secure Payments",
    title: "নিরাপদ পেমেন্ট",
    desc: "ফ্রি ডেলিভারি পেতে এখনই অর্ডার করুন",
    delay: "0.45s",
  },
  {
    id: 3,
    icon1: "assets/img/feature/feature-icon-1-3.png",
    icon2: "assets/img/feature/feature-icon-2-3.png",
    // title: "Support 24/7",
    title: "২৪/৭ সহায়তা",
    desc: "ফ্রি ডেলিভারি পেতে এখনই অর্ডার করুন",
    delay: "0.65s",
  },
];

const FeatureArea = () => {
  return (
    <Wrapper>
      <div className="feature-layout1 space-bottom">
        <div className="container">
          <div className="row g-4">
            {featureData.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 text-center wow animate__fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="feature-style1">
                  <span className="feature-icon">
                    <img
                      className="icon-1"
                      src={item.icon1}
                      alt="feature icon"
                    />
                    <img
                      className="icon-2"
                      src={item.icon2}
                      alt="feature icon"
                    />
                  </span>

                  <div className="feature-body">
                    <h2 className="feature-title fw-normal">
                      <Link to="#">{item.title}</Link>
                    </h2>
                    <p className="feature-text fw-normal">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .feature-style1 {
    background-color: var(--body-color);
    border-bottom: 3px solid #ff3333 !important;
    transition: 0.3s;
  }

  .feature-style1:hover {
    background-color: #ff3333 !important;
    border-color: #ffffff !important;
  }

  /* ICON DEFAULT */
  .feature-icon {
    background-color: #ff3333 !important;
    transition: 0.3s;
  }

  /* ICON CHANGE WHEN PARENT HOVER */
  .feature-style1:hover .feature-icon {
    background-color: #ffffff !important;
  }
`;

export default FeatureArea;
