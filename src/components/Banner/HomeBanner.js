import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import HomeHeader from "../Header/HomeHeader";
import { HomeContainer } from "../../netflix";

function HomeBanner() {
  return (
    <div
      className="banner--main"
      style={{
        backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/ab89b44e-5b45-4ea6-b457-cb7bb93d0c2b/IN-en-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
      }}
    >
      <div className="banner--main--div">
        <HomeHeader />
        <div className="banner--main--contents text-center">
          <h1 className="banner--main--contents--title">
            {HomeContainer.bannerContent.title}
          </h1>
          <h3>{HomeContainer.bannerContent.subtitle}</h3>
          <Button size="lg" className="banner--main--button" href="/main">
            Get Started for free
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HomeBanner;
