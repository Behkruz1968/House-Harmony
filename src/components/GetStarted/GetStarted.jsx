import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">House Harmony bilan boshlang</span>
          <span className="secondaryText">
          Obuna bo'ling va bizdan juda jozibali narx takliflarini toping.            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:behkruz2023@gmail.com">Boshlang</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
