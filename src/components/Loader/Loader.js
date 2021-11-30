import React from "react";
import "./loader.css";
const Loader = () => {
  return (
    <div className="outerContainerOfLoader">
      <div className="wrapper">
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
        <div className="loader">
          <div className="element"></div>
        </div>
      </div>
      <p
        style={{
          position: "relative",
          left: "5px",
          top: "-7px",
          fontSize: "12px",
          fontWeight: "500",
        }}
      >
        Saving counter value
      </p>
    </div>
  );
};

export default Loader;
