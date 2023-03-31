import React from "react";
import Contact from "../components/contact";
import SNavbar from "../components/navbar";
import Sabout from "../components/sabout";
import Sfooter from "../components/sfooter";
import ShomeSection from "../components/shomeSection";
import Sservice from "../components/sservice";

function Homepage() {
  return (
    <div>
      <SNavbar />
      <ShomeSection />
      <Sabout />
      <Sservice />
      <Contact />
      <Sfooter />
    </div>
  );
}

export default Homepage;
