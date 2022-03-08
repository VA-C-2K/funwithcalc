import React,{useState} from 'react';
import Headimg from ".//assets/heads.svg"; 
import Tailimg from ".//assets/tails.svg"; 
import './Flipcoin.css';

const Flipcoin = () => {
    const [headcount,setHeadcount] = useState(0);
    const [tailcount,setTailcount] = useState(0);
    const [disable, setDisable] = useState(false);
   

    const flipB = () =>{
        let i  = Math.floor(Math.random()*2);
        document.querySelector(".coin").style.animation = "none";
        if(i){
            setTimeout(function(){
                document.querySelector(".coin").style.animation = "spin-heads 3s forwards";
            }, 100);
            setTimeout(function(){
                setHeadcount(headcount+1);
            },3000);
            
        }
        else{
            setTimeout(function(){
                document.querySelector(".coin").style.animation = "spin-tails 3s forwards";
            }, 100);
            setTimeout(function(){
                setTailcount(tailcount+1);
            },3000);
        }
        disableButton();
    }
    const disableButton = () =>{
        setDisable(true);
        setTimeout(function(){
            setDisable(false);
        },3000);
    }
    const resetB = () =>{
        document.querySelector(".coin").style.animation = "none";
        setHeadcount(0)
        setTailcount(0);
    }
    document.body.style=` background: linear-gradient(
        #575ce5 50%,
        #f9fbfc 50%
) fixed;`
  return (
    <div className="fcapp">
        <div className="fccontainer">
            <div className="stats">
                <p id="head-count">Heads:{headcount}</p>
                <p id="tails-count">Tails: {tailcount}</p>
            </div>
            <div className="coin" id="coin">
                <div className="heads">
                    <img src={Headimg} alt=""/>
                </div>
                <div className="tails">
                    <img src={Tailimg} alt=""/>
                </div>
            </div>
            <div className="buttons">
                <button id="flip-button" disabled={disable} onClick={flipB}>
                    Flip Coin
                </button>
                <button id="reset-button" onClick={resetB}>
                    Reset
                </button>
            </div>
        </div>
    </div>
  )
}

export default Flipcoin;