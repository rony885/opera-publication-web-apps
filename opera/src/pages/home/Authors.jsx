import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authorArray from "../../DataJS/authors.js";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(authorArray);
  }, []);

  return (
    <div className="feature-author space">
      <div className="container">
        <div className="title-area2 animation-style1 title-anime">
          {/* <h2 className="sec-title title-anime__title fw-normal">Featured Authors</h2> */}
          <h2 className="sec-title title-anime__title fw-normal fs-1">সেরা লেখকগণ</h2>
          <Link
            className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
            data-wow-delay="0.70s"
            to="/authors"
          >
            {/* View More */}
            আরও দেখুন
          </Link>
        </div>
        <div className="row g-4">
          {authors.slice(0, 6).map((author) => {
            return (
              <div
                key={author.id}
                className="col-xl-2 col-lg-3 col-md-4 col-6 wow animate__fadeInUp"
                data-wow-delay="0.20s"
              >
                <div className="feature-style2">
                  <span className="feature-img">
                    {/* <img src={author.img} alt="feature imagee"  style={{height: "195px", width: "195px"}}/> */}
                    <img src={author.img} alt="feature imagee" />
                  </span>
                  <h2 className="feature-title fs-5 fw-normal">
                    <Link to={`/author-details/${author.id}`}>
                      {author.name}
                    </Link>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Authors;
