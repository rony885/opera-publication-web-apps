import React from "react";
import { Link } from "react-router-dom";

const Vendor = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "50px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Vendor</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Vendor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vendor-layout1 space-top space-extra-bottom">
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
                    <option defaultValue="popularity">Sort by popularity</option>
                    <option defaultValue="rating">Sort by average rating</option>
                    <option defaultValue="date">Sort by latest</option>
                    <option defaultValue="price">Sort by price: low to high</option>
                    <option defaultValue="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row gy-30 mb-20">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.20s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-1.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Book Store</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-2.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">RR Publisher</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.40s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-3.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="//vendor-details">King Of Books</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-1.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Pink & Blue</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.60s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-2.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Book Station</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.70s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-3.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Book Nest</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.80s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-7.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Pyramid Books</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.90s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-8.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Rainbow Books</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="vendor-style1 wow animate__fadeInUp"
                data-wow-delay="0.95s"
              >
                <div className="vendor-body">
                  <div className="vendor-inner">
                    <span className="vendor-icon">
                      <img
                        src="assets/img/vendor/vendor-1-9.jpg"
                        alt="vendor imagee"
                      />
                    </span>
                    <div>
                      <h6 className="vendor-title">
                        <Link to="/vendor-details">Fast Print</Link>
                      </h6>
                      <div className="star-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="list-style1">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fas fa-map-marked-alt"></i>Willow Creek, #
                        32/65 Colorado United State Of America
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <Link to="mailto:example@ebokz.com">
                          example@ebokz.com
                        </Link>
                      </li>
                      <li>
                        <i className="fa-solid fa-headset"></i>
                        <Link to="tel:+0061365000299">+(006) 1365 000 29</Link>
                      </li>
                    </ul>
                  </div>
                  <Link to="/vendor-details" className="icon-btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center wow animate__fadeInUp"
            data-wow-delay="0.95s"
          >
            <div className="col-auto">
              <div className="vs-pagination">
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
    </>
  );
};

export default Vendor;
