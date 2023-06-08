import React, { useEffect } from "react";
import { MdHideImage } from "react-icons/md";
import { MdImage } from "react-icons/md";
export const Main = (props) => {
  const choicePurecure = async (e, func) => {
    await props.setChoiceData(props.allData[e.target.id]);
    // if (props.choiceData !== undefined) {
    //   func(true);
    // }
  };
  useEffect(() => {
    if (props.choiceData === undefined) {
      return; // props.choiceData が空の場合は処理をスキップ
    }
    if (Object.keys(props.choiceData).length === 0) {
      return; // props.choiceData が空の場合は処理をスキップ
    }

    // props.choiceData が空でない場合の処理
    console.log("props.choiceData の中身があります");
    props.setModalVisible(true);
  }, [props.choiceData]);
  return (
    <div className="main">
      <button
        className="new_purecure"
        onClick={() => {
          props.setModalVisible(true);
          props.changeView("create");
        }}
      >
        new プリキュア!
      </button>
      <div className="mainBrock">
        {props.allData.map(
          (el, index) =>
            el &&
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
