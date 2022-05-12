import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);

  const copied = {copied: false};

  const handleInputChange = (e: any) => {    
    console.log(e.target.value);
    // console.log(e.target.className);
    const targetValue = parseInt(e.target.value);
    
    if(e.target.value !== ''){
      if(e.target.className === "top-left"){
        setTopLeft(targetValue);
      }
      if(e.target.className === "top-right"){
        setTopRight(targetValue);
      }
      if(e.target.className === "bottom-right"){
        setBottomRight(targetValue);
      }
      if(e.target.className === "bottom-left"){
        setBottomLeft(targetValue);
      }
    } else {
      if(e.target.className === "top-left"){
        setTopLeft(0);
      }
      if(e.target.className === "top-right"){
        setTopRight(0);
      }
      if(e.target.className === "bottom-right"){
        setBottomRight(0);
      }
      if(e.target.className === "bottom-left"){
        setBottomLeft(0);
      }
    }
  }

  
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`);
  }

  return (
    <div className="screen">
      <div className="border-values">
        <input
        type="number"
        className="top-left"
        placeholder='top-left'
        onChange={(e) => {handleInputChange(e)}}
        />
        <input
        type="number"
        className="top-right"
        placeholder='top-right'
        onChange={(e) => {handleInputChange(e)}}
        />
        <input
        type="number"
        className="bottom-right"
        placeholder='bottom-right'
        onChange={(e) => {handleInputChange(e)}}
        />
        <input
        type="number"
        className="bottom-left"
        placeholder='bottom-left'
        onChange={(e) => {handleInputChange(e)}}
        />
      </div>
      <div className="square">
        <div className="fancy-board" style={{borderTopLeftRadius: topLeft, borderTopRightRadius: topRight, borderBottomRightRadius: bottomRight, borderBottomLeftRadius: bottomLeft}}>

        </div>
      </div>
      <div className="clip-board">
        <p style={{color: 'white'}}>{`border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`}</p>
        <button onClick={copyToClipBoard}>Copy to clipboard</button>
      </div>
    </div>
  );
}

export default App;
