import React from "react";
import AllShops from "../components/allshops";
import FeaturedCategories from "../components/featured-categories";
import Searchbar from "../components/searchbar";
import Slider from "../components/slider";

export const Index = () => {
  return (
    <div>
      {/* <Searchbar /> */}
      <Slider />
      <FeaturedCategories />
      <AllShops />
    </div>
  );
};
export default Index;