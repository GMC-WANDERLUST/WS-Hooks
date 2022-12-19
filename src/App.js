import React, {useState} from "react";
import './App.css';
import Navmain from './components/Navmain';
import WaykList from './components/WayList';
import {data} from './data'

function App() {
  const [search, setSearch ] = useState("");
  const [rating, setRating ] = useState(0);
  const [movie, setMovie ] = useState(data)
  return (
    <div className="App">
      <Navmain  setRating={setRating} setSearch={setSearch}/>
      <WaykList setMovie={setMovie} rating={rating} data ={movie} search = {search}/>
    </div>
  );
}

export default App;
