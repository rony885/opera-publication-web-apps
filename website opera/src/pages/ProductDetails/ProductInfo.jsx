import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductArray from "../../../src/DataJS/Products.js";
import categoriesArray from "../../DataJS/categories.js";
import { useCartContext } from "../../context/CartContext.jsx";
import authors from "../../DataJS/authors.js"; 

const ProductInfo = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { cart, wishlist, addToCart, addToWishlist } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    setProductDetails(ProductArray);
  }, []);

  const findProductDetails =
    productDetails &&
    productDetails.find((productItem) => productItem.id === parseInt(id));

  const categoryName = categoriesArray.find(
    (cat) => cat.id === findProductDetails?.categoryId,
  );

  const isInCart = cart.some(
    (item) => item.productId === findProductDetails?.id,
  );

  const isInWishlist = wishlist.some(
    (item) => item.id === findProductDetails?.id,
  );



  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">বইয়ের বিস্তারিত</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/" className="fw-normal">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  বইয়ের বিস্তারিত
                </span>
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
                <h2 className="product-title fs-5 fw-normal">
                  {findProductDetails && findProductDetails.title}
                </h2>
                <span className="product-author">
                  <strong>By:</strong>{" "}
                  <Link
                    to="#"
                    // to={`/author-details/${author.id}`}
                    className="fs-6 fw-normal"
                    style={{ color: "#FF3333" }}
                  >
                    {findProductDetails && findProductDetails.author}
                  </Link>
                </span>
                <p className="product-price fw-normal">
                  ৳{findProductDetails && findProductDetails.price}{" "}
                  <del className="fw-normal">
                    ৳{findProductDetails && findProductDetails.oldPrice}
                  </del>
                </p>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                    style={{ color: "#FF3333" }}
                  >
                    <span></span>
                  </div>
                  <span className="product-rating__total fw-normal">
                    Review ( {findProductDetails && findProductDetails.rating})
                  </span>
                </div>
                <p className="text fw-normal fs-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  purus vel, of Link viveirra facilisi neque quisque. Phasellus
                  aliquam ut id rhoncus. In viverra sed vitae vivamus amet,
                  nuncg vivamus...{" "}
                  <span
                    className="text-danger fw-normal"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      document.getElementById("pills-description-tab")?.click();

                      document
                        .getElementById("pills-tabContent")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See More
                  </span>
                </p>
                <span className="product-instock fw-normal">
                  <p>Availability:</p>
                  <span>
                    <i className="fas fa-check-square"></i>In Stock
                  </span>
                </span>
                <div className="actions">
                  <div className="quantity">
                    <div className="quantity__field quantity-container">
                      <div className="quantity__buttons">
                        <button
                          className="quantity-plus qty-btn"
                          onClick={() => setQuantity(quantity + 1)}
                        >
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
                          // defaultValue="01"
                          title="Qty"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <button
                          className="quantity-minus qty-btn"
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                        >
                          <i className="fal fa-minus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/cart"
                    className="vs-btn fw-normal"
                    onClick={() =>
                      addToCart(
                        findProductDetails.id,
                        1,
                        null,
                        null,
                        findProductDetails,
                      )
                    }
                  >
                    <i className="fa-solid fa-basket-shopping"></i>{" "}
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                  </Link>
                  {/* <Link
                    to="/wishlist"
                    className="icon-btn"
                    onClick={() => addToWishlist(findProductDetails)}
                    onClick={(e) => {
                      e.preventDefault();

                      if (isInWishlist) {
                        alert("Already in Wishlist");
                      } else {
                        addToWishlist(findProductDetails);
                      }
                    }}
                  >
                    <i className="far fa-heart"></i>
                  </Link> */}
                  <button
                    className="icon-btn"
                    onClick={() => {
                      if (isInWishlist) {
                        alert("Already in Wishlist");
                        return;
                      }

                      addToWishlist(findProductDetails);

                      // go to wishlist page after adding
                      Navigate("/wishlist");
                    }}
                  >
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="product_meta">
                  <h4 className="h5 fw-normal">Information:</h4>
                  <span className="sku_wrapper fw-normal">
                    <p className="fw-normal fs-6">SKU:</p>
                    <span className="sku">০৩</span>
                  </span>
                  <span className="posted_in">
                    <p className="fw-normal fs-6">Category:</p>
                    <Link to="#" rel="tag">
                      {/* Thriller */}
                      {/* {findProductDetails && findProductDetails.name} */}
                      {categoryName ? categoryName.name : "N/A"}
                    </Link>
                  </span>
                  <span>
                    <p className="fw-normal fs-6">Tags:</p>
                    <Link to="#" rel="tag" className="fw-normal fs-6">
                      Kids
                    </Link>
                    <Link to="#" rel="tag" className="fw-normal fs-6">
                      Popular
                    </Link>
                    <Link to="#" rel="tag" className="fw-normal fs-6">
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
                    className="nav-link active fw-normal"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw-normal"
                    id="pills-specification-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-specification"
                    type="button"
                    role="tab"
                  >
                    Specification
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link fw-normal"
                    id="pills-review-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-review"
                    type="button"
                    role="tab"
                  >
                    Reviews (03)
                  </button>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-description"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="description fw-normal">
                  <p className="text fs-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    ut ullamcorper leo, eget euismod orci. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum ultricies aliquam. Cum sociis
                    natoque penatibus et magnis dis parturient montes nascetur
                    ridiculus mus sit am.
                  </p>
                  <p className="text fs-5">
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
                  <p className="text fs-5">
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
                id="pills-specification"
                role="tabpanel"
                aria-labelledby="pills-specification-tab"
              >
                <div className="book-specification fw-normal">
                  <table className="spec-table">
                    <tbody>
                      <tr>
                        <td className="label text-start">Title</td>
                        <td className="value">প্রম্পট ইঞ্জিনিয়ারিং</td>
                      </tr>

                      <tr>
                        <td className="label text-start">Author</td>
                        <td className="value">
                          <a href="/book/author/89232">
                            এনামুল হক (প্রযুক্তি বিষয়ক)
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="label text-start">Publisher</td>
                        <td className="value">
                          <a href="/book/publisher/14537">অপেরা পাবলিকেশন</a>
                        </td>
                      </tr>

                      <tr>
                        <td className="label text-start">Edition</td>
                        <td className="value">1st Published, 2025</td>
                      </tr>

                      <tr>
                        <td className="label text-start">Number of Pages</td>
                        <td className="value">304</td>
                      </tr>

                      <tr>
                        <td className="label text-start">Country</td>
                        <td className="value">বাংলাদেশ</td>
                      </tr>

                      <tr>
                        <td className="label text-start">Language</td>
                        <td className="value">বাংলা</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="tab-pane fade fw-normal"
                id="pills-review"
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
                              src="/assets/img/shop/r-1-1.jpg"
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
                              <h4 className="name h4 fw-normal">
                                Crish Thomas
                              </h4>
                            </div>
                            <p className="text fs-5">
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
                              src="/assets/img/shop/r-1-2.jpg"
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
                              <h4 className="name h4 fw-normal">
                                Crish Thomas
                              </h4>
                            </div>
                            <p className="text fs-5">
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
                        <h3 className="blog-inner-title fw-normal">
                          Add A Review
                        </h3>
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
                              defaultValue="yes"
                            />
                            <label htmlFor="wp-comment-cookies-consent">
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .book-specification {
    /* margin-top: 20px; */
  }

  .spec-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
  }

  .spec-table tr {
    border-bottom: 1px solid #eee;
  }

  .spec-table td {
    padding: 12px 16px;
    /* font-size: 15px; */
    font-size: 18px;
    vertical-align: middle;
  }

  /* Left side label */
  .spec-table .label {
    width: 220px;
    color: #ff3333;
    font-weight: 600;
    text-align: right;
    position: relative;
    padding-right: 25px;
  }

  /* Right side value */
  .spec-table .value {
    color: #444;
  }

  .spec-table .value a {
    color: #ff3333;
    text-decoration: none;
    font-weight: 500;
  }

  .spec-table .value a:hover {
    text-decoration: underline;
  }

  .product-about .product-price {
    color: #ff3333 !important;
  }
  .star-rating,
  .star-rating span,
  .star-rating::before,
  .star-rating span::before {
    color: #ff3333 !important;
  }

  .qty-btn {
    background: #ff3333 !important;
  }
  .product-about .actions .icon-btn {
    background-color: #ff3333 !important;
  }
  .product-description__tab .nav .nav-link.active {
    color: #ff3333 !important;
  }
`;

export default ProductInfo;
