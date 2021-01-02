import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Banner";
import NetflixContainer from "../../components/NetflixContainer";
import requests from "../../api/config";

function Main() {
  return (
    <>
      <Banner />
      <Container fluid className="main__wrapper">
        <NetflixContainer
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <NetflixContainer
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <NetflixContainer title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <NetflixContainer
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <NetflixContainer
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <NetflixContainer
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <NetflixContainer
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <NetflixContainer
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
      </Container>
    </>
  );
}

export default Main;
