import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import image from "../image/logo_20th.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerBrock">
        <div className="stars1">
          <BsFillStarFill className="star1-1" />
          <BsFillStarFill className="star1-2" />
        </div>
        <h1 className="headerH1">プリキュア図鑑</h1>
        <div className="stars2">
          <BsFillStarFill className="star2-1" />
          <BsFillStarFill className="star2-2" />
        </div>
        <a
          href="https://2023allstars-f.precure-movie.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt="20thIcon" className="purecureIcon" />
        </a>
      </div>
    </div>
  );
};
