import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("/assets/img/bg/breadcumb-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Error Page</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Error Page</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space error-style1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div
                className="error-img wow animate__fadeInUp"
                data-wow-delay="0.35s"
              >
                <img src="/assets/img/404/404.png" alt="404" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center wow animate__fadeInUp"
                data-wow-delay="0.55s"
              >
                <div className="title-area animation-style1 title-anime">
                  <h2 className="sec-title text-title title-anime__title">
                    Oops! That Page Can't Be Found.
                  </h2>
                </div>
                <p
                  className="error-text wow animate__fadeInUp"
                  data-wow-delay="0.75s"
                >
                  Unfortunately, something went wrong and this page does not
                  exist. Try using the search or return to the previous page.
                </p>
                <Link
                  to="/"
                  className="vs-btn wow animate__bounceInUp"
                  data-wow-delay="0.85s"
                >
                  Go Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
