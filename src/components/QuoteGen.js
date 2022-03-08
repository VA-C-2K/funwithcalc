import React,{useState} from 'react';
import './QuoteGen.css';
import copy from "copy-to-clipboard";  
import { useSpeechSynthesis } from 'react-speech-kit';
const QuoteGen = () => {
    const [quote,setQuote] = useState('Trust yourself. You know more than you think you do.');
    const [author,setAuthor] = useState('Benjamin Spock');
    const [copyText, setCopyText] = useState(`${quote} by ${author}`);
    const { speak } = useSpeechSynthesis();
    const url = "https://api.quotable.io/random";
  
    let getQuote = () =>{
        fetch(url).then(data => data.json())
        .then((item) => {

            setQuote(item.content)
            setAuthor(item.author)
           
        });
    };
    document.body.style = 'background: #f43543;';
    const copyToClipboard = () => {
        setCopyText(`${quote} by ${author}`);
        copy(`${quote} by ${author}`);
        alert('Quote Copied To Clipboard!')
     } 
   
    window.addEventListener("load",getQuote)
    return (
  <div className="quoapp">
      <div className="quoapp">
      <div className="quowrapper">
          <div className="quocontainer">
          <p id="quote">{quote}</p>
            <h3 id="author">{author}</h3>
            <i className="fas fa-volume-up" id="volume" onClick={() => speak({ text: `${quote} by ${author}` })}></i>
            <i className="fas fa-copy" id="copy" onClick={copyToClipboard}></i>
            <button id="btn" onClick={getQuote}>Get Quote</button>
          </div>
      </div>
  </div>
  </div>
  );
};

export default QuoteGen;
