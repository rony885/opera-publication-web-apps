import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    img: "/assets/img/product/product-img-5-1.jpg",
    author: "Fahim Al Bashar",
    title: "The Muke Guy",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 2,
    img: "/assets/img/product/product-img-5-2.jpg",
    author: "H Abdul",
    title: "Levtimeline",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 3,
    img: "/assets/img/product/product-img-5-3.jpg",
    author: "D Bellingham",
    title: "Mick Weive Mockchapu",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 4,
    img: "/assets/img/product/product-img-5-4.jpg",
    author: "Alex Jhon",
    title: "Fuarcnusk Preentine",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 5,
    img: "/assets/img/product/product-img-5-5.jpg",
    author: "Nicola joi",
    title: "L Art Du Subtiliste",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 6,
    img: "/assets/img/product/product-img-5-6.jpg",
    author: "Fahim Al Bashar",
    title: "Vqirk Teur Mocgkcup",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 7,
    img: "/assets/img/product/product-img-5-7.jpg",
    author: "Nicola joi",
    title: "Hd Pry Balir Ptonnrnle",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
  {
    id: 8,
    img: "/assets/img/product/product-img-5-8.jpg",
    author: "Fahim Al Bashar",
    title: "Beuto minimal Cork",
    oldPrice: "$39.99",
    newPrice: "$30.00",
    rating: 4.5,
  },
];

const ProductMonth = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
            <h2 className="sec-title title-anime__title">Book Of The Month</h2>

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
            {products.map((product, index) => (
              <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                <div
                  className="product-style1 wow animate__fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.1}s`}
                >
                  <div className="product-img">
                    <img src={product.img} alt="product" />
                    <div className="product-btns">
                      <Link to="#!" className="icon-btn wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                      <Link to="#!" className="icon-btn cart">
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
                        <i className="fas fa-star"></i> ({product.rating})
                      </span>
                      <ul className="price-list">
                        <li>
                          <del>{product.oldPrice}</del>
                        </li>
                        <li>{product.newPrice}</li>
                      </ul>
                    </div>

                    <span className="product-author">
                      <strong>By:</strong> {product.author}
                    </span>

                    <h2 className="product-title">
                      <Link to="/shop">{product.title}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
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
`;

export default ProductMonth;
