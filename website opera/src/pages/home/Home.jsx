import React from "react";
import HeroArea from "./HeroArea";
import Product from "./Product";
import UpComingProduct from "./UpComingProduct";
import OfferSection from "./OfferSection";
import Categories from "./Categories";
// import BestSelling from "./BestSelling";
import RomanceProduct from "./RomanceProduct";
import Blog from "./Blog";
import Authors from "./Authors";
import FeatureArea from "./FeatureArea";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <OfferSection />
      <Categories />
      <Product />
      <UpComingProduct />
      <RomanceProduct />
      <Authors />
      {/* <BestSelling /> */}
      <Blog />
      <FeatureArea />
    </div>
  );
};

export default Home;
