import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/modal.css'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const fetchURL = "https://puricure.onrender.com"
  // const fetchURL = "http://localhost:8080"
  // 表示切り替え用のuseState
  const [view, setView] = useState("main");
  const changeView = (target) => {
    setView(target);
  }
  // data取得用
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    //  全てのデータを取得する
    (async () => {
      const data = await fetch(fetchURL + "/allData")
      const jsonData = await data.json();
      setAllData(jsonData);
      console.log(jsonData)
    })()

  }, [])
  // 選んだデータをモーダルに表示する用
  const [choiceData, setChoiceData] = useState({
    id: 1,
    purecure_name: "",
    purecure_human_name: "",
    voice_actor: "",
    purecure_remarks: "",
    purecure_series: "",
    purecure_img: "",
    purecure_startday: "",
    purecure_endday: "",
  });

  // footer管理用
  const [footerStyle, setFooterStyle] = useState("small")
  const footerChange = (target) => {
    setFooterStyle(target);
  }

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    console.log(choiceData)
  }, [choiceData])
  return (
    <div className="App">
      <Header />
      {view === "main" ? (
        <Main
          view={view}
          changeView={changeView}
          allData={allData}
          setAllData={setAllData}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          choiceData={choiceData}
          setChoiceData={setChoiceData}
        />
      ) : (
        null
      )}
      <Footer
        allData={allData}
        setAllData={setAllData}
        footerChange={footerChange}
        footerStyle={footerStyle}
        fetchURL={fetchURL}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        allData={allData}
        choiceData={choiceData}
        setChoiceData={setChoiceData}
      />
    </div>
  );
}

export default App;
