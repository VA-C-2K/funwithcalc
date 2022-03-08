import React, { useState } from "react";
import "./PwdGen.css";
import copy from "copy-to-clipboard";  
import zxcvbn from 'zxcvbn';
const PwdGen = () => {
  const [length, setLength] = useState("10");
  const [output, setOutput] = useState("");
  const [copyText, setCopyText] = useState(output);
  
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.';:+=^*_-0123456789";
  
  const randomValue = (value) => {
    return Math.floor(Math.random() * value);
  };

  const genPassword = () => {
    let str = "";
    for (let i = 0; i < length; i++) {
      let random = randomValue(characters.length);
      str += characters.charAt(random);
    }
    setOutput(str);
  };

 const copyToClipboard = () => {
    setCopyText(output);
    copy(output);
    alert('Copied!')
 } 


    const testResult = zxcvbn(output);
    let num=testResult.score * 75/4;
  
    const createPassLabel = () => {
      switch(testResult.score) {
        case 0:
          return 'Very weak';
        case 1:
          return 'Weak';
        case 2:
          return 'Fear';
        case 3:
          return 'Good';
        case 4:
          return 'Strong';
        default:
          return '';
      }
    }
  
const funcProgressColor = () => {
      switch(testResult.score) {
        case 0:
          return '#e2e2e2';
        case 1:
          return '#EA1111';
        case 2:
          return '#FFAD00';
        case 3:
          return '#9bc158';
        case 4:
          return '#00b500';
        default:
          return 'none';
      }
    }
   
const changePasswordColor = () => ({
    
      width: `${num}%`,
      background: funcProgressColor(),
    })

 return (
    <div className="pwdapp">
      <div className="pwdcontainer">
        <input
          type="text"
          id="output"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        
        />
        <button className="i">
          <i className="fas fa-random" onClick={genPassword} />
        </button>
        <button className="i">
          <i className="far fa-copy" onClick={copyToClipboard}></i>
        </button>
        <div className="progress-bar" style={changePasswordColor()}></div> 
        <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
        <input
          type="range"
          id="length"
          min="10"
          max="22"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          onInput={genPassword}
        />
        <h3>{length}</h3>
      </div>
    </div>
  );
};

export default PwdGen;
