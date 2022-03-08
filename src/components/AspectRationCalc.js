import React,{useState} from 'react';
import './AspectRationCalc.css';

const AspectRationCalc = () => {
  
  const [ratioWidth,setRatioWidth] = useState(16);
  const [ratioHeight,setRatioHeight] = useState(9);
  const [width,setWidth] = useState(1280);
  const [height,setHeight] = useState(720);
  let aspectRatio = ratioWidth / ratioHeight;
  let calculateWidth = () =>{
    setWidth(parseFloat((height * aspectRatio).toFixed(2)));
  }
  let calculateHeight = () =>{
    setWidth(parseFloat((width * aspectRatio).toFixed(2)));
  }
  document.body.style = 'background: #895cf3;';
  return (
    <div className='asptapp'>
      <div className="asptcontainer">
        <h2>
          <span>ASPECT RATIO</span>
          <span className="cal">CALCULATOR</span>
        </h2>
        <div className='asptwrapper-1'>
            <input type="number" id="ration-width" value={ratioWidth} onChange={(e) => setRatioWidth(e.target.value)} onInput={calculateWidth}/><span className='colon'>:</span>
            <input type="number" id="ration-height" value={ratioHeight} onChange={(e) => setRatioHeight(e.target.value)} onInput={calculateHeight} />
        </div>
        <div className="asptbox"> 
          <div className='asptwrapper-2'>
              <label htmlFor="width">Width:</label>
              <input type="number" id="width" value={width} onChange={(e) => setWidth(e.target.value)} onInput={calculateWidth} />
          </div>
          <div className='asptwrapper-3'>
              <label htmlFor="height">Height:</label>
              <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} onInput={calculateHeight} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AspectRationCalc;
