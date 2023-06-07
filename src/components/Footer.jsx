import React from "react";
import { IoColorFilterSharp } from "react-icons/io5";
export const Footer = (props) => {
  return props.footerStyle === "small" ? (
    <div
      className="footerS"
      onClick={() => {
        props.footerChange("large");
      }}
    ></div>
  ) : (
    <div
      className="footerL"
      onDoubleClick={() => {
        props.footerChange("small");
      }}
    >
      <div className="filterHeader">
        <IoColorFilterSharp className="filterIcon" />
        <h2>フィルター</h2>
      </div>
      <div className="filterBrock">
        <label className="filterLabel">シリーズ</label>
        <select className="filterTxt">
          {Array.from(
            new Set(props.allData.map((el) => el.purecure_series))
          ).map((series, index) => (
            <option key={index}>{series}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
