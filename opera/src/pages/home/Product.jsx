import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import convertBanglaPercentage from "../../components/banglaConvert/convertBanglaPercentage.jsx";
import ProductArray from "../../../src/DataJS/Products.js";
import { useCartContext } from "../../context/CartContext.jsx";
// import categoriesArray from "../../DataJS/categories.js";

const Product = () => {
  const { addToCart, addToWishlist } = useCartContext();
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(ProductArray);
    // setCategories(categoriesArray);
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default for large screens
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
            <h2 className="sec-title fw-normal fs-1">মাসের সেরা বই</h2>
          </div>

          <Slider ref={sliderRef} {...settings} className="book-carousel mt-4">
            {products &&
              products.map((book) => (
                <div key={book.id} className="px-2">
                  <div className="product-style1">
                    <div className="product-img position-relative">
                      <img
                        src={book.img}
                        alt={book.title}
                        className="img-fluid"
                        style={{
                          height: "400px",
                        }}
                      />
                      <div className="product-btns">
                        <Link
                          to="/wishlist"
                          className="icon-btn wishlist"
                          onClick={() => addToWishlist(book)}
                        >
                          <i className="far fa-heart"></i>
                        </Link>

                        <Link
                          to="/cart"
                          className="icon-btn cart"
                          onClick={() =>
                            addToCart(book.id, 1, null, null, book)
                          }
                        >
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>

                      {/* <ul className="post-box">
                        {book.badge.map((tag, idx) => (
                          <li
                            key={idx}
                            className={tag === "Hot" ? "hot-badge" : ""}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul> */}
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
                          {/* <i className="fas fa-star"></i> ({book.rating}) */}
                          <i className="fas fa-star"></i> (
                          {book.rating.toLocaleString("bn-BD")})
                        </span>
                        <ul className="price-list">
                          <li>
                            <del
                              className="fw-normal"
                              style={{ fontSize: "18px" }}
                            >
                              ৳{book.oldPrice}
                            </del>
                          </li>
                          <li
                            className="fw-normal"
                            style={{ fontSize: "18px" }}
                          >
                            ৳{book.price}
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
                      <h2 className="product-title fs-5 fw-normal mt-2">
                        <Link to="/shop">{book.title}</Link>
                      </h2>{" "}
                      <span className="product-author d-block fs-6 mb-1">
                        <strong>By:</strong> {book.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
`;

export default Product;
