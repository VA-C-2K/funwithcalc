import React,{useState} from 'react';
import './Pxtoemconv.css';


const Pxtoemconv = () => {
    const [basePx,setBasePx]=useState(16);
    const [px,setPx]=useState();
    const [em,setEm]=useState();


    let pxtoEm = () =>{
        if(px !=0){
            setEm(px/basePx);
        }
        else{
            setEm("");
        }
    }

    let emToPx = () => {
        if(em != 0){
            setPx(em*basePx);
        }
        else{
            setPx("");
        }
    }


    let calcEmpx = () =>{
        if(basePx != 0){
            emToPx();
        }
        else{
            setEm("");
            setPx("");
        }
    }
    document.body.style = `background: linear-gradient(#b7ff74 60%,#72db10 40%) fixed;`;
  return (
  <div className="pxapp">
      <div className="pxcontainer">
      <h1>PX to EM Converter</h1>
      <div className="pxwrapper">
          <label htmlFor="inp-base-px">Base Pixel Size:</label>
          <input type="number" value={basePx} onChange={(e)=>setBasePx(e.target.value)} onBlur={calcEmpx}/>
      </div>
      <div className="pxwrapper">
          <div className="inp-wrapper">
            <label htmlFor="inp-base-px">PX:</label>
            <input type="number"  placeholder="px" value={px} onChange={(e)=>setPx(e.target.value)} onBlur={pxtoEm}/>
          </div>
          <div className="inp-wrapper">
            <label htmlFor="inp-base-px">Em:</label>
            <input type="number"  placeholder="em" value={em} onChange={(e)=>setEm(e.target.value)} onBlur={emToPx}/>
          </div>
      </div>
      </div>
  </div>
  );
};

export default Pxtoemconv;
