import React,{useState} from 'react';
import './GradientGen.css';
import copy from "copy-to-clipboard";  

const GradientGen = () => {
    const [output,setOutput] = useState('');
    const [copyText, setCopyText] = useState(output);
    let hexString= "0123456789abcdef";

    let randomColor = () => {
        let hexCode = "#";
        for(let i=0; i<6; i++){
            hexCode += hexString[Math.floor(Math.random() * hexString.length)];
        }
        return hexCode;
    }
    let generateGrad = () => {
        let colorOne = randomColor();
        let colorTwo = randomColor();
        let angle = Math.floor(Math.random() * 360);
        document.querySelector("#output-color").style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
        setOutput(`background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`);
    }

    const copyToClipboard = () => {
        setCopyText(output);
        copy(output);
        alert('Code Copied To Clipboard!')
     } 
    window.onload = generateGrad;
  return (
  <div className="gradapp">
      <div className="gradwrapper">
          <div id="output-color"></div>
          <input type="text" id="output-code" value={output} readOnly/>
          <div className="btn-container">
              <button id="generate-btn" onClick={generateGrad}>Generate</button>
              <button id="copt-btn" onClick={copyToClipboard}>Copy</button>
          </div>
      </div>
  </div>
  );
};

export default GradientGen;
