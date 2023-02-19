import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Stock from "../components/Stock/Stock";
import Aboutus from "../components/Aboutus/Aboutus";

import React from "react";

const Layout = () => {

  return (
    <>
      <Hero />
      <Carousel />
      <Stock />
      <Aboutus />
    </>
  )
}

export { Layout }