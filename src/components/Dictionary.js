import React,{useState} from 'react';
import './Dictionary.css';
import { useSpeechSynthesis } from 'react-speech-kit';

const Dictionary = () => {
    const [inputWord,setInputWord] = useState('');
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const [result,setResult] = useState('');
    const { speak } = useSpeechSynthesis();
    const search = () =>{
        fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setResult( `
            <div id="word">
            <h3>${inputWord.toUpperCase()}</h3>
                </div>
                <div id="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                </div>
                <p id="wordMeaning">
                ${data[0].meanings[0].definitions[0].definition}
                </p>
                <div id="details">
                    <p>${data[0].meanings[1].partOfSpeech}</p>
                </div>
                <p id="wordMeaning">
                ${data[0].meanings[1].definitions[0].definition}
                </p>
               ` )
        })
        .catch(() => {
             setResult(`<h3 id="error">Couldn't Find The Word</h3>`);
        });
    }
    document.body.style = 'background: #ae9cff';
  return (
    <div className="dicapp">
        <div className="diccontainer">
        <i className="fas fa-volume-up" onClick={() => speak({ text: inputWord.toUpperCase()})}></i>
        <div className="search-box">
            <input
                type="text"
                placeholder="Type the word here.."
                id="inp-word"
                value={inputWord}
                onInput={(e) => setInputWord(e.target.value)}
            />
            <button id="search-btn" onClick={search}>Search</button>
            
            </div>
            <div className="dicresult" id="result" dangerouslySetInnerHTML={{ __html: `${result}` }}></div>
        </div>
    </div>
    );
};

export default Dictionary;
