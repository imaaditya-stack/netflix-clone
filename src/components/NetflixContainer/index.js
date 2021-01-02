import React from "react";
import { useEffect, useState } from "react";
import { Image, Container } from "react-bootstrap";
import API from "../../api/service";
import { baseImageUrl } from "../../api/config";
import Loader from "react-loader-spinner";
import "./style.css";

function NetflixContainer({ title, fetchUrl, isLargeRow }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(fetchUrl)
      .then(({ data }) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h2 className="font-weight-bold text-uppercase genre">{title}</h2>
      <Container className="row__wrapper" fluid>
        {loading ? (
          <div className="m-auto">
            <Loader type="ThreeDots" color="#E50914" height={50} width={50} />
          </div>
        ) : (
          data.map((item) => {
            return (
              <Image
                src={`${baseImageUrl}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt=""
                className={`img-fluid ${
                  isLargeRow && "row__poster--lg"
                } row__poster`}
              />
            );
          })
        )}
      </Container>
    </>
  );
}

export default NetflixContainer;
