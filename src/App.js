import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import MovieList from "./components/MovieList";

function App() {
  const [modalInfo, setModalInfo] = useState([]);

  const pushObj = (data) => {
    console.log(data);
    const addMovieList =[...modalInfo]
    addMovieList.push(data)
    setModalInfo(addMovieList)
  };

  

  return (
    <div className="App">
      <Header  pushObj={pushObj}/>
      <MovieList  modalInfo={modalInfo} deleteMovie={setModalInfo}/>
    </div>
  );
}

export default App;
