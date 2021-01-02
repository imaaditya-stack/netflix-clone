import React from "react";
import StoryCard from "../../components/StoryCard";
import HomeBanner from "../../components/Banner/HomeBanner";
import { HomePage } from "../../netflix";

function Home() {
  return (
    <>
      <HomeBanner />
      <div
        style={{ backgroundColor: "#000", overflowX: "hidden" }}
        className="stories__container"
      >
        {HomePage.storyCards.map((story) => {
          return (
            <StoryCard
              title={story.title}
              subtitle={story.subtitle}
              imgName={story.imgName}
              dataAos={story.AnimationType}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
