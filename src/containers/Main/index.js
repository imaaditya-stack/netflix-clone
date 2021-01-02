import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Banner/MainBanner";
import DataRow from "../../components/DataRow";
import { MainPage } from "../../netflix";

function Main() {
  return (
    <>
      <Banner />
      <Container fluid className="main__wrapper">
        {MainPage.dataList.map((row) => {
          console.log(row);
          return (
            <DataRow
              title={row.title}
              fetchUrl={row.fetchUrl}
              isLargeRow={row.isLargeRow}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Main;
