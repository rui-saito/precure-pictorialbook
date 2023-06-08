import React from "react";
import { MdHideImage } from "react-icons/md";
import { MdImage } from "react-icons/md";
export const Main = (props) => {
  const choicePurecure = (e, func) => {
    props.setChoiceData(props.allData[e.target.id]);
    func(true);
  };
  return (
    <div className="main">
      <div className="mainBrock">
        {props.allData.map(
          (el, index) =>
            el.length !== 0 && (
              <div
                className="data"
                key={el.id}
                id={index}
                onClick={(e) => {
                  choicePurecure(e, props.setModalVisible);
                }}
              >
                {el.purecure_img !== "" ? (
                  <MdImage className="imageIcon visible" />
                ) : (
                  <MdHideImage className="imageIcon" />
                )}
                <p className="purecure_name">{el.purecure_name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};
