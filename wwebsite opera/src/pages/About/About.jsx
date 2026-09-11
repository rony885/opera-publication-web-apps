import React from "react";
import AboutInfo from "./AboutInfo";
import Testimonial from "./Testimonial";
import Count from "./Count";
import OperaClients from "./OperaClients";

const About = () => {
  return (
    <div>
      <AboutInfo />
      <Count />
      <Testimonial />
      <OperaClients />
    </div>
  );
};

export default About;
