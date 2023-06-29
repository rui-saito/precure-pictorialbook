import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/modal.css'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const fetchURL = "https://main.dr53b8387n4le.amplifyapp.com"
  // const fetchURL = "https://puricure.onrender.com"
  // const fetchURL = "http://localhost:8080"
  // 表示切り替え用のuseState
  const [view, setView] = useState("main");
  const changeView = (target) => {
    setView(target);
  }
  // filterのデータを持たせる
  const [filterSeries, setFilterSeries] = useState("オールスターズ")
  // 選んだデータをモーダルに表示する用
  const [choiceData, setChoiceData] = useState({});
  // data取得用
  const [newPrecure, setNewPurecure] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    //  全てのデータを取得する
    (async () => {
      if (filterSeries === "オールスターズ") {
        const data = await fetch(fetchURL + "/allData")
        const jsonData = await data.json();
        setAllData(jsonData);
        console.log(jsonData)
      } else {
        const data = await fetch(fetchURL + "/filterData/" + filterSeries)
        const jsonData = await data.json();
        setAllData(jsonData);
        console.log(jsonData)
      }
    })()

  }, [modalVisible])

  // footer管理用
  const [footerStyle, setFooterStyle] = useState("small")
  const footerChange = (target) => {
    setFooterStyle(target);
  }
  useEffect(() => {
    console.log(choiceData)
    console.log(view)
  }, [choiceData, view])
  return (
    <div className="App">
      <Header />
      <Main
        view={view}
        changeView={changeView}
        allData={allData}
        setAllData={setAllData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        choiceData={choiceData}
        setChoiceData={setChoiceData}
        newPrecure={newPrecure}
        setNewPurecure={setNewPurecure}
      />
      <Footer
        allData={allData}
        setAllData={setAllData}
        footerChange={footerChange}
        footerStyle={footerStyle}
        fetchURL={fetchURL}
        filterSeries={filterSeries}
        setFilterSeries={setFilterSeries}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        allData={allData}
        choiceData={choiceData}
        setChoiceData={setChoiceData}
        view={view}
        setView={setView}
        fetchURL={fetchURL}
      />
    </div>
  );
}

export default App;
