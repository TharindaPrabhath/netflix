import * as React from "react";
import { Component } from "react";

import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";

import Requests from "../models/Requests";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={false}
      />
      <Row
        title="Trending Now"
        fetchUrl={Requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={Requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={Requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={Requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={Requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={Requests.fetchDocumenteries}
        isLargeRow={true}
      />
    </div>
  );
}

export default HomeScreen;
