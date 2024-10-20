import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        position: "relative",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/Mf_nGEPIsQ8?autoplay=1&mute=1&loop=1&playlist=Mf_nGEPIsQ8&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="background-video"
      ></iframe>

      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
