import React from "react";
import { LandingList } from "../../data/landingListData";
import { sellInfo } from "../../data/sellInfoData";
import { buyInfo } from "../../data/buyInfoData";
import { carouselImages } from "../../data/carouselImages";
import Hero from "./hero/hero";
import Section from "./sections/section";
import Associates from "./associates/associates";
import Carousel from "./carousel/carousel";

const Landing = () => {
  return (
    <>
      <Hero data={LandingList} />
      <Section data={sellInfo} reverse={false} />
      {/* <Carousel data={carouselImages} /> */}
      <Section data={buyInfo} reverse={true} />
      {/* <Associates /> */}
    </>
  );
};

export default Landing;
