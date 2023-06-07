import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/modal.css'
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const fetchURL = "http://localhost:8080"
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
  // footer管理用
  const [footerStyle, setFooterStyle] = useState("small")
  const footerChange = (target) => {
    setFooterStyle(target);
  }

  const [modalVisible, setModalVisible] = useState(false);

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
        />
      ) : (
        null
      )}
      <Footer
        allData={allData}
        footerChange={footerChange}
        footerStyle={footerStyle}
      />
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
}

export default App;
