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
            <h2 className="modalTextH">商品の在庫登録</h2>
            <div className="addItemsBrock">
              <div className="addItems">
                <label className="modalText">品名</label>
                <div className="valueBrock">
                  <input className="modalValue" type="text"></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">在庫量</label>
                <div className="valueBrock">
                  <input className="modalValue" type="number"></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">何日で１個使うか？</label>
                <div className="valueBrock">
                  <input className="modalValue" type="number"></input>
                </div>
              </div>
              <div className="addItems">
                <label className="modalText">下回りたくない</label>
                <div className="valueBrock">
                  <input className="modalValue" type="number"></input>
                </div>
              </div>
            </div>
            <button>登録</button>
          </div>
        </div>
      )}
    </div>
  );
}
