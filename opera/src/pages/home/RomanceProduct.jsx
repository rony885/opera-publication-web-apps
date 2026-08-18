import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const romanceProducts = [
  {
    id: 1,
    title: "Rivetmane 10An",
    author: "Fahim Al Bashar",
    img: "/assets/img/product/product-img-3-1.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
  {
    id: 2,
    title: "Love Nature",
    author: "H Abdul",
    img: "/assets/img/product/product-img-3-2.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
  {
    id: 3,
    title: "Love Story",
    author: "D Bellingham",
    img: "/assets/img/product/product-img-3-3.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
  {
    id: 4,
    title: "Stotc Stoite Ust...",
    author: "Alex Jhon",
    img: "/assets/img/product/product-img-3-4.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
  {
    id: 5,
    title: "Cook Design Psvter",
    author: "Nicola Joi",
    img: "/assets/img/product/product-img-3-5.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
  {
    id: 6,
    title: "Cover Design",
    author: "Fahim Al Bashar",
    img: "/assets/img/product/product-img-3-6.jpg",
    rating: 4.5,
    oldPrice: 39.99,
    newPrice: 30.0,
    tag: ["Hot", "-30%"],
  },
];

const RomanceProduct = () => {
  return (
    <Wrapper>
      <section className="romance-layout1">
        <div className="container space-bottom position-relative">
          <div className="title-area2 animation-style1 title-anime">
            <h2 className="sec-title title-anime__title fw-normal fs-1">
              {/* Best Selling Romance Books */}
          সর্বাধিক বিক্রিত বই
            </h2>
            <Link
              className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
              data-wow-delay="0.70s"
              to="/shop"
            >
              {/* View More */}
              আরও দেখুন
            </Link>
          </div>
          <div className="row g-4">
            {/* <div className="col-xl-2 col-md-4 col-sm-6">
            <div
              className="product-style1 wow animate__fadeInUp"
              data-wow-delay="0.30s"
            >
              <div className="product-img">
                <img
                  src="assets/img/product/product-img-3-1.jpg"
                  alt="product imagee"
                />
                <div className="product-btns">
                  <Link to="/wishlist" className="icon-btn wishlist">
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
                      <del>৳39.99</del>
                    </li>
                    <li>৳30.00</li>
                  </ul>
                </div>
                <span className="product-author">
                  <strong>By:</strong> Fahim Al Bashar
                </span>
                <h2 className="product-title">
                  <Link to="/shop">Rivetmane 10An</Link>
                </h2>
              </div>
            </div>
          </div> */}
            {romanceProducts.map((product, index) => (
              <div key={product.id} className="col-xl-2 col-md-4 col-sm-6">
                <div
                  className="product-style1 wow animate__fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                >
                  <div className="product-img">
                    <img src={product.img} alt={product.title} />

                    <div className="product-btns">
                      <Link to="/wishlist" className="icon-btn wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                      <Link to="/cart" className="icon-btn cart">
                        <i className="fa-solid fa-basket-shopping"></i>
                      </Link>
                    </div>

                    {/* <ul className="post-box">
                      {product.tag.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul> */}
                    <ul className="post-box">
                      {product.tag.map((tag, idx) => (
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
                        <i className="fas fa-star"></i> ({product.rating})
                      </span>

                      <ul className="price-list fw-normal">
                        <li>
                          <del>৳{product.oldPrice}</del>
                        </li>
                        <li>৳{product.newPrice}</li>
                      </ul>
                    </div>

                    <h2 className="product-title fw-normal mt-2">
                      <Link className="fw-normal" to="/shop">
                        {product.title}
                      </Link>
                    </h2>

                    <span className="product-author fw-normal">
                      <strong>By:</strong> {product.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
`;

export default RomanceProduct;
