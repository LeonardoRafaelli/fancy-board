import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [borderClipBoard, setBorderClipBoard] = useState('border-radius: 0px 0px 0px 0px');

  const fancyBoard = document.querySelector('.fancy-board') as HTMLElement;

  const handleInputChange = (e: any) => {
    
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
    }
    
    setBorderClipBoard(`border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`)
  }

  const CopyToClipBoard = () => {
    let copiedText = borderClipBoard.selectRange(0, 99999);
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
        <input type="text" disabled value={borderClipBoard} style={{width: "250px", textAlign: 'center'}} onClick={CopyToClipBoard}/>
      </div>
    </div>
  );
}

export default App;
