import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";
import AuthorsArray from "../../../src/DataJS/authors.js";
import ProductArray from "../../../src/DataJS/Products.js";
import { useCartContext } from "../../context/CartContext.jsx";

const RomanceProduct = () => {
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

  const allBestSellingBook =
    products && products.filter((prod) => prod.isBestSellingBook === true);

  const getAuthorName = (book) => {
    const author = authors.find((item) => item.id === book.authorId);

    return /^[A-Za-z0-9\s.,'"():&-]+$/.test(book.title)
      ? author?.englishName
      : author?.name;
  };

  return (
    <Wrapper>
      <section className="romance-layout1">
        <div className="container space-bottom position-relative">
          <div className="title-area2 animation-style1 title-anime">
            <h2 className="sec-title title-anime__title fw-normal fs-1">
              {/* Best Selling Romance Books */}
              {/* সর্বাধিক বিক্রিত বই */}
              বেস্ট সেলার বই
            </h2>
            <Link
              className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
              data-wow-delay="0.70s"
              to="/book"
            >
              {/* View More */}
              আরও দেখুন
            </Link>
          </div>
          <div className="row g-4">
            {allBestSellingBook &&
              allBestSellingBook.map((book, index) => {
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
                      data-wow-delay={`${0.3 + index * 0.1}s`}
                    >
                      <div className="product-img">
                        <img
                          src={book.img}
                          alt={book.title}
                          style={{ height: "310px" }}
                        />

                        <div className="product-btns">
                          {/* <Link
                            to="/wishlist"
                            className="icon-btn wishlist"
                            onClick={() => addToWishlist(book)}
                          >
                            <i className="far fa-heart"></i>
                          </Link> */}
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

                          {/* <Link
                            to="/cart"
                            className="icon-btn cart"
                            onClick={() =>
                              addToCart(book.id, 1, null, null, book)
                            }
                          >
                            <i className="fa-solid fa-basket-shopping"></i>
                          </Link> */}
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
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="product-content">
                        <div className="product-rating">
                          <span className="star">
                            <i className="fas fa-star"></i> ({book.rating})
                          </span>

                          <ul className="price-list fw-normal">
                            <li>
                              <del>৳{convertToBanglaNumber(book.oldPrice)}</del>
                            </li>
                            <li>
                              <span className="fw-normal">৳</span>
                              {convertToBanglaNumber(book.price)}
                            </li>
                          </ul>
                        </div>

                        <h2 className="product-title fw-normal mt-2 text-center">
                          <Link className="fw-normal" to="/book">
                            {book.title}
                          </Link>
                        </h2>

                        <span className="product-author fw-normal text-center">
                          {/* <strong>By:</strong> {product.author} */}
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
          </div>
          <span className="border-line"></span>
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

export default RomanceProduct;
