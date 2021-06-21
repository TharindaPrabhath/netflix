import "../styles/Banner.css";

import PlayIcon from "../assets/play_circle-black.svg";
import AddIcon from "../assets/add-white.svg";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Name of the Film</h1>
        <p className="banner__info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          itaque corrupti, facilis non dignissimos totam velit alias aliquam
          porro cum, expedita rerum rem temporibus exercitationem at laboriosam
          veniam neque architecto.
        </p>
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
      <div className="banner__fade-bottom">Hello</div>
    </div>
  );
}

export default Banner;
