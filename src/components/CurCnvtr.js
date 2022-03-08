import React,{useState,useEffect} from 'react'
import axios from "axios";
import './CurCnvtr.css';
import CurrencyInput from './CurrencyInput';

const CurCnvtr = () => {
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('INR');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        axios.get('http://data.fixer.io/api/latest?access_key=83f38181f5557e47be5d937e8aacd19c')
          .then(response => {
            setRates(response.data.rates);
          })
      }, []);

      useEffect(() => {
        if (!!rates) {
          function init() {
            handleAmount1Change(1);
          }
          init();
        }
      }, [rates]);

      function format(number) {
        return number.toFixed(4);
      }
    
      function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
      }
    
      function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
      }
    
      function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
      }
    
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
      }
      document.body.style = 'background: #161616;';
  return (
    <div className='appcur'>
    <div className="curcon">
        <h1>Currency Convertor</h1>
        <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />
    </div></div>
  )
}

export default CurCnvtr;