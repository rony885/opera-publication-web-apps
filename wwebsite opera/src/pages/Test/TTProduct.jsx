import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("/assets/img/bg/breadcumb-bg.png")`,
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Shop </h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Shop </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="books-layout1 space-top space-extra-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8 col-lg-7">
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
                        className="orderby bg-danger"
                        aria-label="Shop order"
                      >
                        <option value="recent_product" selected="selected">
                          Short By Latest
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.30s"
                  >
                    <div className="product-img">
                      <img
                        src="/assets/img/product/product-img-5-1.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">The Muke Guy</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.40s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-2.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> H Abdul
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Levtimeline</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.50s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-3.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> D Bellingham
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Mick Weive Mockchapu</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.60s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-4.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Alex Jhon
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Fuarcnusk Preentine</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-5.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.80s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-6.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Vqirk Teur Mocgkcup</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.90s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-7.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Hd Pry Balir Ptonnrnle</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.95s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-8.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Beuto minimal Cork</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-9.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.60s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-10.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Alex Jhon
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Fuarcnusk Preentine</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-11.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.80s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-12.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Vqirk Teur Mocgkcup</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.90s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-13.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Hd Pry Balir Ptonnrnle</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.95s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-14.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">Beuto minimal Cork</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div className="product-img">
                      <img
                        src="assets/img/product/product-img-5-15.jpg"
                        alt="product imagee"
                      />
                      <div className="product-btns">
                        <Link to="/wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="star">
                          <i className="fas fa-star"></i> (4.5)
                        </span>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span className="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 className="product-title">
                        <Link to="/shop-details">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
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
            
            <div className="col-xl-4 col-lg-5">
              <aside className="sidebar-area">
                <div
                  className="widget widget_search wow animate__fadeInUp"
                  data-wow-delay="0.30s"
                >
                  <h3 className="wp-block-heading widget_title title-shep">
                    Search
                  </h3>
                  <form className="search-form">
                    <input type="text" placeholder="Search Here..." />
                    <button className="vs-btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.40s"
                >
                  <h3 className="widget_title mb-35 title-shep">
                    Filter By Price
                  </h3>
                  <div className="slider-area">
                    <div className="slider-area-wrapper">
                      <div id="skipstep" className="slider mb-20"></div>
                      <div className="range-btn">
                        <button className="vs-btn" type="submit">
                          Filter
                        </button>
                        <div className="price-range">
                          Price: $
                          <span className="price" id="skip-value-lower"></span>
                          -$
                          <span className="price" id="skip-value-upper"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <div className="wp-block-group widget_categories is-layout-constrained wp-block-group-is-layout-constrained">
                    <div className="wp-block-group__inner-container">
                      <h3 className="wp-block-heading widget_title title-shep">
                        Categories
                      </h3>
                      <ul className="wp-block-categories-list wp-block-categories">
                        <li className="cat-item">
                          <Link to="/shop">Romance</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Thriller</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Fantasy</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Since Fiction</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Since</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Astronomy</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Kids</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Cartoon & Story</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/shop">Educational</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget product-sidebar wow animate__fadeInUp"
                  data-wow-delay="0.60s"
                >
                  <h3 className="widget_title title-shep">
                    top Books This Week
                  </h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-det/ails">
                          <img
                            src="assets/img/product/product-sidebar-1-1.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <span className="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-det/ails">
                            Rat Phnory Mttke Srial Tofairle
                          </Link>
                        </h4>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-det/ails">
                          <img
                            src="assets/img/product/product-sidebar-1-2.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <span className="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-det/ails">
                            Amazona Book Cover
                          </Link>
                        </h4>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="blog-det/ails">
                          <img
                            src="assets/img/product/product-sidebar-1-3.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <span className="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="blog-det/ails">
                            Quantum Entanglement
                          </Link>
                        </h4>
                        <ul className="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      className="vs-btn wow animate__flipInX"
                      data-wow-delay="0.70s"
                      to="#"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
