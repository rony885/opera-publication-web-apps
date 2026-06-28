import React from "react";
import { Link } from "react-router-dom";

const VendorDetails = () => {
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
            <h1 className="breadcumb-title">Vendor Details</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Vendor Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="books-layout1 space-top space-extra-bottom">
        <div class="container">
          <div class="row g-4">
            <div class="col-xl-8 col-lg-7">
              <div class="vendor-item space-bottom">
                <div
                  class="vendor-style1 style2 wow animate__fadeInUp"
                  data-wow-delay="0.20s"
                >
                  <div class="vendor-body">
                    <div class="vendor-inner">
                      <span class="vendor-icon">
                        <img
                          src="/assets/img/vendor/vendor-1-1.jpg"
                          alt="vendor imagee"
                        />
                      </span>
                      <div>
                        <h6 class="vendor-title">
                          <Link to="vendor-details.html">Book Store</Link>
                        </h6>
                        <div class="star-rating">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div class="list-style1">
                      <ul class="list-unstyled">
                        <li>
                          <i class="fas fa-map-marked-alt"></i>Willow Creek, #
                          32/65 Colorado United State Of America
                        </li>
                        <li>
                          <i class="fas fa-envelope"></i>
                          <Link to="mailto:example@ebokz.com">
                            example@ebokz.com
                          </Link>
                        </li>
                        <li>
                          <i class="fa-solid fa-headset"></i>
                          <Link to="tel:+0061365000299">
                            +(006) 1365 000 29
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="vendor-imagee">
                    <img
                      src="assets/img/vendor/vendor-img2.jpg"
                      alt="vendor-imagee"
                    />
                  </div>
                </div>
              </div>
              <h3 class="vendor-details-title title-shep">
                RR Publisher Product
              </h3>
              <div class="vs-sort-bar">
                <div class="row gap-4 align-items-center">
                  <div class="col-md-auto flex-grow-1">
                    <p class="woocommerce-result-count">
                      Showing <span>1-9 of 40</span> results
                    </p>
                  </div>
                  <div class="col-md-auto">
                    <form class="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        class="orderby"
                        aria-label="Shop order"
                      >
                        <option value="recent_product" selected="selected">
                          Short By Latest
                        </option>
                        <option defaultValue="popularity">Sort by popularity</option>
                        <option defaultValue="rating">Sort by average rating</option>
                        <option defaultValue="date">Sort by latest</option>
                        <option defaultValue="price">
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
              <div class="row g-4">
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.30s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-1.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">The Muke Guy</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.40s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-2.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> H Abdul
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Levtimeline</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.50s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-3.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> D Bellingham
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Mick Weive Mockchapu</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.60s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-4.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Alex Jhon
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Fuarcnusk Preentine</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-5.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.80s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-6.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Vqirk Teur Mocgkcup</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.90s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-7.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Hd Pry Balir Ptonnrnle</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.95s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-8.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Beuto minimal Cork</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-9.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.60s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-10.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Alex Jhon
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Fuarcnusk Preentine</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-11.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Nicola joi
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">L Art Du Subtiliste</Link>
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div
                    class="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.80s"
                  >
                    <div class="product-img">
                      <img
                        src="assets/img/product/product-img-5-12.jpg"
                        alt="product imagee"
                      />
                      <div class="product-btns">
                        <Link to="/wishlist" class="icon-btn wishlist">
                          <i class="far fa-heart"></i>
                        </Link>
                        <Link to="/cart" class="icon-btn cart">
                          <i class="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      <ul class="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul>
                    </div>
                    <div class="product-content">
                      <div class="product-rating">
                        <span class="star">
                          <i class="fas fa-star"></i> (4.5)
                        </span>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                      <span class="product-author">
                        <strong>By:</strong> Fahim Al Bashar
                      </span>
                      <h2 class="product-title">
                        <Link to="/shop">Vqirk Teur Mocgkcup</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="row justify-content-center wow animate__fadeInUp"
                data-wow-delay="0.95s"
              >
                <div class="col-auto">
                  <div class="vs-pagination mt-55">
                    <Link to="#" class="pagi-btn">
                      <i class="fa-solid fa-arrow-left"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#" class="active">
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
                    <Link to="#" class="pagi-btn active">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-5">
              <aside class="sidebar-area">
                <div
                  class="widget widget_search wow animate__fadeInUp"
                  data-wow-delay="0.30s"
                >
                  <h3 class="wp-block-heading widget_title title-shep">
                    Search
                  </h3>
                  <form class="search-form">
                    <input type="text" placeholder="Search Here..." />
                    <button class="vs-btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div
                  class="widget wow animate__fadeInUp"
                  data-wow-delay="0.40s"
                >
                  <div class="wp-block-group widget_categories is-layout-constrained wp-block-group-is-layout-constrained">
                    <div class="wp-block-group__inner-container">
                      <h3 class="wp-block-heading widget_title title-shep">
                        Categories
                      </h3>
                      <ul class="wp-block-categories-list wp-block-categories">
                        <li class="cat-item">
                          <Link to="/shop">Romance</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Thriller</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Fantasy</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Since Fiction</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Since</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Astronomy</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Kids</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Cartoon & Story</Link>
                        </li>
                        <li class="cat-item">
                          <Link to="/shop">Educational</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="widget product-sidebar wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <h3 class="widget_title title-shep">top Books This Week</h3>
                  <div class="recent-post-wrap">
                    <div class="recent-post">
                      <div class="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/product/product-sidebar-1-1.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div class="media-body">
                        <span class="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 class="post-title">
                          <Link class="text-inherit" to="shop-details.html">
                            Rat Phnory Mttke Srial Tofairle
                          </Link>
                        </h4>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div class="recent-post">
                      <div class="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/product/product-sidebar-1-2.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div class="media-body">
                        <span class="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 class="post-title">
                          <Link class="text-inherit" to="shop-details.html">
                            Amazona Book Cover
                          </Link>
                        </h4>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div class="recent-post">
                      <div class="media-img">
                        <Link to="blog-details.html">
                          <img
                            src="assets/img/product/product-sidebar-1-3.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div class="media-body">
                        <span class="product-author">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <h4 class="post-title">
                          <Link class="text-inherit" to="shop-details.html">
                            Quantum Entanglement
                          </Link>
                        </h4>
                        <ul class="price-list">
                          <li>
                            <del>$39.99</del>
                          </li>
                          <li>$30.00</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      class="vs-btn wow animate__flipInX"
                      data-wow-delay="0.70s"
                      to="/shop"
                    >
                      View More
                    </Link>
                  </div>
                </div>
                <div
                  class="widget widget-update wow animate__fadeInUp"
                  data-wow-delay="0.60s"
                >
                  <h3 class="wp-block-heading widget_title title-shep">
                    Contact Vendor
                  </h3>
                  <form class="search-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Your Email" />
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      cols="50"
                      placeholder="Type Your Message..."
                    ></textarea>
                    <button class="vs-btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorDetails;
