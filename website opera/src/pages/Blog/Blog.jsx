import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import blogArray from "../../../src/DataJS/blog.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogArray);
  }, []);

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">ব্লগ</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  ব্লগ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="vs-sort-bar">
            <div className="row gap-4 align-items-center">
              <div className="col-md-auto flex-grow-1">
                <p className="woocommerce-result-count">
                  Showing <span>1-9 of 40</span> results
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select
                    className="orderby bg-gray"
                    name="orderby"
                    aria-label="Shop order"
                  >
                    <option value="recent_product" selected="selected">
                      Short By Latest
                    </option>
                    <option defaultValue="popularity">
                      Sort by popularity
                    </option>
                    <option defaultValue="rating">
                      Sort by average rating
                    </option>
                    <option defaultValue="date">Sort by latest</option>
                    <option defaultValue="price">
                      Sort by price: low to high
                    </option>
                    <option defaultValue="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {blogs.map((item, index) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow animate__fadeInUp"
                data-wow-delay={`${0.25 + index * 0.1}s`}
              >
                <div className="vs-blog blog-style1">
                  <div className="blog-img">
                    <Link to={`/blog-details/${item.id}`}>
                      <img
                        className="blog-img__img"
                        src={item.img}
                        alt="Blog Imagee"
                      />
                    </Link>
                    {/* <div className="blog-date" style={{ fontSize: "8px" }}>
                      <span className="day fs-6" style={{ fontSize: "8px" }}>
                        <strong className="month">{item.day}</strong>
                        {item.date}
                      </span>
                    </div> */}
                    <div className="blog-date fw-normal">
                      <span
                        className="day"
                        style={{
                          fontSize: "12px",
                          lineHeight: "1",
                          fontWeight: "400",
                        }}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="blog-content fw-normal">
                    <div className="blog-meta">
                      <Link to="/blog">
                        <i className="fa-solid fa-user"></i>By {item.author}
                      </Link>
                      <Link to="/blog">
                        <i className="fa-solid fa-comments"></i>
                        {item.comments} Comments
                      </Link>
                    </div>

                    <h2 className="blog-title fw-normal">
                      <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
                    </h2>

                    <div className="btn-area fw-normal">
                      <Link
                        className="vs-btn fw-normal"
                        to={`/blog-details/${item.id}`}
                      >
                        Read More<i className="fa-regular fa-arrow-right"></i>
                      </Link>

                      <div className="social-media">
                        <div className="member-links">
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fa-brands fa-x-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-behance"></i>
                          </Link>
                        </div>
                        <span className="icon-btn">
                          <i className="fas fa-share-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            className="row justify-content-center wow animate__fadeInUp"
            data-wow-delay="0.95s"
          >
            <div className="col-auto">
              <div className="vs-pagination">
                <Link to="#" className="pagi-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#" className="active">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">16</Link>
                  </li>
                </ul>
                <Link to="#" className="pagi-btn active">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

  .vs-pagination span.active,
  .vs-pagination span:hover,
  .vs-pagination a.active,
  .vs-pagination a:hover {
    background-color: #ff3333 !important;
  }

  .vs-pagination span,
  .vs-pagination a {
    border: 1px solid #ff3333 !important;
  }

  .icon-btn {
    background-color: #ff3333 !important;
  }
  .icon-btn:hover {
    color: var(--white-color);
    background-color: var(--white-color) !important;
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
