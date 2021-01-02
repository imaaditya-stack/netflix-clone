import React from "react";
import StoryCard from "../../components/StoryCard";
import HomeBanner from "../../components/Banner/HomeBanner";
import "./style.css";
function Home() {
  return (
    <>
      <HomeBanner />
      <div style={{ backgroundColor: "#000" }} className="stories__container">
        <StoryCard
          title="Enjoy on your TV."
          subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more."
          imgName="Card1"
        />
        <StoryCard
          title="Download your shows to watch offline."
          subtitle="Save your favourites easily and always have something to watch."
          imgName="Card2"
        />
        <StoryCard
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          imgName="Card3"
        />
      </div>
    </>
  );
}

export default Home;
