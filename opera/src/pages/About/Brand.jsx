import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  "/assets/img/brand/brand-1-1.png",
  "/assets/img/brand/brand-1-2.png",
  "/assets/img/brand/brand-1-3.png",
  "/assets/img/brand/brand-1-4.png",
  "/assets/img/brand/brand-1-5.png",
  "/assets/img/brand/brand-1-1.png",
];

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Wrapper>
      <div className="brand-style1 space-bottom">
        <div className="container">
          <Slider {...settings}>
            {brands.map((brand, index) => (
              <div key={index} className="brand-item-wrapper">
                <div className="brand-item">
                  <img src={brand} alt={`brand ${index + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .brand-item-wrapper {
    padding: 0 10px; /* horizontal gap of 20px between slides */
  }

  .brand-item img {
    width: 100%;
    display: block;
  }
`;

export default Brand;
