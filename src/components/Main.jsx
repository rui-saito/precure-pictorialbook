import React from "react";
import { MdHideImage } from "react-icons/md";
import { MdImage } from "react-icons/md";
export const Main = (props) => {
  return (
    <div className="main">
      <div className="mainBrock">
        {props.allData.map(
          (el) =>
            el.length !== 0 && (
              <div
                className="data"
                key={el.id}
                onClick={() => props.setModalVisible(true)}
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
