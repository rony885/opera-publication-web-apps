import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="preloader">
        <div className="preloader-inner">
          <img
            // src="/assets/img/dark-logo.svg"
            src="/assets/img/Opera Publication Logo11.png"
            alt="Opera"
            className="preloader-img mb-0 pb-0"
            style={{ height: "70px" }}
          />
          <span className="loader"></span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;

  .preloader {
    text-align: center;
    position: relative;
  }

  /* BIG BOX */
  .preloader-inner {
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
  }

  /* BIG IMAGE */
  .preloader-img {
    width: 180px;
    height: auto;
    object-fit: contain;
  }

  /* LOADER SPINNER */
  .loader {
    width: 50px;
    height: 50px;
    /* border: 5px solid #ff5e14; */
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
