import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blogArray from "../../../src/DataJS/blog.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogArray);
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          arrows: false,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <section className="space">
        <div className="container">
          <div className="title-area2 text-center mb-4">
            {/* <h2 className="sec-title fw-normal">Blog And News</h2> */}
            <h2 className="sec-title fw-normal fs-1">ব্লগ ও নিউজ</h2>
            <Link className="vs-btn fw-normal py-2 fs-5" to="/blog">
              {/* View More */}
              আরও দেখুন
            </Link>
          </div>

          <Slider {...settings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="px-3">
                <div className="vs-blog blog-style1">
                  <div className="blog-img position-relative">
                    <Link to={`/blog-details/${blog.id}`}>
                      <img
                        className="blog-img__img img-fluid"
                        src={blog.img}
                        alt={blog.title}
                      />
                    </Link>
                    <div
                      className="blog-date position-absolute"
                      style={{ fontSize: "12px" }}
                    >
                      <span className="day fw-normal">{blog.date}</span>
                    </div>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta mb-2 fw-normal">
                      <Link to="/blog">
                        <i className="fa-solid fa-user"></i> By {blog.author}
                      </Link>
                      <Link to="/blog" className="ms-3 fw-normal">
                        <i className="fa-solid fa-comments"></i> {blog.comments}{" "}
                        Comments
                      </Link>
                    </div>

                    <h2 className="blog-title mb-3 fw-normal">
                      <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                    </h2>

                    <div className="btn-area d-flex justify-content-between align-items-center">
                      <Link
                        className="vs-btn fw-normal"
                        to={`/blog-details/${blog.id}`}
                      >
                        আরও দেখুন <i className="fa-regular fa-arrow-right"></i>
                      </Link>

                      <div className="social-media d-flex gap-2">
                        <Link to="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#">
                          <i className="fab fa-x-twitter"></i>
                        </Link>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#">
                          <i className="fab fa-behance"></i>
                        </Link>
                      </div>
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
  .custom-arrow {
    width: 45px;
    height: 45px;
    border: 1px solid #ff3333;
    color: #ff3333;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    z-index: 10;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .custom-arrow:hover {
    background: #ff3333;
    color: #fff;
  }

  .next-arrow {
    right: -20px;
  }

  .prev-arrow {
    left: -20px;
  }

  /* When whole blog item is hovered */
  .vs-blog:hover .vs-btn {
    background-color: #ffffff !important;
    color: #ff3333 !important;
    /* border: 1px solid #ff3333; */
  }

  /* Icon color change */
  .vs-blog:hover .vs-btn i {
    color: #ff3333 !important;
  }

  /* Social icons color */
  .social-media a i {
    color: #2e4a5b !important;
  }

  /* Optional hover (if you want effect) */
  /* .social-media a:hover i {
    color: #FFFFFF !important;
  } */

  /* When blog card is hovered (overlay active) */
  .vs-blog:hover .social-media a i {
    color: #ffffff !important;
  }

  .vs-blog .blog-date {
    color: #cc0033 !important;
    border: 5px solid #cc0033 !important;
  }
  .vs-blog .blog-date:hover {
    background-color: #cc0033 !important;
    /* border: 5px solid #ff3333 !important; */
  }
`;

export default Blog;
