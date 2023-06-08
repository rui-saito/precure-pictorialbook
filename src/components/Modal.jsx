import React, { useState } from "react";
import { GiHumanTarget } from "react-icons/gi";
import { AiFillPlusSquare } from "react-icons/ai";

export function Modal(props) {
  const openModal = () => {
    props.setModalVisible(true);
  };

  const closeModal = () => {
    props.setModalVisible(false);
    props.setChoiceData({});

    props.setView("main");
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const [newData, setNewData] = useState({});

  const changeInput = (e) => {
    switch (e.target.id) {
      case "purecure_name":
        setNewData({
          ...newData,
          purecure_name: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          purecure_name: e.target.value,
        });
        break;
      case "purecure_human_name":
        setNewData({
          ...newData,
          purecure_human_name: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          purecure_human_name: e.target.value,
        });
        break;
      case "voice_actor":
        setNewData({
          ...newData,
          voice_actor: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          voice_actor: e.target.value,
        });
        break;
      case "purecure_img":
        setNewData({
          ...newData,
          purecure_img: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          purecure_img: e.target.value,
        });
        break;
      case "purecure_series":
        setNewData({
          ...newData,
          purecure_series: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          purecure_series: e.target.value,
        });
        break;
      case "purecure_remarks":
        setNewData({
          ...newData,
          purecure_remarks: e.target.value,
        });
        props.setChoiceData({
          ...props.choiceData,
          purecure_remarks: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  // const[repealData,setRepealData]=useState()
  const repealPurecure = async () => {
    try {
      await fetch(props.fetchURL + "/putPurecure", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.choiceData),
      });
    } catch (error) {
      console.log(error);
    }
    console.log(props.choiceData);
  };

  const createPurecure = async (func) => {
    console.log(props.fetchURL);
    console.log(newData);

    try {
      const data = await fetch(props.fetchURL + "/createPurecure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      func();
    } catch (error) {
      console.log(error);
    }
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
            {props.view === "main" ? (
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
            ) : (
              <div className="createIconBrock">
                <GiHumanTarget className="createIcon" />
              </div>
            )}

            <div className="addItemsBrock">
              {props.view === "create" && (
                <div className="addItems ">
                  <label className="modalText">写真URL</label>
                  <div className="valueBrock">
                    <input
                      className="modalValue"
                      id="purecure_img"
                      type="text"
                      defaultValue=""
                      onChange={(e) => changeInput(e)}
                    ></input>
                  </div>
                </div>
              )}
              <div className="addItems">
                <label className="modalText">なにキュア？</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    id="purecure_name"
                    defaultValue={props.choiceData?.purecure_name || ""}
                    onChange={(e) => changeInput(e)}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">変身前</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    id="purecure_human_name"
                    defaultValue={props.choiceData?.purecure_human_name || ""}
                    onChange={(e) => changeInput(e)}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">声優</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    id="voice_actor"
                    defaultValue={props.choiceData?.voice_actor || ""}
                    onChange={(e) => changeInput(e)}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">シリーズ</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    id="purecure_series"
                    defaultValue={props.choiceData?.purecure_series || ""}
                    onChange={(e) => changeInput(e)}
                  ></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">備考</label>
                <div className="valueBrock">
                  <input
                    className="modalValue"
                    type="text"
                    id="purecure_remarks"
                    defaultValue={props.choiceData?.purecure_remarks || ""}
                    onChange={(e) => changeInput(e)}
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
                </div> */
              /* </div> */}
            </div>
          </div>
          {props.view === "main" && (
            <div>
              <button className="repealBtn" onClick={() => repealPurecure()}>
                修正
              </button>
            </div>
          )}
        </div>
      )}
      {props.view === "create" && (
        <div className="createBtnBrock">
          <button
            className="createBtn"
            onClick={() => createPurecure(closeModal)}
          >
            登録
          </button>
        </div>
      )}
    </div>
  );
}
