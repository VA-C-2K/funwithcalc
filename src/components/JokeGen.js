import React,{useState} from 'react';
import './JokeGen.css';
import copy from "copy-to-clipboard";  
import { useSpeechSynthesis } from 'react-speech-kit';
const JokeGen = () => {
    const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    const[joke,setJoke] = useState('How do you tell HTML from HTML5? - Try it out in Internet Explorer - Did it work? - No? - It\'s HTML5.')
    const [copyText, setCopyText] = useState(joke);
    const { speak } = useSpeechSynthesis();
    let getJoke = () =>{
       
        fetch(url)
        .then(data =>data.json())
        .then(item=>setJoke(item.joke));
        
    }
    const copyToClipboard = () => {
        setCopyText(joke);
        copy(joke);
        alert('Joke Copied To Clipboard!')
     } 
    document.body.style = 'background: #fab22e;';
    window.addEventListener("load",getJoke);

    const mystyle = {
            fontSize:"16px",
            color:"rgb(255, 249, 249)",
            fontWeight:"400",
            textAlign: "center",
            wordWrap:"break-word",
            lineHeight: "35px",
            margin:"20px 0",
    }
  return (
  <div className="jkapp">
      <div className="jkwrapper">
            <i className="fas fa-volume-up" id="volume" onClick={() => speak({ text: joke})}></i>
            <i className="fas fa-copy" id="copy" onClick={copyToClipboard}></i>
            <span>&#128514;</span>
            <div className="jokeContainer" style={mystyle}>{joke}</div>
            <div className="buttons">
             <button onClick={getJoke}>Get Random Joke</button>
            </div>
      </div>
  </div>
  );
};

export default JokeGen;
