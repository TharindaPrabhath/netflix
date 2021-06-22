import "../styles/Banner.css";

import PlayIcon from "../assets/play_circle-black.svg";
import AddIcon from "../assets/add-white.svg";
import { useState } from "react";
import { useEffect } from "react";

import axios from "../utils/axios";
import Requests from "../utils/Requests";

interface TMDB_Film {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  original_name: string;
}

function Banner() {
  const [film, setFilm] = useState<TMDB_Film>();

  useEffect(() => {
    fetchFilm();
  }, []);

  async function fetchFilm() {
    const response = await axios.get(Requests.fetchTrending);
    setFilm(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${film?.backdrop_path}")`,
        backgroundPosition: "center center",
        //backgroundBlendMode: "multiply",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {film?.title || film?.name || film?.original_name}
        </h1>
        <p className="banner__info">{film?.overview}</p>
        <div className="banner__buttons">
          <button className="play-btn">
            <img src={PlayIcon} alt="Play" />
            Play
          </button>
          <button className="add-btn">
            <img src={AddIcon} alt="Play" />
            My List
          </button>
        </div>
      </div>
      {/* <div className="banner__fade-bottom"></div> */}
    </div>
  );
}

export default Banner;
