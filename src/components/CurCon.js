import React,{useState} from 'react';
import './CurCon.css';
import country_list from country_list;

const CurCon = () => {
    const [amount,setAmount] = useState(1);
  return (
    <div className="appcur">
        <div className="wrappercur">
        <header>Currency Convertor</header>
        <form action="">
            <div className="amount">
                <p>Enter Amount</p>
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="drop-list">
                <div className="from">
                    <p>From</p>
                    <div className='select-box'>
                        <img src="https://flagcdn.com/48x36/us.png" alt="flag" />
                        <select></select>
                    </div>
                </div>
                <div className="icon"><i className="fas fa-exchange-alt"></i></div>
                <div className="to">
                    <p>To</p>
                    <div className="select-box">
                    <img src="https://flagcdn.com/48x36/ind.png" alt="flag" />
                    <select></select>
                    </div>
                </div>
            </div>
            <div className="exchange-rate">Getting exchange rate...</div>
                <button>Get Exchange Rate</button>
        </form>
        </div>
    </div>
  )
}

export default CurCon;