import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Component } from "react";

import "../styles/Row.css";

import TMDB_Film from "../models/TMDB_Film";

import axios from "../utils/axios";

import RowProps from "../models/Row";
import { IMAGE_BASE_URL } from "../models/Requests";

function Row(props: React.PropsWithChildren<RowProps>) {
  const [films, setFilms] = useState<TMDB_Film[]>();

  useEffect(() => {
    fetchFilms();
  }, []);

  async function fetchFilms() {
    const response = await axios.get(props.fetchUrl);
    setFilms(response.data.results);
  }
  // props.isLargeRow
  // ? `${IMAGE_BASE_URL}${film.backdrop_path}`
  // : `${IMAGE_BASE_URL}${film.poster_path}`
  return (
    <div className="row">
      <h1 className="row__title">{props.title}</h1>
      <div className="row__posters">
        {" "}
        {films?.map(
          (film) =>
            film.poster_path && (
              <img
                className={`row__poster ${
                  props.isLargeRow && "row__poster-large"
                }`}
                src={`${IMAGE_BASE_URL}${film.poster_path}`}
                alt={film.name || film.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
