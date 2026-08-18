import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer-layout1 style2 z-index-common mt-5">
        {/* <!-- Cta Area --> */}
        <div className="container">
          <div className="cta-layout1 style2 z-index-common blog-title">
            <div className="row gx-60 align-items-center">
              <div className="col-lg-3">
                <div className="cta-logo">
                  <Link to="/">
                    <img
                      // src="/assets/img/logo.svg"
                      // src="/assets/img/Opera Publication Logo11.png"
                      src="/assets/img/Opera logo 195 x 60.png"
                      alt="Opera"
                      className="logo"
                      // style={{ width: "120px", height: "70px" }}
                      // style={{ height: "80px" }}
                    />
                  </Link>
                  {/* <Link to="/" className="text-bold fs-2">অপেরা</Link> */}
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row justify-content-xl-between justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <div className="newsletter-inner">
                      <span className="newsletter-icon">
                        <img src="/assets/img/icons/mail-2.svg" alt="icon" />
                      </span>
                      <div className="newsletter-content">
                        <h4 className="newsletter_title fw-normal">
                          {/* Get In Touch */}
                          নিয়মিত আপডেট পেতে সাবস্ক্রাইব করুন
                        </h4>
                        {/* <p className="newsletter-text fw-normal">
                          Subscribe for more Update
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="newsletter-form">
                      <div className="search-btn">
                        <input
                          className="form-control"
                          type="email"
                          // placeholder="Your Email Address"
                          placeholder="আপনার ইমেইল ঠিকানা"
                        />
                        <button type="submit" className="vs-btn fw-normal">
                          {/* <i className="fa-solid fa-paper-plane"></i> Subscribe */}
                          <i className="fa-solid fa-paper-plane"></i> সাবস্ক্রাইব 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Cta Area End --> */}
        <div
          className="footer-top"
          style={{ borderBottom: "1px solid #435C6B" }}
        >
          <div className="container">
            <div className="row g-5 justify-content-between">
              <div className="col-md-6 col-lg-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title fw-normal">
                    {/* Social Links */}
                    সোশ্যাল মিডিয়া লিংক
                    <span className="title-shape">
                      <img
                        src="/assets/img/shapes/footer-line-shape.svg"
                        alt="Shape Imagee"
                      />
                    </span>
                  </h3>

                  {/* <ul className="menu social-links footer-menu"> */}
                  <ul className="menu social-links">
                    <li>
                      <Link
                        to="https://www.facebook.com/operapublication"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title fw-normal">
                    {/* Explore Us */}
                    আমাদের সম্পর্কে জানুন
                    <span className="title-shape">
                      <img
                        src="/assets/img/shapes/footer-line-shape.svg"
                        alt="Shape Imagee"
                      />
                    </span>
                  </h3>
                  <ul className="menu">
                    <li>
                      <Link to="/" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> হোম
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> সম্বন্ধে
                      </Link>
                    </li>
                    <li>
                      <Link to="/books" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> বই
                      </Link>
                    </li>
                    <li>
                      <Link to="/authors" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> লেখক
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> ব্লগ
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="fs-5 fw-normal">
                        <i className="far fa-angle-right"></i> যোগাযোগ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title fw-normal">
                    {/* Information */}
                    তথ্যসমূহ
                    <span className="title-shape">
                      <img
                        src="/assets/img/shapes/footer-line-shape.svg"
                        alt="Shape Imagee"
                      />
                    </span>
                  </h3>
                  <ul className="menu">
                    <li>
                      <Link to="#">
                        <i className="far fa-angle-right"></i> Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="far fa-angle-right"></i> Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="far fa-angle-right"></i> Terms &amp;
                        Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title fw-normal">
                    {/* Contact */}
                    যোগাযোগ
                    <span className="title-shape">
                      <img
                        src="/assets/img/shapes/footer-line-shape.svg"
                        alt="Shape Imagee"
                      />
                    </span>
                  </h3>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>
                        <Link className="fw-normal" to="#">
                          ঘ - ২৭/২ এ, শাহজাদপুর, গুলশান, ঢাকা-১২১২
                        </Link>
                      </li>
                      <li style={{ textTransform: "lowercase" }}>
                        <i className="fas fa-envelope"></i>
                        <Link
                          className="fw-normal"
                          to="mailto:info@operapublication.com"
                          style={{ textTransform: "lowercase" }}
                        >
                          info@operapublication.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <div className="d-flex flex-column fw-normal">
                          <Link to="tel:01739392329">01739392329</Link>
                        </div>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <div className="d-flex flex-column fw-normal">
                          <Link to="tel:01914503351">01914503351</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bottom-info">
          <div className="container">
            <div className="row g-4 justify-content-lg-around align-items-center justify-content-center">
              <div className="col-lg-4">
                <div className="contact-body">
                  <ul className="social-links">
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="copyright-menu">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                    <li>
                      <Link to="#">Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Conditions </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="copyright-img">
                  <Link to="#">
                    <img
                      src="/assets/img/others/credit-payment.png"
                      alt="payment img"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="copyright-wrap">
          <div className="container">
            <p className="copyright-text">
              Copyright <i className="fal fa-copyright"></i>
              <script>document.write(new Date().getFullYear());</script>
              <Link to="/" style={{ color: "#FF3333" }}>
                &nbsp;Opera Publication
              </Link>
              . All Rights Reserved By&nbsp;
              <Link
                to="https://www.ekattorit.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: "red" }} className="content">
                  EKATTOR&nbsp;
                </span>
                <span style={{ color: "green" }} className="content">
                  iT
                </span>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer-layout1 .footer-menu {
    /* column-count: 2; */
    column-count: 0 !important;
    gap: 60px;
  }

  .cta-layout1 {
    background-color: #cc0033;
    position: relative;
    overflow: hidden;
  }
  .cta-layout1 .vs-btn::before,
  .cta-layout1 .vs-btn::after {
    /* background-color: var(--theme-color); */
    background-color: #2e4a5b !important;
  }

  .social-links a {
    height: 40px;
    width: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* background-color: var(--theme-color); */
    background-color: #ff3333 !important;
    color: var(--white-color);
    border-radius: 50%;
    border: none;
  }

  .footer-widget.widget_nav_menu a::before {
    position: absolute;
    content: "";
    width: 0%;
    height: 1px;
    /* background-color: var(--body-color); */
    background-color: #ff3333 !important;
    bottom: 0;
    right: 0;
  }

  /* Social icon hover fix (all icons) */
  .social-links a:hover {
    background-color: #ffffff !important;
    /* border: 1px solid #ff3333; */
    transform: translateY(-2px);
  }

  /* ICON color on hover */
  .social-links a:hover i {
    color: #ff3333 !important;
  }
  .footer-widget.widget_nav_menu a:hover {
    color: #ff3333 !important;
  }

  .footer-layout1 .list-style1 li:hover i {
    color: #ff3333 !important;
  }

  .footer-widget.widget_nav_menu a i:hover {
    color: #ff3333 !important;
  }
`;

export default Footer;
