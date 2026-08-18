import React from "react";
import { Link } from "react-router-dom";

const KidsProduct = () => {
  return (
    <section className="Kids-layout1 space">
      <div className="container">
        <div className="title-area2 animation-style1 title-anime">
          <h2 className="sec-title title-anime__title">
            Best Selling Kids Books
          </h2>
          <Link
            className="vs-btn wow animate__flipInX"
            data-wow-delay="0.50s"
            to="/shop"
          >
            View More
          </Link>
        </div>
        <div className="row g-4">
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.30s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-1.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">Aelon Nacedile</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.40s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-2.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">Parer Book</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.50s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-3.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">Every Thought Sed</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.60s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-4.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">A Sunny Day</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.70s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-5.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">Present Trop Ical</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.80s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-4-6.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="wishlist.html" className="icon-btn wishlist">
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
                  <Link to="/shop">Whispers of Wild</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsProduct;
