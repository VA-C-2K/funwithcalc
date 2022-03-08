import React,{useState} from 'react';
import "./TipCalc.css";
const TipCalc = () => {
    const [bill,setBill] = useState('0.00');
    const [tipAmount,setTipAmount] = useState(0);
    const [totalAmount,setTotalAmount] = useState(0);
    const [noofpeople,setNoofpeople] = useState(1);
    const [tipPerc,setTipPerc] = useState(15);
    const [tipPerPerson,setTipPerPerson] = useState(0);
    const [totalPerPerson,setTotalPerPerson] = useState(0);

    const calculateTip = () =>{
       
        let billa = parseFloat(bill);
        let totalTip = parseFloat((billa * (tipPerc/100)).toFixed(2));
        let totalAmt = parseFloat((billa + totalTip).toFixed(2));
        let tipPerPersontemp = (totalTip / noofpeople).toFixed(2);
        let totalPerPersonTemp = (totalAmt / noofpeople).toFixed(2);
        
        setNoofpeople(noofpeople)
        setTipPerc(tipPerc)
        setTotalAmount(totalAmt);
        setTipAmount(totalTip);
        setTipPerPerson(tipPerPersontemp);
        setTotalPerPerson(totalPerPersonTemp);
    }
    document.body.style=` background: linear-gradient(
        #6f6df4 50%,
        #4c4af4 50%
    );`;
    
  return (
  <div className='apptip'>
      <div className="tipcontainer">
      <section>
            <label htmlFor="bill" className="lbl">
                Bill
            </label>
            <div className="input-box">
                <span>₹</span><input type="number" value={bill} id="bill" className="val" onChange={(e) => setBill(e.target.value)}/>
                <i className="fas fa-calculator" onClick={calculateTip}></i>
            </div>
      <div className="tipwrapper">
          <span className="lbl">Tip</span>
            <span id="tip-amount" className='val'>
                ₹{tipAmount}
            </span>
      </div>
      <hr/>
        <div className="tipwrapper">
            <span className="lbl">Total Amount</span>
            <span id="total-amount" className="val">
                ₹{totalAmount}
            </span>
            </div>
      </section>
      <section>
      <div className="tipwrapper">
            <label htmlFor="tip" className="lbl">
                Tip %
            </label>
            <span id="tip-percent" className="val">
                {tipPerc}
            </span>
            </div>
            <input type="range" min="0" id="tip" onChange={(e)=>setTipPerc(e.target.value)} value={tipPerc} onInput={calculateTip}/>
            <div className="tipwrapper">
                <label htmlFor="no-of-people" className="lbl">
                    No. Of People
                </label>
                <span id="split-num" className="val">
                    {noofpeople}
                </span>
            </div>
            <input type="range" min="1" max="25" id="no-of-people" onChange={(e)=>setNoofpeople(e.target.value)} value={noofpeople} onInput={calculateTip}/>
      </section>
      <section>
            <div className="tipwrapper">
                <span className="lbl">
                    Tip Per Person
                </span>
                <span id="tip-per-person" className="val">
                    ₹{tipPerPerson}
                </span>
            </div>
            <div className="tipwrapper">
                <span className="lbl">
                    Total Per Person
                </span>
                <span id="total-per-person" className="val">
                    ₹{totalPerPerson}
                </span>
            </div>
        </section>
        </div>
  </div>
  );
};

export default TipCalc;
