import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [top, setTopLeft] = useState(0);
  const [right, setTopRight] = useState(0);
  const [bottom, setBottomRight] = useState(0);
  const [left, setBottomLeft] = useState(0);
  const [copied , setCopied] = useState(false);

  const handleInputChange = (e: any) => {    

    const targetValue = parseInt(e.target.value);
    if(e.target.value !== ''){
      if(e.target.className === "top"){
        setTopLeft(targetValue);
      }
      if(e.target.className === "right"){
        setTopRight(targetValue);
      }
      if(e.target.className === "bottom"){
        setBottomRight(targetValue);
      }
      if(e.target.className === "left"){
        setBottomLeft(targetValue);
      }
    } else {
      if(e.target.className === "top"){
        setTopLeft(0);
      }
      if(e.target.className === "right"){
        setTopRight(0);
      }
      if(e.target.className === "bottom"){
        setBottomRight(0);
      }
      if(e.target.className === "left"){
        setBottomLeft(0);
      }
    }
  }

  
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`border-radius: ${top}px ${right}px ${bottom}px ${left}px`);
    setCopied(true);
  }

  return (
    <div className="screen">
      <div className="border-values">

        <input className='top' type="range" value={top} onChange={(e: any) => {handleInputChange(e)}} />



      </div>
      <div className="square-container">
        <input className='left' type="range" value={left} onChange={(e: any) => {handleInputChange(e)}}/>
        <div className="square">
          <div className="fancy-board" style={{borderTopLeftRadius: `${top}%`,  borderTopRightRadius: `${right}%`, borderBottomRightRadius: `${bottom}%`, borderBottomLeftRadius: `${left}%`}}>

          </div>
       </div>
        <input className='right' type="range" value={right} onChange={(e: any) => {handleInputChange(e)}}/>
      </div>
        <input className='bottom' type="range" value={bottom} onChange={(e: any) => {handleInputChange(e)}}/>
      <div className="clip-board">
        <p style={{color: 'white'}}>{`border-radius: ${top}% ${100-top}% ${bottom}% ${100-bottom}% / ${100-left}% ${right}% ${100-right}% ${left}%`}</p>
          <button onClick={copyToClipBoard}>Copy to clipboard</button>
          <p style={{color: 'white'}}>{copied ? "Copied!" : ""}</p>
      </div>
    </div>
  );
}

export default App;
