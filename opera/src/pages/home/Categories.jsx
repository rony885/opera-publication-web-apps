import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import categoriesArray from "../../../src/DataJS/categories.js";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesArray);
  }, []);

  return (
    <Wrapper>
      <section className="categories-layout2 space-top">
        <div className="container space-bottom position-relative">
          <div className="title-area2 animation-style1 title-anime">
            {/* <h2 className="sec-title title-anime__title fw-normal">Top Categories</h2> */}
            <h2 className="sec-title title-anime__title fw-normal fs-1">
              প্রধান ক্যাটাগরি
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
            {categories.slice(0, 6).map((category) => (
              <div key={category.id} className="col-xl-2 col-md-4 col-6">
                <div
                  className="categorie-style2 wow animate__fadeInUp"
                  data-wow-delay={category.delay}
                >
                  <div className="categorie-img">
                    <img src={category.img} alt="product imagee" />
                  </div>
                  <h2 className="product-title fs-5 fw-normal">
                    <Link to="/shop">{category.name}</Link>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .categorie-style2:hover {
    background-color: #ff3333 !important;
  }
`;

export default Categories;
