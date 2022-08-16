import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [top, setTopLeft] = useState(0);
  const [right, setTopRight] = useState(0);
  const [bottom, setBottomRight] = useState(0);
  const [left, setBottomLeft] = useState(0);
  const [copied, setCopied] = useState(false);


  useEffect(() => {
    if(copied){
      const disableCopiedText = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(disableCopiedText);
    }

    return () => {}
  }, [copied])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const targetValue = parseInt(e.target.value);
    if (e.target.value !== '') {
      if (e.target.className === "top") {
        setTopLeft(targetValue);
      }
      if (e.target.className === "right") {
        setTopRight(targetValue);
      }
      if (e.target.className === "bottom") {
        setBottomRight(targetValue);
      }
      if (e.target.className === "left") {
        setBottomLeft(targetValue);
      }
    } else {
      if (e.target.className === "top") {
        setTopLeft(0);
      }
      if (e.target.className === "right") {
        setTopRight(0);
      }
      if (e.target.className === "bottom") {
        setBottomRight(0);
      }
      if (e.target.className === "left") {
        setBottomLeft(0);
      }
    }
  }


  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`border-radius: ${top}% ${100 - top}% ${bottom}% ${100 - bottom}% / ${100 - left}% ${right}% ${100 - right}% ${left}%`);
    setCopied(true);
  }

  return (
    <div className="screen">
      <input className='top' type="range" value={top} onChange={(e) => { handleInputChange(e) }} />
      <div className="square-container">
        <div className="lateral-range-inputs">
          <input className='left' type="range" value={left} onChange={(e) => { handleInputChange(e) }} />
        </div>
        <div className="square">
          <div className="fancy-board" style={{ borderTopLeftRadius: `${top}%`, borderTopRightRadius: `${right}%`, borderBottomRightRadius: `${bottom}%`, borderBottomLeftRadius: `${left}%` }}>

          </div>
        </div>
        <div className="lateral-range-inputs">
          <input className='right' type="range" value={right} onChange={(e) => { handleInputChange(e) }} />
        </div>
      </div>
      <input className='bottom' type="range" value={bottom} onChange={(e) => { handleInputChange(e) }} />
      <div className="clip-board">
        <p style={{ color: 'white' }}>{`border-radius: ${top}% ${100 - top}% ${bottom}% ${100 - bottom}% / ${100 - left}% ${right}% ${100 - right}% ${left}%`}</p>
        <button onClick={copyToClipBoard}>Copy to clipboard</button>
        <p style={{ color: 'white', height: "20px"}}>{copied ? "Copied!" : "   "}</p>
      </div>
    </div>
  );
}

export default App;
