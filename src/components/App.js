import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [timeCount, setTimeCount] = useState(0);

  const [inputNumber, setInputNumber] = useState("");
  
    useEffect(()=>{
        const countDownInterval = 
          setInterval(()=>{
            setTimeCount((prev)=>{
              if(prev > 0)
                return prev-1;
              else{
                setTimeCount(0);
                clearInterval(countDownInterval);
              } 
            });
          },1000)
        return ()=>{
          clearInterval(countDownInterval);
        }
    },[inputNumber]);

  function startCountdownOnClick(event){
    const value = event.target.value;
    
    if(event.key === "Enter"){

      const countValue = Number(value) ? Math.floor(value) : 0;

      setTimeCount(countValue);

      setInputNumber(countValue);
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={startCountdownOnClick} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeCount}</div>
    </div>
  )
}


export default App;
