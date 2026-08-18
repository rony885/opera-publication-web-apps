import React from "react";
import HeroArea from "./HeroArea";
import Product from "./Product";
import OfferSection from "./OfferSection";
import Categories from "./Categories";
import BestSelling from "./BestSelling";
import RomanceProduct from "./RomanceProduct";
// import KidsProduct from "./KidsProduct";
// import Testimonial from "./Testimonial";
import Blog from "./Blog";
import FeaturedAuthors from "./Authors";
// import ProductMonth from "./ProductMonth";
import FeatureArea from "./FeatureArea";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <OfferSection />
      <Categories />
      <Product />
      <FeaturedAuthors />
      <RomanceProduct />
      {/* <KidsProduct /> */}
      <BestSelling />
      {/* <ProductMonth /> */}
      {/* <Testimonial /> */}
      <Blog />
      <FeatureArea />
    </div>
  );
};

export default Home;
