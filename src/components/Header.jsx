import React from "react";
// import { CiImageOff } from "react-icons/ci";
/* <CiImageOff /> */
import { BsFillStarFill } from "react-icons/bs";
export const Header = () => {
  return (
    <div className="header">
      <div className="headerBrock">
        <div className="stars1">
          <BsFillStarFill className="star1-1" />
          <BsFillStarFill className="star1-2" />
        </div>
        <h1 className="headerH1">プリキュアDB</h1>
        <div className="stars2">
          <BsFillStarFill className="star2-1" />
          <BsFillStarFill className="star2-2" />
        </div>
      </div>
    </div>
  );
};
