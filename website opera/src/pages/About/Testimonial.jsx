import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Rodja Hartmann",
    designation: "Designer, Vecurosoft",
    img: "/assets/img/testimonial/testi-2-1.jpg",
    rating: 4,
    text: "TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency.",
  },
  {
    id: 2,
    name: "Laura McAlister",
    designation: "Designer, Vecurosoft",
    img: "/assets/img/testimonial/testi-2-2.jpg",
    rating: 4,
    text: "TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency.",
  },
  {
    id: 3,
    name: "Rivanur R. Rafi",
    designation: "Designer, Vecurosoft",
    img: "/assets/img/testimonial/testi-2-3.jpg",
    rating: 4,
    text: "TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency.",
  },
  {
    id: 4,
    name: "Laura McAlister",
    designation: "Designer, Vecurosoft",
    img: "/assets/img/testimonial/testi-2-2.jpg",
    rating: 4,
    text: "TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={i <= rating ? "fa-solid fa-star" : "fa-regular fa-star"}
        ></i>,
      );
    }
    return stars;
  };

  return (
    // <section className="vs-testi__layout3 space-top">
    <section class="vs-testi__layout1 space">
      <div className="container">
        <div className="title-area2 text-center mb-4">
          <h2 className="sec-title fw-normal">পাঠকের চিরকুট</h2>
          <Link className="vs-btn fw-normal py-2 fs-5" to="#">
          আরও দেখুন
          </Link>
        </div>

        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-3">
              <div className="vs-testi__style2">
                <div className="vs-testi__top d-flex align-items-center mb-3">
                  <div className="vs-testi__image me-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="vs-testi__author">
                    <div className="star-rating mb-1">
                      {renderStars(item.rating)}
                    </div>
                    <h3 className="vs-testi__title fw-normal">{item.name}</h3>
                    <span className="vs-testi__desi fw-normal">
                      {item.designation}
                    </span>
                  </div>
                </div>
                <div className="vs-testi__content position-relative">
                  <p className="vs-testi__text fw-normal">{item.text}</p>
                  <span className="quote-icon">
                    <img src="/assets/img/icons/quote-icon.svg" alt="icon" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
