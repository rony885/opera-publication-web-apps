import React from "react";
import { Link } from "react-router-dom";

const ProductMonth = () => {
  return (
    <section
      className="books-layout1 space"
      style={{
        backgroundImage: `url("/assets/img/bg/section-bg1.jpg")`,
      }}
    >
      <div className="container">
        <div className="title-area text-center animation-style1 title-anime">
          <h2 className="sec-title title-anime__title">Book Of The Month</h2>
        </div>
        <div className="row g-4">
          <div className="col-xl-3 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.30s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-5-1.jpg"
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
                  <Link to="/shop">The Muke Guy</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="/shop">Levtimeline</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="/shop">Mick Weive Mockchapu</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="wishlist" className="icon-btn wishlist">
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
                  <Link to="/shop">Fuarcnusk Preentine</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="cart" className="icon-btn cart">
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
                  <Link to="/shop">L Art Du Subtiliste</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="wishlist" className="icon-btn wishlist">
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
                  <Link to="/shop">Vqirk Teur Mocgkcup</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="shop">Hd Pry Balir Ptonnrnle</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 col-sm-6">
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
                  <Link to="wishlist" className="icon-btn wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                  <Link to="cart" className="icon-btn cart">
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
                  <Link to="/shop">Beuto minimal Cork</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              className="vs-btn mt-10 wow animate__flipInX"
              data-wow-delay="0.40s"
              to="/shop"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMonth;
