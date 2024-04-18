import React, {useState} from "react";
import axios from "axios";
import Categorys from "./components/Categorys";
import './index.css';

function App() {
  const [dataFromDjango, setDataFromDjango] = useState()
  const [isOff, setIsOff] = useState(false)
  const path = 'http://127.0.0.1:8000/'

  function connect(e) {
  axios.get(path).then(res =>{
    console.log(res.data)
    setDataFromDjango(res.data)
    setIsOff(!isOff)
    if(isOff){e.target.style.display = "block"}
    else { e.target.style.display = "none"}
  })
}


  return (
    <div className="App">
      <button className="isOff" onClick={connect}>Войти</button>

      <h1>Привет мир!</h1>
      {dataFromDjango &&
      <Categorys data={dataFromDjango}/>
      }

    </div>
  );
}

export default App;
