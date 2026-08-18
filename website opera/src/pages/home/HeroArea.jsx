import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroData = [
  {
    id: 1,
    title: "The Most Biggest Bookstore in the world",
    highlight: "Bookstore",
    desc: "We deliver books all over the world 10,000+ books in stock.",
    img: "/assets/img/hero/hero-img-1-1.png",
  },
  {
    id: 2,
    title: "Best Online Book Collection Platform",
    highlight: "Books",
    desc: "Find your favorite books at the best price with fast delivery.",
    img: "/assets/img/hero/hero-img-1-1.png",
  },
];

const HeroArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <Wrapper>
      <section className="hero-layout1" aria-hidden="true">
        <Slider {...settings}>
          {heroData.map((item, index) => (
            <div key={item.id}>
              <div
                className="hero-item"
                style={{
                  backgroundImage: "url(/assets/img/bg/hero-bg1.jpg)",
                }}
              >
                <div className="container position-relative z-index">
                  <div className="row g-5 align-items-center">
                    <div className="col-lg-6 position-relative">
                      <div className="hero-content">
                        {/* <h1 className="hero-title wow animate__fadeInUp">
                          {item.title.split(item.highlight)[0]}
                          <span className="title-highlight">
                            {item.highlight}
                          </span>
                          {item.title.split(item.highlight)[1]}
                        </h1> */}
                        <h1 className="hero-title wow animate__fadeInUp">
                          {item.title}
                        </h1>

                        <p className="hero-text wow animate__fadeInUp">
                          {item.desc}
                        </p>

                        <Link
                          className="vs-btn wow animate__flipInX fw-normal py-3"
                          to="/shop"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="hero-img">
                        <img
                          src={item.img}
                          alt="hero"
                          // style={{ height: "400px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Shapes (static outside slider) */}
        <span
          className="shape-mockup element1 z-index1 d-xxl-block d-none"
          style={{ right: "0px", top: "-10px" }}
        >
          <img src="/assets/img/shapes/hero-shape2.svg" alt="shape" />
        </span>

        <span
          className="shape-mockup element2 z-index1 d-xxl-block d-none"
          style={{ left: "0px", bottom: "-10px" }}
        >
          <img src="/assets/img/shapes/hero-shape3.svg" alt="shape" />
        </span>

        <span
          className="shape-mockup z-index1 d-xxl-block d-none"
          style={{ left: "0px", top: "0px" }}
        >
          <img src="/assets/img/shapes/hero-shape1.svg" alt="shape" />
        </span>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero-item {
    position: relative;
    /* padding: 170px 0 148px; */
    padding: 110px 0 110px !important;
  }

  @media (max-width: 575px) {
    .hero-layout1 .hero-content {
      /* padding: 40px 0px 50px 30px; */
      padding: 0px !important;
    }
  }
`;

export default HeroArea;
