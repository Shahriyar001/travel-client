import React, { useState } from "react";
import "./Home.css";
import { FaFilter } from "react-icons/fa";

const Home = () => {
  const [rangeValue, setRangeValue] = useState(400);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  console.log(new Date());
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        position: "relative",
      }}
    >
      {/* <iframe
        src="https://www.youtube.com/embed/Mf_nGEPIsQ8?autoplay=1&mute=1&loop=1&playlist=Mf_nGEPIsQ8&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="background-video"
      ></iframe> */}

      {/* <iframe
        src="https://www.youtube.com/embed/DEmO758Llbc?autoplay=1&mute=1&loop=1&playlist=DEmO758Llbc&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="background-video"
      ></iframe> */}

      <iframe
        src="https://www.youtube.com/embed/ZoImTb58fjA?autoplay=1&mute=1&loop=1&playlist=ZoImTb58fjA&controls=0&showinfo=0&modestbranding=1&rel=0"
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="background-video"
      ></iframe>

      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content text-neutral-content text-left mt-40 relative z-10">
        <div className="">
          <p className="mb-2 text-white">Our Packages</p>
          <h1 className="mb-5 text-3xl text-white font-bold">
            Search Your Holiday
          </h1>

          <div className="bg-white lg:flex mt-8 px-2 py-5 gap-3 text-center rounded-lg">
            <label className="form-control p-2 ">
              <div className="label">
                <span className="label-text">Select destination</span>
              </div>
              <input
                type="text"
                placeholder="Cox's Bazar"
                className="input input-bordered w-80"
              />
            </label>
            <label className="form-control p-2 w-80">
              <div className="label">
                <span className="label-text">Selecct Date</span>
              </div>
              <input
                type="text"
                placeholder={new Date().toLocaleDateString()}
                className="input input-bordered "
              />
            </label>
            <label className="form-control w-80">
              <div className="label mt-3">
                <span className="label-text">Max price</span>
                <span className="label-text-alt text-xl font-semibold">
                  $0{rangeValue}
                </span>
              </div>
              <input
                onChange={handleRangeChange}
                type="range"
                min={0}
                max="1000"
                value={rangeValue}
                className="range mt-2 range-xs"
              />
            </label>
          </div>
          {/* <div className="text-center items-center w-full">
            <button className="flex items-center btn btn-peimary">
              <FaFilter />
              Filter
            </button>
          </div> */}
          {/* <div className="flex justify-center mt-[-8]">
            <button className="flex items-center btn btn-primary text-white">
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div> */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -mt-5">
            <button className="flex items-center btn border-none py-1 px-3 bg-indigo-400 text-white">
              <FaFilter className="mr-2" />
              More Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
