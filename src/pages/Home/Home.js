import React from "react";
import Banner from "./Banner/Banner";
import Offer from "./Offer/Offer";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import SpecialOfferShow from "./SpecialOffer/SpecialOfferShow";
import Supplier from "./Supplier/Supplier";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offer></Offer>
      <Services></Services>
      <Newsletter></Newsletter>
      <SpecialOfferShow></SpecialOfferShow>
      <Supplier></Supplier>
    </div>
  );
};

export default Home;
