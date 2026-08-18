import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import authorArray from "../../DataJS/authors.js";

const booksData = [
  {
    id: 1,
    title: "Rivetmane 10An",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-1.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: true,
  },
  {
    id: 2,
    title: "Love Nature",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-2.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: false,
  },
  {
    id: 3,
    title: "Love Story",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-3.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: true,
  },
  {
    id: 4,
    title: "Stotc Stoite Ust...",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-4.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: false,
  },
  {
    id: 5,
    title: "Cook Design Psvter",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-5.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: true,
  },
  {
    id: 6,
    title: "Cover Design",
    author: "Rodja Heartmann",
    img: "/assets/img/product/product-img-3-6.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    price: 30.0,
    tag: ["Hot", "-30%"],
    inStock: false,
  },
];

const AuthorDetails = () => {
  const [authors, setAuthors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setAuthors(authorArray);
  }, []);

  const findAuthDetails = authors.find((auth) => auth.id === parseInt(id));

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

      <section className="author-details space">
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
                  style={{ textAlign: "justify" }}
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
                      <Link to="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <i className="fab fa-dribbble"></i>
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
            <h2 className="sec-title title-anime__title fw-normal">
              {/* Books By Rodja heartmann */}
              এনামুল হক রচিত বইসমূহ
            </h2>
            <Link
              className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
              data-wow-delay="0.70s"
              to="/shop"
            >
              আরও দেখুন
            </Link>
          </div>
          <div className="row g-4">
            {booksData.map((book) => {
              return (
                <div key={book.id} className="col-xl-2 col-md-4 col-sm-6">
                  <div
                    className="product-style1 wow animate__fadeInUp"
                    data-wow-delay="0.30s"
                  >
                    <div className="product-img">
                      <img src={book.img} alt="product imagee" />
                      <div className="product-btns">
                        <Link to="wishlist" className="icon-btn wishlist">
                          <i className="far fa-heart"></i>
                        </Link>
                        <Link to="cart" className="icon-btn cart">
                          <i className="fa-solid fa-basket-shopping"></i>
                        </Link>
                      </div>
                      {/* <ul className="post-box">
                        <li>Hot</li>
                        <li>-30%</li>
                      </ul> */}
                      <ul className="post-box">
                        {book.tag.map((tg, idx) => (
                          <li
                            key={idx}
                            className={tg === "Hot" ? "hot-badge" : ""}
                          >
                            {tg}
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
                            <del className="fw-normal">৳{book.oldPrice}</del>
                          </li>
                          <li className="fw-normal">৳{book.price}</li>
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

                      <h2 className="product-title fw-normal mt-2">
                        <Link to="/shop">{book.title}</Link>
                      </h2>
                      <span className="product-author fw-normal">
                        <strong>By:</strong> {book.author}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
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
`;

export default AuthorDetails;
