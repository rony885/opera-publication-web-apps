import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("/assets/img/bg/breadcumb-bg.png")`,
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">যোগাযোগ </h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  যোগাযোগ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-layout2 space">
        <div className="container">
          {/* <div className="row g-4 space-bottom">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="contact-media wow animate__fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title"> Address</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/location.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text">
                    Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="contact-media wow animate__fadeInUp"
                data-wow-delay="0.45s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title"> Contact Number</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/call.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text">
                    <Link to="tel:01739392329" className="contact-link">
                      01739392329
                    </Link>
                    <br />
                    <Link to="tel:01914503351" className="contact-link">
                      01914503351
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="contact-media wow animate__fadeInUp"
                data-wow-delay="0.65s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title">Email </h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/mail.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text">
                    <Link to="mailto: info@operapublication.com">
                      info@operapublication.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row g-4 space-bottom">
            {/* Address */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.25s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">ঠিকানা</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/location.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text fw-normal fs-5">
                    {/* Ga -27/2 A, Shahjadpur, Gulshan, Dhaka-1212 */}ঘ - ২৭/২
                    এ, শাহজাদপুর, গুলশান, ঢাকা-১২১২, বাংলাদেশ
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.45s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">যোগাযোগ নম্বর</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/call.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text fw-normal">
                    <Link
                      to="tel:01739392329"
                      className="contact-link media-text fs-5"
                    >
                      01739392329
                    </Link>
                    <br />
                    <Link
                      to="tel:01914503351"
                      className="contact-link media-text fw-normal fs-5"
                    >
                      01914503351
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div
                className="contact-media w-100 wow animate__fadeInUp"
                data-wow-delay="0.65s"
              >
                <div className="media-style1">
                  <div className="media-info">
                    <h3 className="media-title fw-normal">ই-মেইল</h3>
                    <div className="media-icon">
                      <img src="/assets/img/icons/mail.svg" alt="icon" />
                    </div>
                  </div>
                  <p className="media-text">
                    <Link
                      to="mailto:info@operapublication.com"
                      className="contact-link media-text fs-4"
                    >
                      info@operapublication.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <form
                className="form-style1 ajax-contact wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <div className="title-area animation-style1 title-anime">
                  <h2 className="sec-title text-title title-anime__title fw-normal">
                    {/* Get In Touch With Opera Publication */}
                    আমাদের সাথে যোগাযোগ করুন
                  </h2>
                </div>
                <div className="row gx-20">
                  <div className="col-md-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="নাম"
                    />
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="ই-মেইল"
                    />
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="নাম্বার"
                    />
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="ঠিকানা"
                    />
                    <i className="fas fa-location-dot"></i>
                  </div>

                  {/* <div className="col-md-6 form-group">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order"
                    >
                      <option value="recent_product" selected="selected">
                        Select Service
                      </option>
                      <option defaultValue="popularity">
                        Sort by popularity
                      </option>
                      <option defaultValue="rating">
                        Sort by average rating
                      </option>
                      <option defaultValue="date">Sort by latest</option>
                      <option defaultValue="price">
                        Sort by price: low to high
                      </option>
                      <option defaultValue="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div> */}
                  <div className="col-md-12 form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="এখানে বার্তা লিখুন..."
                      required=""
                    ></textarea>
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      className="vs-btn justify-content-center fw-normal"
                      type="submit"
                    >
                      বার্তা পাঠান
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </div>
        </div>
      </section>

      <div className="map-layout1" style={{ marginBottom: "130px" }}>
        <div
          className="ratio ratio-21x9 wow animate__fadeInUp"
          data-wow-delay="0.35s"
          style={{ height: "742px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7158088157403!2d90.42331221429782!3d23.793132293060978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f25f178fd%3A0x22726cf916252c05!2sEKATTOR%20iT!5e0!3m2!1sen!2sbd!4v1582343331795!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EKATTOR IT Location"
          ></iframe>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .media-text .contact-link:hover {
    color: #fff; /* hover white */
  }

  .contact-media {
    height: 100%;
  }

  .media-style1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .media-text {
    min-height: 70px;
  }
  .orderby {
    background-color: #ffffff !important;
    color: #3333 !important;
  }

  .orderby option {
    background-color: #ffffff;
    color: #000000;
  }
`;

export default Contact;
