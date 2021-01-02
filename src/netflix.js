import requests from "./api/config";

const HomePage = {
  bannerContent: {
    title: "Unlimited movies, TV shows and more.",
    subtitle: "Watch anywhere, Cancel anytime.",
    bgImage:
      "https://assets.nflxext.com/ffe/siteui/vlv3/9ec8d211-6a2a-460d-9b68-5d6bb1c57ee0/ab89b44e-5b45-4ea6-b457-cb7bb93d0c2b/IN-en-20201228-popsignuptwoweeks-perspective_alpha_website_small.jpg",
  },
  storyCards: [
    {
      id: 1,
      title: "Enjoy on your TV.",
      subtitle:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more",
      imgName: "Card1",
      AnimationType: "slide-right",
    },
    {
      id: 1,
      title: "Download your shows to watch offline.",
      subtitle:
        "Save your favourites easily and always have something to watch.",
      imgName: "Card2",
      AnimationType: "slide-left",
    },
    {
      id: 1,
      title: "Watch everywhere.",
      subtitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgName: "Card3",
      AnimationType: "slide-right",
    },
  ],
};
const MainPage = {
  dataList: [
    {
      id: 1,
      title: "NETFLIX ORIGINALS",
      fetchUrl: requests.fetchNetflixOriginals,
      isLargeRow: true,
    },
    {
      id: 2,
      title: "Trending Now",
      fetchUrl: requests.fetchTrending,
    },
    { id: 3, title: "Top Rated", fetchUrl: requests.fetchTopRated },
    { id: 3, title: "Action Movies", fetchUrl: requests.fetchActionMovies },
    { id: 3, title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
    { id: 3, title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
    { id: 3, title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    { id: 3, title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
  ],
};

export { HomePage, MainPage };
