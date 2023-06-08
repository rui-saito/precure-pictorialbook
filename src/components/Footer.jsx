import React from "react";
import { IoColorFilterSharp } from "react-icons/io5";
export const Footer = (props) => {
  //   const handleInputChange = (e) => {
  //     // フォーカスを外す
  //     e.target.blur();
  //   };

  const filterFetch = async (e) => {
    props.setFilterSeries(e.target.value);
    if (e.target.value !== "オールスターズ") {
      const data = await fetch(
        `${props.fetchURL}/filterData/${e.target.value}`
      );
      const jsonData = await data.json();
      props.setAllData(jsonData);
    } else {
      const data = await fetch(props.fetchURL + "/allData");
      const jsonData = await data.json();
      props.setAllData(jsonData);
    }
  };
  return props.footerStyle === "small" ? (
    <div
      className="footerS"
      onMouseEnter={() => {
        props.footerChange("large");
      }}
      onClick={() => {
        props.footerChange("large");
      }}
    ></div>
  ) : (
    <div
      className="footerL"
      // onMouseLeave={() => {
      //   props.footerChange("small");
      // }}
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
        <select
          className="filterTxt"
          onBlur={(e) => {
            filterFetch(e);
          }}
        >
          <option>オールスターズ</option>
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
