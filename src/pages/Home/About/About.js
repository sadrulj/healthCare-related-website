import React from "react";

const About = () => {
  return (
    <div className="container w-full mx-auto text-center bg-white border-2 border-gray-300 border-dashed h-2/4 rounded-xl bg-blend-overlay">
      <div>
        <h1 className="text-blue-400 font-bold text-4xl p-6">About Us</h1>
        <hr className="w-2/4 mx-auto" />
        <p className="p-10 text-left">
          MediCare+ was founded in January 2000 by a licensed Registered Nurse
          with the purpose of providing quality medical supplies to improve the
          lives of our customers and to support their personal independence.
          We've since expanded to offer health and wellness products as well. We
          now supply over 100,000 products from wound dressings to exercise
          equipment. We strive to provide those products that will add some
          vitality to your life. We work to keep our prices low so that when
          insurance won't cover it, we've got you covered. <br />
          <br />
          We're 100 percent committed to helping customers find quality products
          at an affordable rate. Our customer care team is here to help, whether
          it is to place an order or answer any questions. In addition, to help
          customers find what they need, we've also included informative
          articles on our website to answer commonly asked questions. <br />
          <br />
          "Customers should have a medical supply store that they can trust.
          MediCare+ is that store." <br />
          <br />
          MediCare+.com has been a preferred online supplier of medical supplies
          to consumers, hospitals, healthcare facilities, medical professionals,
          businesses and government agencies since 2000. The company has served
          over 2.5 million customers. Our mission is to provide consumers with
          quality medical supplies, absolute customer satisfaction, low prices
          and personal attention to each order to gain the trust of our
          customers. If you would like to see more about MediCare+ visit
          Bloomberg or Inc. 5000. You can see our customer testimonials or our
          Excellent customers reviews at Trustpilot. The Better Business Bureau
          gives us an A+ rating and Google Shopping 4.5 stars. In addition, we
          have partnered with several non-profit organizations to give back to
          those in need.
        </p>
      </div>
      <div>
        <h2 className="text-blue-400 font-bold text-4xl p-6">
          MISSION STATEMENT
        </h2>
        <hr className="w-2/4 mx-auto" />
        <h4 className="text-blue-400 font-bold text-xl text-left p-2 ml-8">
          Goals:
        </h4>{" "}
        <p className="p-10 text-left">
          Our goal is to add Vitality to your life and provide quality medical
          and health supplies to our customers at a competitive price. We add
          value by providing product buying resources, trained product
          specialists, and live customer support.
        </p>{" "}
        <br />
        <h4 className="text-blue-400 font-bold text-xl text-left p-2 ml-8">
          Vision:
        </h4>
        <p className="p-10 text-left">
          Our vision is to be a leader in the distribution of health and medical
          supply products and meet our customers’ needs throughout all stages of
          their life.
        </p>
      </div>
    </div>
  );
};

export default About;
