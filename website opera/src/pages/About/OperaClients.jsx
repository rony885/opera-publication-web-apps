import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import operaClientsArray from "../../../src/DataJS/operaClients";

const OperaClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(operaClientsArray);
  }, []);

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
            {clients.map((brand, index) => (
              <div key={index} className="brand-item-wrapper">
                <div className="brand-item">
                  <Link
                    to={brand.operaClientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={brand.image}
                      alt="Imagee"
                      // style={{ width: "159px", height: "30px" }}
                      style={{ height: "50px" }}
                    />
                  </Link>
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

export default OperaClients;
