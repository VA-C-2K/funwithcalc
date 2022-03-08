import React,{useState} from 'react';
import './RPS.css';

const RPS = () => {
    const  [computerscore,setComputerScore] = useState(0);
    const  [usercore,setUserScore] = useState(0);
    const [result,setResult]= useState("");
    const [userchoice,setUserChoice]= useState("");
    const [compchoice,setCompChoice]= useState("");
    let choices_object = {
        'rock' : {
            'rock' : 'draw',
            'scissor' : 'win',
            'paper' : 'lose'
        },
        'scissor' : {
            'rock' : 'lose',
            'scissor' : 'draw',
            'paper' : 'win'
        },
        'paper' : {
            'rock' : 'win',
            'scissor' : 'lose',
            'paper' : 'draw'
        }
    
    }


    let checker = (input) =>{
        let choices = ["rock","paper","scissor"];
        let num = Math.floor(Math.random()*3);
        setCompChoice( `Computer choose <span> ${choices[num].toUpperCase()} </span>`);
        setUserChoice(` You choose <span> ${input.toUpperCase()} </span>`);
        let computer_choice = choices[num];
        switch(choices_object[input][computer_choice]){
            case 'win':
                document.querySelector("#result").style.cssText="background-color: #cefdce; color: #689f38";
                setResult(`You WIN!`);
                setUserScore(usercore+1)
                break;
            case 'lose':
                document.querySelector("#result").style.cssText="background-color: #ffdde0; color: #d32f2f";
                setResult(`You LOSE!`);
                setComputerScore(computerscore+1)
                break;
            default:
                document.querySelector("#result").style.cssText="background-color: #e5e5e5; color: #808080";
                setResult(`DRAW!`);
                break;

        }
        
    }




  return(
       <div className='rpsapp'>
           <div className='rpscontainer'>
               <div className='scores'>
                <p>
                    Computer:<span dangerouslySetInnerHTML={{ __html: `${computerscore}` }}></span>
                </p>
                <p>
                    You:<span  dangerouslySetInnerHTML={{ __html: `${usercore}` }}></span>
                </p>
               </div>
               <div className='weapons'>
                    <button onClick={() =>checker('rock')}>
                        <i className="far fa-hand-rock"></i>
                    </button>
                    <button onClick={() =>checker('paper')}>
                        <i className="far fa-hand-paper"></i>
                    </button>
                    <button onClick={() =>checker('scissor')}>
                        <i className="far fa-hand-scissors"></i>
                    </button>
               </div>
               <div className="details">
                    <p  dangerouslySetInnerHTML={{ __html: `${userchoice}` }}></p>
                    <p  dangerouslySetInnerHTML={{ __html: `${compchoice}` }}></p>
                    <p  id ="result"  dangerouslySetInnerHTML={{ __html: `${result}` }}></p>
                </div>
           </div>
       </div>
    );
};

export default RPS;
