import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import authorArray from "../../../src/DataJS/authors.js";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(authorArray);
  }, []);

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
            <h1 className="breadcumb-title fs-4 fw-normal">সকল লেখক</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  সকল লেখক
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="vs-sort-bar">
            <div className="row gap-4 align-items-center">
              <div className="col-md-auto flex-grow-1">
                <p className="woocommerce-result-count">
                  Showing <span>1-9 of 40</span> results
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="Shop order"
                  >
                    <option value="recent_product" selected="selected">
                      Short By Latest
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="row g-4">
              {authors.map((author) => {
                return (
                  <div
                    key={author.id}
                    className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                    data-wow-delay="0.20s"
                  >
                    <div className="feature-style2">
                      <span className="feature-img">
                        <img src={author.img} alt="feature imagee" />
                      </span>
                      <h2 className="feature-title fw-normal fs-5">
                        <Link to={`/author-details/${author.id}`}>
                          {author.name}
                        </Link>
                      </h2>
                    </div>
                  </div>
                );
              })}

              {/* <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-2.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Rodja Heartmann</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.40s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-3.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Ema Watson</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-4.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Rivanur R. Rafi</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.60s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-5.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Mrthina Kaiko</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.70s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-6.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Alison Baker</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.20s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-7.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Branden Mc Calam </Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-8.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Fahim Al Bashar</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.40s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-9.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Ema Watson</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-10.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Allaudin Alim</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.60s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-11.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Gonza Hatun</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.70s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-12.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Dua Lipa</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.20s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-13.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Eva Green</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-14.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Josher Martha</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.40s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-15.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Jenifer Lopez</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-16.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Snow White</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.60s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-17.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Kauppila Bevan</Link>
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.70s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    <img
                      src="assets/img/feature/feature-author-1-8.jpg"
                      alt="feature imagee"
                    />
                  </span>
                  <h2 className="feature-title">
                    <Link to="/author-details">Tony Stark</Link>
                  </h2>
                </div>
              </div> */}
            </div>
          </div>

          <div
            className="row justify-content-center wow animate__fadeInUp"
            data-wow-delay="0.95s"
          >
            <div className="col-auto">
              <div className="vs-pagination mt-55">
                <Link to="#" className="pagi-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#" className="active">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">16</Link>
                  </li>
                </ul>
                <Link to="#" className="pagi-btn active">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .feature-title a:hover {
    color: #ff3333 !important;
  }

  /* .vs-pagination .pagi-btn {
    color: #ff3333 !important;
  }
  .vs-pagination .pagi-btn:hover {
    color: #ffffff !important;
  } */
  .vs-pagination span.active,
  .vs-pagination span:hover,
  .vs-pagination a.active,
  .vs-pagination a:hover {
    background-color: #ff3333 !important;
  }

  .vs-pagination span,
  .vs-pagination a {
    border: 1px solid #ff3333 !important;
  }
`;

export default Authors;
