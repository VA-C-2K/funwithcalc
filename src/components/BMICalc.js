import React,{useState} from 'react';
import './BMICalc.css';

const BMICalc = () => {

    const [weight,setWeight] = useState(0)
    const [height,setHeight] = useState(0)
    const [bmi,setBmi] = useState('')
    const [message,setMessage] = useState('')
  
    
  
    let calBmi = (e) => {
      e.preventDefault();
      if(weight === 0 || height === 0){
        alert("Please enter a valid weight and height!")
      }
      else{
        let mheight =height/100
        let bmi = (weight/(mheight*mheight))
        setBmi(bmi.toFixed(1))
  
        if (bmi<24){
          setMessage("You are underweight")
        }
        else if(bmi >24 && bmi < 30){
          setMessage("You are a healthy weight")
        }
        else if(bmi>30){
          setMessage("You are overweight")
        }
  
      }
    }
  
    let imgSrc;
    if(bmi<1){
      imgSrc = null
    }
    else if (bmi<24){
      imgSrc = require('.//assets/underweight.png')
    }
    else if(bmi >24 && bmi < 30){
      imgSrc = require('.//assets/healthy.png')
    }
    else if(bmi>30){
      imgSrc = require('.//assets/overweight.png')
    }
    document.body.style = 'background: #fff;';
    let reload = () =>{
        window.location.reload()
      }
      return (
        <div className="bmiapp">
          <div className="bmicontainer">
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calBmi}>
            <div className="input">
              <label>Weight (kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div className="input">
              <label>Height (cm)</label>
              <input value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
              <button className="btn_age" type="submit">Submit</button>
              <button className="btn_age btn-outline"  onClick={reload} type="submit">Reload</button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className='img-container'>
            <img src={imgSrc} alt=''></img>
          </div>
          </div>
        </div>
      );
};

export default BMICalc;
