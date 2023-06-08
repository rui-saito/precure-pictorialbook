import React from "react";
// import addBtn from "./components/styles/add.svg";
import { AiFillPlusSquare } from "react-icons/ai";
export function Modal(props) {
  // model関連

  const openModal = () => {
    props.setModalVisible(true);
  };

  const closeModal = () => {
    props.setModalVisible(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <AiFillPlusSquare
        onClick={openModal}
        alt="addBtn"
        className="itemAddBtn"
      ></AiFillPlusSquare>

      {props.modalVisible && (
        <div id="modalArea" className="modalArea" onClick={closeModal}>
          {/* Modal Content */}
          <div className="addItemFrom" onClick={stopPropagation}>
            <h2 className="modalTextH">プリキュアデータ</h2>
            <div className="addItems_img">
              <label className="modalText">イメージ</label>
              <div className="valueBrock">
                {/* <img src={props.choiceData.purecure_img} alt="purecure" /> */}
                {props.choiceData && (
                  <img
                    src={props.choiceData.purecure_img}
                    alt="Pure Cure"
                    className="modalImg"
                  />
                )}
              </div>
            </div>
            <div className="addItemsBrock">
              <div className="addItems">
                <label className="modalText">なにキュア？</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    defaultValue={props.choiceData?.purecure_name || ""}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">変身前</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    defaultValue={props.choiceData?.purecure_human_name || ""}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">声優</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    defaultValue={props.choiceData?.voice_actor || ""}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">シリーズ</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    defaultValue={props.choiceData?.purecure_series || ""}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">備考</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    defaultValue={props.choiceData?.purecure_remarks || ""}
                  ></input>
                </div>
              </div>
              {/* <div className="addItems">
                <label className="modalText">放送開始</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="date"
                    value={props.choiceData?.purecure_series||""}
                    onChange={(e) =>
                      props.setChoiceData({
                        ...props.choiceData,
                        purecure_series: e.target.value,
                      })
                    }
                  ></input>
                </div> */}
              {/* </div> */}
            </div>
            {/* <button>登録</button> */}
          </div>
        </div>
      )}
    </div>
  );
}
