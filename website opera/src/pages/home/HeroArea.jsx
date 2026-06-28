import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const heroSliderData = [
  {
    id: 1,
    title: "Jangle Jost Bolle",
    price: "৮৫.00",
    desc: "We deliver books all over the world 10,000+ books in stock",
    img: "/assets/img/hero/hero-img-2-1.png",
  },
  {
    id: 2,
    title: "Rat Phnory Mttke",
    price: "৮৫.00",
    desc: "We deliver books all over the world 10,000+ books in stock",
    img: "/assets/img/hero/hero-img-2-2.png",
  },
];

const HeroArea = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false, // 🔥 NO ARROWS
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: () => {
      document.activeElement?.blur();
    },

    afterChange: () => {
      document.activeElement?.blur();
    },
  };

  return (
    <Wrapper>
      <section className="hero-layout3">
        <div className="container">
          <Slider {...settings}>
            {heroSliderData.map((item) => (
              <div key={item.id} className="hero-item">
                <div className="row g-5 gx-50 align-items-center justify-content-center">
                  {/* TEXT */}
                  <div className="col-lg-6 col-md-12 text-center text-lg-start">
                    <div className="hero-content">
                      <h1 className="hero-title fw-normal">{item.title}</h1>

                      <p className="offer-price fw-normal">
                        Only <span>৳{item.price}</span>
                      </p>

                      <p className="hero-text fw-normal">{item.desc}</p>

                      <Link className="vs-btn fw-normal" to="/shop">
                        Shop Now
                      </Link>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                    <div className="hero-img">
                      <img src={item.img} alt="hero" className="img-fluid" />
                    </div>
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
  @media (max-width: 1399px) {
    .hero-layout3 .hero-item {
      /* left: -360px; */
      left: 0px !important;
    }
  }
`;

export default HeroArea;
