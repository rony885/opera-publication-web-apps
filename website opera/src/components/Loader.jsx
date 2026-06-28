// import React from "react";

// const Loader = () => {
//   return (
//     <div className="preloader">
//       <button className="vs-btn preloaderCls">Cancel Preloader</button>
//       <div className="preloader-inner">
//         <img src="/assets/img/dark-logo.svg" alt="logo" />
//         <span className="loader"></span>
//       </div>
//     </div>
//   );
// };

// export default Loader;

// export default Loader;

// import React from "react";
// import styled from "styled-components";

// const Loader = () => {
//   return (
//     <Wrapper>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #0e121d;

//   .bar {
//     width: 10px;
//     height: 40px;
//     margin: 0 5px;
//     background-color: #ff5e14;
//     animation: wave 1.2s infinite ease-in-out;
//   }

//   .bar:nth-child(1) {
//     animation-delay: 0s;
//   }
//   .bar:nth-child(2) {
//     animation-delay: 0.1s;
//   }
//   .bar:nth-child(3) {
//     animation-delay: 0.2s;
//   }
//   .bar:nth-child(4) {
//     animation-delay: 0.3s;
//   }
//   .bar:nth-child(5) {
//     animation-delay: 0.4s;
//   }

//   @keyframes wave {
//     0%,
//     100% {
//       transform: scaleY(0.3);
//     }
//     50% {
//       transform: scaleY(1);
//     }
//   }
// `;

// export default Loader;

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
