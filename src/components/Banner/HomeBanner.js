import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import HomeHeader from "../Header/HomeHeader";
import { HomePage } from "../../netflix";

function HomeBanner() {
  return (
    <div
      className="banner--home"
      style={{
        backgroundImage: `url(${HomePage.bannerContent.bgImage})`,
      }}
    >
      <div className="banner--home--div">
        <HomeHeader />
        <div className="banner--home--contents text-center">
          <h1 className="banner--home--contents--title">
            {HomePage.bannerContent.title}
          </h1>
          <h3 className="banner--home--contents--subtitle">
            {HomePage.bannerContent.subtitle}
          </h3>
          <Button
            size="lg"
            className="button--global banner--home--button mt-3"
            href="/main"
          >
            Get Started to explore
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HomeBanner;
