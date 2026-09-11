import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";
import convertBanglaPercentage from "../../components/banglaConvert/convertBanglaPercentage.jsx";

import authorArray from "../../DataJS/authors.js";
import ProductArray from "../../../src/DataJS/Products.js";
import { useCartContext } from "../../context/CartContext.jsx";

const AuthorDetails = () => {
  const {
    cart,
    addToCart,
    removeCart,
    addToWishlist,
    removeWishlist,
    wishlist,
  } = useCartContext();

  const [products, setProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setProducts(ProductArray);
    setAuthors(authorArray);
  }, []);

  const findAuthDetails = authors.find((auth) => auth.id === parseInt(id));

  const authorBooks = products.filter(
    (book) => book.authorId === findAuthDetails?.id,
  );

  // =======
  // const findAuthDetails = authors.find((auth) => auth.id === Number(id));

  // const sameAuthorIds = authors
  //   .filter((author) => author.name === findAuthDetails?.name)
  //   .map((author) => author.id);

  // const authorBooks = products.filter((book) =>
  //   sameAuthorIds.includes(book.authorId),
  // );

  // =======
  // const findAuthDetails = authors.find((auth) => auth.id === Number(id));

  // const authorBooks = products.filter(
  //   (book) => book.authorKey === findAuthDetails?.authorKey,
  // );

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
            <h1 className="breadcumb-title fs-4 fw-normal">লেখকের বিস্তারিত</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  লেখকের বিস্তারিত
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="author-details space author-details-page">
        <div className="container space-bottom position-relative">
          <div className="row align-items-center gx-60 g-4">
            <div className="col-xl-5 col-lg-6">
              <div className="author-img">
                <img
                  src={findAuthDetails && findAuthDetails.img}
                  alt="author imagee"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="author-content">
                <h2 className="author-title fw-normal">
                  {findAuthDetails && findAuthDetails.name}
                </h2>
                <p
                  className="text text-justify fw-normal fs-5"
                  style={{ textAlign: "justify", fontFamily: "Chayalipi" }}
                >
                  {findAuthDetails && findAuthDetails.description[0]}
                </p>
                {/* <p className="text">
                  {findAuthDetails && findAuthDetails.description[1]}
                </p> */}

                <div className="author-social">
                  <h3 className="social-title fw-normal">
                    সামাজিক যোগাযোগ মাধ্যম
                  </h3>
                  <ul className="social-links">
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="border-line"></span>
        </div>
      </section>

      <section className="romance-layout1">
        <div className="container space-bottom position-relative">
          <div className="title-area2 animation-style1 title-anime">
            {/* <h2 className="sec-title title-anime__title fw-normal">
              Books By Rodja heartmann
              এনামুল হক রচিত বইসমূহ
              {findAuthDetails && findAuthDetails.name} রচিত বইসমূহ
            </h2> */}
            <h2 className="sec-title title-anime__title fw-normal">
              {/^[A-Za-z]/.test(findAuthDetails?.englishName || "")
                ? findAuthDetails?.name
                : findAuthDetails?.name}{" "}
              রচিত বইসমূহ
            </h2>
            <Link
              className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
              data-wow-delay="0.70s"
              to="/book"
            >
              আরও দেখুন
            </Link>
          </div>
          <div className="row g-4">
            {authorBooks.length > 0 ? (
              authorBooks.map((book) => {
                const author = authors.find((a) => a.id === book.authorId);

                const isEnglishBook = /^[A-Za-z0-9\s.,'":()&-]+$/.test(
                  book.title,
                );

                const authorName = isEnglishBook
                  ? author?.englishName
                  : author?.name;

                const isWishlisted = wishlist.some(
                  (item) => item.id === book.id,
                );

                const isInCart = cart.some(
                  (item) => item.productId === book.id,
                );

                return (
                  <div key={book.id} className="col-xl-2 col-md-4 col-sm-6">
                    <div
                      className="product-style1 wow animate__fadeInUp"
                      data-wow-delay="0.30s"
                    >
                      <div className="product-img">
                        <img
                          src={book.img}
                          alt="product imagee"
                          style={{
                            height: "300px",
                          }}
                        />
                        <div className="product-btns">
                          <Link
                            className="icon-btn wishlist"
                            data-tooltip-id="wishlist-tooltip"
                            data-tooltip-content={
                              isWishlisted
                                ? "Already in Wishlist"
                                : "Add to Wishlist"
                            }
                            onClick={(e) => {
                              e.preventDefault();

                              if (isWishlisted) {
                                removeWishlist(book.id);
                              } else {
                                addToWishlist(book);
                              }
                            }}
                          >
                            <i
                              className={
                                isWishlisted ? "fas fa-heart" : "far fa-heart"
                              }
                              style={{ color: isWishlisted ? "#CC0033" : "" }}
                            />
                          </Link>
                          <Tooltip
                            id="wishlist-tooltip"
                            place="left"
                            offset={1}
                            className="wishlist-tooltip"
                          />

                          <Link
                            className="icon-btn cart"
                            data-tooltip-id="cart-tooltip"
                            data-tooltip-content={
                              isInCart ? "Already in Cart" : "Add to Cart"
                            }
                            onClick={(e) => {
                              e.preventDefault();

                              if (isInCart) {
                                const cartItem = cart.find(
                                  (item) => item.productId === book.id,
                                );

                                if (cartItem) {
                                  removeCart(cartItem.id);
                                }
                              } else {
                                addToCart(book.id, 1, null, null, book);
                              }
                            }}
                          >
                            <i
                              className="fa-solid fa-basket-shopping"
                              style={{
                                color: isInCart ? "#CC0033" : "",
                              }}
                            ></i>
                          </Link>
                          <Tooltip
                            id="cart-tooltip"
                            place="left"
                            offset={1}
                            className="wishlist-tooltip"
                          />
                        </div>

                        <ul className="post-box">
                          {book.badge.map((tag, idx) => (
                            <li
                              key={idx}
                              className={tag === "Hot" ? "hot-badge" : ""}
                            >
                              {tag === "Hot"
                                ? "হট"
                                : convertBanglaPercentage(tag)}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="product-content">
                        <div className="product-rating">
                          <span className="star fw-normal">
                            <i className="fas fa-star"></i> ({book.rating})
                          </span>
                          <ul className="price-list">
                            <li>
                              <del
                                className="fw-normal"
                                style={{ fontSize: "18px" }}
                              >
                                ৳{convertToBanglaNumber(book.oldPrice)}
                              </del>
                            </li>
                            <li
                              className="fw-normal"
                              style={{ fontSize: "18px" }}
                            >
                              ৳{convertToBanglaNumber(book.price)}
                            </li>
                          </ul>
                        </div>

                        {/* <span
                        className="stock-badge fw-normal"
                        style={{
                          color: book.inStock ? "#28a745" : "#FF3333",
                          fontWeight: "600",
                          fontSize: "14px",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: book.inStock
                            ? "rgba(40,167,69,0.1)"
                            : "rgba(220,53,69,0.1)",
                        }}
                      >
                        {book.inStock ? "In Stock" : "Out of Stock"}
                      </span> */}

                        <h2 className="product-title fw-normal fs-5 mt-2 text-center mb-1">
                          <Link to="/book">{book.title}</Link>
                        </h2>
                        <span className="product-author fw-normal fs-6 text-center">
                          {/* <strong>By:</strong> {book.author} */}
                          {/* {findAuthDetails?.name} */}
                          {authorName}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <h4 className="fw-normal py-5 text-danger">
                  এই লেখকের কোনো বই পাওয়া যায়নি
                </h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-title a:hover {
    color: #ff3333 !important;
  }
  .price-list li {
    color: #ff3333 !important;
  }
  .product-rating .star i {
    color: #ff3333 !important;
  }
  .post-box li.hot-badge {
    background-color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn:hover {
    color: var(--white-color);
    background-color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn {
    color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn:hover {
    color: #ffffff !important;
  }

  .wishlist-tooltip,
  .cart-tooltip {
    padding: 0px -30px !important;
    font-size: 12px !important;
    border-radius: 3px !important;
    line-height: 1 !important;
    z-index: 9999 !important;
  }
`;

export default AuthorDetails;
