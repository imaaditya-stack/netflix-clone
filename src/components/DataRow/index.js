import React from "react";
import { useEffect, useState } from "react";
import { Image, Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import API from "../../api/service";
import { BASE_IMAGE_URL } from "../../api/config";
import "./style.css";

function DataRow({ title, fetchUrl, isLargeRow }) {
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
      <div data-aos="fade-up" data-aos-duration="1500">
        <h2 className="row__title">{title}</h2>
        <Container className="row__container" fluid>
          {loading ? (
            <div className="m-auto">
              <Loader type="ThreeDots" color="#E50914" height={50} width={50} />
            </div>
          ) : (
            data.map((item) => {
              return (
                <Image
                  src={`${BASE_IMAGE_URL}${
                    isLargeRow ? item.poster_path : item.backdrop_path
                  }`}
                  alt=""
                  className={`img-fluid ${
                    isLargeRow && "row__poster--lg"
                  } row__poster--sm`}
                />
              );
            })
          )}
        </Container>
      </div>
    </>
  );
}

export default DataRow;
