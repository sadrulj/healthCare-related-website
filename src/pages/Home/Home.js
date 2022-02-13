import React from "react";
import Banner from "./Banner/Banner";
import Offer from "./Offer/Offer";
import ServicesShow from "./Services/ServicesShow";
import SpecialOfferShow from "./SpecialOffer/SpecialOfferShow";
import Supplier from "./Supplier/Supplier";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offer></Offer>
      <ServicesShow></ServicesShow>
      <SpecialOfferShow></SpecialOfferShow>
      <Supplier></Supplier>
    </div>
  );
};

export default Home;
