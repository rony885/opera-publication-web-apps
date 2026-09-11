import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import ProductArray from "../../DataJS/Products.js";
// import categoriesArray from "../../DataJS/categories.js";
import AuthorsArray from "../../DataJS/authors.js";
import { useCartContext } from "../../context/CartContext.jsx";
import convertBanglaPercentage from "../../components/banglaConvert/convertBanglaPercentage.jsx";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";

// const products = [
//   {
//     id: 1,
//     img: "/assets/img/product/product-img-5-1.jpg",
//     author: "Fahim Al Bashar",
//     title: "The Muke Guy",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 2,
//     img: "/assets/img/product/product-img-5-2.jpg",
//     author: "H Abdul",
//     title: "Levtimeline",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 3,
//     img: "/assets/img/product/product-img-5-3.jpg",
//     author: "D Bellingham",
//     title: "Mick Weive Mockchapu",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 4,
//     img: "/assets/img/product/product-img-5-4.jpg",
//     author: "Alex Jhon",
//     title: "Fuarcnusk Preentine",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 5,
//     img: "/assets/img/product/product-img-5-5.jpg",
//     author: "Nicola joi",
//     title: "L Art Du Subtiliste",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 6,
//     img: "/assets/img/product/product-img-5-6.jpg",
//     author: "Fahim Al Bashar",
//     title: "Vqirk Teur Mocgkcup",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 7,
//     img: "/assets/img/product/product-img-5-7.jpg",
//     author: "Nicola joi",
//     title: "Hd Pry Balir Ptonnrnle",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
//   {
//     id: 8,
//     img: "/assets/img/product/product-img-5-8.jpg",
//     author: "Fahim Al Bashar",
//     title: "Beuto minimal Cork",
//     oldPrice: "$39.99",
//     newPrice: "$30.00",
//     rating: 4.5,
//     badge: ["Hot", "-২৫%"],
//   },
// ];

const NewArrivalProduct = () => {
  const {
    cart,
    addToCart,
    removeCart,
    addToWishlist,
    removeWishlist,
    wishlist,
  } = useCartContext();

  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [authors, setAuthors] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   setProducts(ProductArray);
  //   setAuthors(AuthorsArray);
  //   setCategories(categoriesArray);
  // }, []);
  useEffect(() => {
    const newBooks = ProductArray.filter((book) => book.isNewBook === true);

    setProducts(newBooks);
    setAuthors(AuthorsArray);
  }, []);

  const getAuthorName = (book) => {
    const author = authors.find((item) => item.id === book.authorId);

    return /^[A-Za-z0-9\s.,'"():&-]+$/.test(book.title)
      ? author?.englishName
      : author?.name;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // IMPORTANT: hide default arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Wrapper>
      <section className="books-layout1 style2 space-bottom">
        <div className="container">
          <div className="title-area2 animation-style1 title-anime">
            {/* <h2 className="sec-title title-anime__title">Book Of The Month</h2> */}
            <h2 className="sec-title title-anime__title fw-normal">নতুন বই</h2>

            <div className="arraw-area">
              <div className="d-flex justify-content-center align-items-center gap-2">
                <button
                  className="icon-btn border-none"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  className="icon-btn"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <Slider
            ref={sliderRef}
            className="vs-carousel g-4 book-carousel"
            {...settings}
          >
            {products &&
              products.map((book, index) => {
                const isWishlisted = wishlist.some(
                  (item) => item.id === book.id,
                );

                const isInCart = cart.some(
                  (item) => item.productId === book.id,
                );

                return (
                  <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                    <div
                      className="product-style1 wow animate__fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.1}s`}
                    >
                      <div className="product-img">
                        <img
                          src={book.img}
                          alt="product"
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

                      <div className="product-content">
                        <div className="product-rating">
                          <span className="star" style={{ fontSize: "16px" }}>
                            <i className="fas fa-star"></i> ({book.rating})
                          </span>
                          <ul className="price-list fw-normal">
                            <li>
                              <del style={{ fontSize: "18px" }}>
                                ৳{convertToBanglaNumber(book.oldPrice)}
                              </del>
                            </li>
                            <li className="">
                              <span className="fw-normal">৳</span>
                              {convertToBanglaNumber(book.price)}
                            </li>
                          </ul>
                        </div>

                        <span className="product-author text-center">
                          {getAuthorName(book)}
                        </span>

                        <h2 className="product-title fw-normal text-center">
                          <Link to="/book">{book.title}</Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .book-carousel .slick-slide {
    padding: 0 15px; /* 🔥 GAP BETWEEN SLIDES */
  }

  .slick-list {
    margin: 0 -15px; /* 🔥 FIX ALIGNMENT */
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
  }

  .title-shep:before {
    background-color: #ff3333 !important;
  }
  .title-shep:after {
    background-color: #ff3333 !important;
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

export default NewArrivalProduct;
