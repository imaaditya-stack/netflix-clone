import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import API from "../../api/service";
import requests from "../../api/config";
import MainHeader from "../Header/MainHeader";
import "./style.css";

function Banner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    API.get(requests.fetchNetflixOriginals)
      .then(({ data }) => {
        setData(data.results[Math.floor(Math.random() * data.results.length)]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "......" : str;
  };
  return (
    <div
      className="banner--main"
      style={{
        backgroundImage: `url(${base_url}${data?.backdrop_path})`,
      }}
    >
      <div className="banner--main--div">
        <MainHeader />
        {loading ? (
          <div className="m-auto">
            <Loader type="ThreeDots" color="#E50914" height={50} width={50} />
          </div>
        ) : (
          <div className="banner--main--contents">
            <h1 className="banner--main--contents--title">
              {data?.title || data?.name || data?.original_name}
            </h1>
            <p className="banner--main--contents--overview">
              {truncate(data.overview, 150)}
            </p>
            <Button className="banner--main--button--1 mr-4">
              <PlayCircleFilledWhiteIcon
                style={{ marginRight: 8, marginBottom: 5 }}
              />
              Play
            </Button>
            <Button className="banner--main--button--2">More info</Button>
          </div>
        )}
        <div className="banner--main--fade--bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
