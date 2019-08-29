import React from "react";
import { Link } from "react-router-dom";
import HeaderJ from "./components/HeaderJ.js";
import IntroJ from "./components/Japanese/IntroJ.js";
import SpecificsJ from "./components/Japanese/SpecificsJ.js";
import AboutJ from "./components/Japanese/AboutJ.js";
import ContactJ from "./components/Japanese/ContactJ.js";
import FooterJ from "./components/Japanese/FooterJ.js";
import "./styles/styles.scss";

function App() {
  return (
    <div className="AppJ">
      <Link className="language" to="/english">
        English
      </Link>
      <HeaderJ />
      <div className="container">
        <IntroJ />
        <SpecificsJ />
        <ContactJ />
        <AboutJ />
      </div>
      <FooterJ />
    </div>
  );
}

export default App;
