import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className="footer-layout1 style2 z-index-common " style={{marginTop: "100px"}}>
    <footer className="footer-layout1 style2 z-index-common mt-5">
      {/* <!-- Cta Area --> */}
      <div className="container">
        <div className="cta-layout1 style2 z-index-common blog-title">
          <div className="row gx-60 align-items-center">
            <div className="col-lg-3">
              <div className="cta-logo">
                <Link to="/">
                  <img
                    src="/assets/img/logo.svg"
                    alt="Opera"
                    className="logo"
                  />
                </Link>
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
                      <h4 className="newsletter_title">Get In Touch</h4>
                      <p className="newsletter-text">
                        Subscribe for more Update
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="newsletter-form">
                    <div className="search-btn">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email Address"
                      />
                      <button type="submit" className="vs-btn">
                        <i className="fa-solid fa-paper-plane"></i> Subscribe
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
      <div className="footer-top">
        <div className="container">
          <div className="row g-5 justify-content-between">
            <div className="col-md-6 col-lg-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">
                  Explore Us
                  <span className="title-shape">
                    <img
                      src="/assets/img/shapes/footer-line-shape.svg"
                      alt="Shape Imagee"
                    />
                  </span>
                </h3>
                <ul className="menu">
                  <li>
                    <Link to="/about">
                      <i className="far fa-angle-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> About
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Authors
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">
                  Information
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
                <h3 className="widget_title">
                  Categories
                  <span className="title-shape">
                    <img
                      src="/assets/img/shapes/footer-line-shape.svg"
                      alt="Shape Imagee"
                    />
                  </span>
                </h3>
                <ul className="menu footer-menu">
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Action
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Comedy
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Kids
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Adventure
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Trips
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Suspense
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Suspense
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Love
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Thrillers
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Since Friction
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> General
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-angle-right"></i> Astronomy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">
                  Contact
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
                      <Link to="#">
                        Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <Link to="mailto: info@operapublication.com">
                        info@operapublication.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-headset"></i>
                      <div className="d-flex flex-column">
                        <Link to="tel:01739392329">01739392329</Link>
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

      <div className="bottom-info">
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
      </div>

      <div className="copyright-wrap">
        <div className="container">
          <p className="copyright-text">
            Copyright <i className="fal fa-copyright"></i>
            <script>document.write(new Date().getFullYear());</script>
            <Link to="/">&nbsp;Opera Publications</Link>. All Rights Reserved
            By&nbsp;
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
  );
};

export default Footer;
