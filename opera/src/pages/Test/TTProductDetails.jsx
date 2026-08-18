import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductArray from "../../../src/DataJS/Products.js";

const ProductInfo = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setProductDetails(ProductArray);
  }, []);

  const findProductDetails =
    productDetails &&
    productDetails.find((productItem) => productItem.id === parseInt(id));

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
            <h1 className="breadcumb-title">Shop Details</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Shop Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vs-product-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div
                className="product-slide-row wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="product-big-img">
                  <div className="img">
                    <img
                      // src="/assets/img/shop/product-d-1.jpg"
                      src={findProductDetails && findProductDetails.img}
                      alt="Product Imagee"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="product-about wow animate__fadeInUp"
                data-wow-delay="0.30s"
              >
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span></span>
                  </div>
                  <span className="product-rating__total">Review (03)</span>
                </div>
                <h2 className="product-title">Neglected Solitary Life</h2>
                <span className="product-author">
                  <strong>By:</strong> <Link to="#">Fahim Al Bashar</Link>
                </span>
                <p className="product-price">
                  $155.00 <del>$23.85</del>
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  purus vel, of Link viveirra facilisi neque quisque. Phasellus
                  aliquam ut id rhoncus. In viverra sed vitae vivamus amet,
                  nuncg vivamus... <span className="text-danger">See More</span>
                </p>
                <span className="product-instock">
                  <p>Availability:</p>
                  <span>
                    <i className="fas fa-check-square"></i>In Stock
                  </span>
                </span>
                <div className="actions">
                  <div className="quantity">
                    <div className="quantity__field quantity-container">
                      <div className="quantity__buttons">
                        <button className="quantity-plus qty-btn">
                          <i className="fal fa-plus"></i>
                        </button>
                        <input
                          type="number"
                          id="quantity"
                          className="qty-input"
                          step="1"
                          min="1"
                          max="100"
                          name="quantity"
                          value="01"
                          title="Qty"
                        />
                        <button className="quantity-minus qty-btn">
                          <i className="fal fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link to="/cart" className="vs-btn">
                    <i className="fa-solid fa-basket-shopping"></i>Add to Cart
                  </Link>
                  <Link to="/wishlist" className="icon-btn">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product_meta">
                  <h4 className="h5">Information:</h4>
                  <span className="sku_wrapper">
                    <p>SKU:</p>
                    <span className="sku">03</span>
                  </span>
                  <span className="posted_in">
                    <p>Category:</p>
                    <Link to="#" rel="tag">
                      Thriller
                    </Link>
                  </span>
                  <span>
                    <p>Tags:</p>
                    <Link to="#" rel="tag">
                      Kids
                    </Link>
                    <Link to="#" rel="tag">
                      Popular
                    </Link>
                    <Link to="#" rel="tag">
                      Gost
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="product-description wow animate__fadeInUp"
            data-wow-delay="0.50s"
          >
            <div className="product-description__tab">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Reviews (03)
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="description">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum ultricies aliquam. Cum sociis
                    natoque penatibus et magnis dis parturient montes nascetur
                    ridiculus mus sit am.
                  </p>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum ultricies aliquam. Done ultricies
                    nec, pellent, consectetur adipiscing elit. Ieuismod orci.
                  </p>
                  <div className="product_meta">
                    <span className="sku_wrapper">
                      <p>Categoris</p>
                      <span className="sku">Thriller</span>
                    </span>
                    <span className="posted_in">
                      <p>Color</p>
                      <span>Lilac Purple</span>
                    </span>
                    <span>
                      <p>Item Weight</p>
                      <span>10.4 Ounces</span>
                    </span>
                    <span>
                      <p>Item Dimensions</p>
                      <span>2.6 x 4.2 x 4.8 inches</span>
                    </span>
                    <span>
                      <p>Paper</p>
                      <span>White Paper</span>
                    </span>
                  </div>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum ultricies aliquam. Done ultricies
                    nec, pellent, consectetur adipiscing elit. Ieuismod orci.
                    Cum sociis natoque penatibus et magnis dis parturient montes
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="woocommerce-reviews">
                  <div className="vs-comments-wrap">
                    <ul className="comment-list">
                      <li className="review vs-comment-item">
                        <div className="vs-post-comment">
                          <div className="comment-avater">
                            <img
                              src="assets/img/shop/r-1-1.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="comment-content__header">
                              <div className="review-rating">
                                <div
                                  className="star-rating"
                                  role="img"
                                  aria-label="Rated 5.00 out of 5"
                                >
                                  <span></span>
                                </div>
                              </div>
                              <h4 className="name h4">Crish Thomas</h4>
                            </div>
                            <p className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sit purus vel, of Link viveirra facilisi
                              neque quisque. Phasellus aliquam ut Link id
                              rhogncus. In viverra sed vitae vivamus amet, nuncg
                              vivamus.
                            </p>
                            <span className="commented-on">
                              Published 1 day ago
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="review vs-comment-item">
                        <div className="vs-post-comment">
                          <div className="comment-avater">
                            <img
                              src="assets/img/shop/r-1-2.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="comment-content__header">
                              <div className="review-rating">
                                <div
                                  className="star-rating"
                                  role="img"
                                  aria-label="Rated 5.00 out of 5"
                                >
                                  <span></span>
                                </div>
                              </div>
                              <h4 className="name h4">Crish Thomas</h4>
                            </div>
                            <p className="text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sit purus vel, of Link viveirra facilisi
                              neque quisque. Phasellus aliquam ut Link id
                              rhogncus. In viverra sed vitae vivamus amet, nuncg
                              vivamus.
                            </p>
                            <span className="commented-on">
                              Published 1 day ago
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="vs-comment-form review-form">
                    <div id="respond" className="comment-respond">
                      <div className="form-title">
                        <h3 className="blog-inner-title">Add A Review</h3>
                        <div className="rating-select">
                          <label>Your Rating</label>
                          <p className="stars">
                            <span>
                              <Link className="star-1" to="#">
                                1
                              </Link>
                              <Link className="star-2" to="#">
                                2
                              </Link>
                              <Link className="star-3" to="#">
                                3
                              </Link>
                              <Link className="star-4" to="#">
                                4
                              </Link>
                              <Link className="star-5" to="#">
                                5
                              </Link>
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Complete Name"
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-12 form-group">
                          <textarea
                            className="form-control"
                            placeholder="Review"
                          ></textarea>
                        </div>
                        <div className="col-12 form-group mb-0">
                          <div className="custom-checkbox notice">
                            <input
                              id="wp-comment-cookies-consent"
                              name="wp-comment-cookies-consent"
                              type="checkbox"
                              value="yes"
                            />
                            <label for="wp-comment-cookies-consent">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                          <button className="vs-btn">
                            <span className="vs-btn__bar"></span>Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
