import React,{useState} from 'react';
import './RGB2Hex.css';
import rgbHex from 'rgb-hex';
import hexRgb from 'hex-rgb';

const RGb2Hex = () => {
    const [rgb,setRgb] = useState('')
    const [hex,setHex] = useState('')

    const getRgb = () =>{
        let rgbo = hexRgb(hex ,{format: 'css'})
       
        setRgb(rgbo)
    }
    const getHex = () =>{
        let hexo = rgbHex(rgb)
        setHex(hexo)
    }
    document.body.style = `background:${rgb}`;
    document.body.style = `background:${`#`+hex}`;
    const mystyle = {
        backgroundColor:`${rgb}`,
        backgroundColor:`${`#`+hex}`,
      };
  return (
  <div className="rhapp" id="app" style={mystyle}>
      <div className="rhcontainer">
            <div className='rhwrapper'>
                <label htmlFor='rgb'>RGB</label>
                <input type="text" id="rgb" maxLength="20" placeholder="Enter RGB value" value={rgb} onChange={(e) => setRgb(e.target.value)} onFocus={getHex}/>
            </div>
            <div className='rhwrapper'>
                <label htmlFor='hex'>HEX</label>
                <input type="text" maxLength="7" id="hex" placeholder="Enter HEX value" value={hex} onChange={(e) => setHex(e.target.value)} onFocus={getRgb}/>
            </div>
      </div>
  </div>
  );
};

export default RGb2Hex;
