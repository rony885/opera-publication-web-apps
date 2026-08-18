import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import convertBanglaPercentage from "../../components/banglaConvert/convertBanglaPercentage.jsx";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";
import { useCartContext } from "../../context/CartContext.jsx";
import ProductArray from "../../../src/DataJS/Products.js";
// import categoriesArray from "../../DataJS/categories.js";
import AuthorsArray from "../../../src/DataJS/authors.js";

const UpComingProduct = () => {
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
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(ProductArray);
    setAuthors(AuthorsArray);
    // setCategories(categoriesArray);
  }, []);

  const allUpcomingBook =
    products && products.filter((prod) => prod.isUpcomingBook === true);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // we'll use custom arrows below
    responsive: [
      {
        breakpoint: 1200, // large tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Custom arrows
  const sliderRef = React.useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const getAuthorName = (book) => {
    const author = authors.find((item) => item.id === book.authorId);

    return /^[A-Za-z0-9\s.,'"():&-]+$/.test(book.title)
      ? author?.englishName
      : author?.name;
  };

  return (
    <Wrapper>
      <section
        className="books-layout1 space"
        style={{
          backgroundImage: `url("/assets/img/bg/section-bg2.jpg")`,
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            {/* <h2 className="sec-title fw-normal">Book Of The Month</h2> */}
            {/* <h2 className="sec-title fw-normal fs-1">মাসের সেরা বই</h2> */}
            <h2 className="sec-title fw-normal fs-1">আপকামিং বই</h2>
          </div>

          <Slider ref={sliderRef} {...settings} className="book-carousel mt-4">
            {allUpcomingBook &&
              allUpcomingBook.map((book) => {
                const isWishlisted = wishlist.some(
                  (item) => item.id === book.id,
                );

                const isInCart = cart.some(
                  (item) => item.productId === book.id,
                );

                return (
                  <div key={book.id} className="px-2">
                    <div className="product-style1">
                      <div className="product-img position-relative">
                        <img
                          src={book.img}
                          alt={book.title}
                          className="img-fluid"
                          style={{
                            height: "310px",
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
                      <div className="product-content mt-3 ">
                        <div className="product-rating mb-1">
                          <span className="star" style={{ fontSize: "16px" }}>
                            <i className="fas fa-star"></i> ({book.rating})
                          </span>
                          <ul className="price-list">
                            <li>
                              <del style={{ fontSize: "18px" }}>
                                ৳{convertToBanglaNumber(book.oldPrice)}
                              </del>
                            </li>
                            <li style={{ fontSize: "18px" }}>
                              <span className="fw-normal">৳</span>
                              {convertToBanglaNumber(book.price)}
                            </li>
                          </ul>
                        </div>
                        {/* <span
                        className="stock-badge"
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
                        <h2 className="product-title fs-5 fw-normal mt-2 text-center">
                          <Link to="/book">{book.title}</Link>
                        </h2>{" "}
                        <span className="product-author d-block fs-6 mb-1 text-center">
                          {/* <strong>By:</strong> {book.author} */}
                          {/* {book.author} */}
                          {/* {
                            AuthorsArray.find(
                              (author) => author.id === book.authorId,
                            )?.name
                          } */}
                          {getAuthorName(book)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>

          {/* Custom arrows */}
          <div className="arraw-area mt-4 d-flex justify-content-center gap-2">
            <button
              className="icon-btn border-none"
              onClick={prev}
              // style={{ backgroundColor: "#FF3333" }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="icon-btn"
              onClick={next}
              // style={{ backgroundColor: "#FF3333" }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Arrow button default */
  .arraw-area .icon-btn {
    background-color: #ff3333 !important;
    color: #ffffff !important;
    border: 1px solid #ff3333;
  }

  /* Icon color */
  .arraw-area .icon-btn i {
    color: #ffffff !important;
  }

  /* Hover state */
  .arraw-area .icon-btn:hover {
    background-color: #ffffff !important;
    color: #ff3333 !important;
    border: 1px solid #ff3333;
  }

  /* Hover icon color */
  .arraw-area .icon-btn:hover i {
    color: #ff3333 !important;
  }

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
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
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

export default UpComingProduct;
