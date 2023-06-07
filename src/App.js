import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const fetchURL = "http://localhost:8080"
  // 表示切り替え用のuseState
  const [view, setView] = useState("main");
  const changeView = (target) => {
    setView(target);
  }
  // data取得用
  const [AllData, setAllData] = useState([]);
  useEffect(() => {
    //  全てのデータを取得する
    (async () => {
      const data = await fetch(fetchURL + "/allData")
      const jsonData = await data.json();
      setAllData(jsonData);
      console.log(jsonData)
    })()

  }, [])
  return (
    <div className="App">
      <Header />
      {view === "main" ? (
        <Main
          view={view}
          changeView={changeView}
          AllData={AllData}
          setAllData={setAllData}
        />
      ) : (
        null
      )}
    </div>
  );
}

export default App;
