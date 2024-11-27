import { useState } from 'react'
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"

import quotes from "./assets/quotes.json"

import './App.css'
import { BiAlignRight } from 'react-icons/bi';

interface Quote {
  quote: string;
  author: string;
}


const getRandomQuote = (): Quote => {return quotes[Math.floor(Math.random()*quotes.length)]}

const getRandomColor = (): string =>
  {const getR = Math.floor(Math.random()*150);
   const getB = Math.floor(Math.random()*150);
   const getG = Math.floor(Math.random()*150); 
   return `rgb(${getR}, ${getB}, ${getG})`
  }

const transition = "all 1s";


function App() {

const [quote, setQuote] = useState<Quote>(getRandomQuote());

const [randomColor, setRandomColor] = useState<string>(getRandomColor());

const changeQuote = () => {setQuote(getRandomQuote()); setRandomColor(getRandomColor())} ;


  return   (
  
  <div id="mainDiv" className="background" style={{backgroundColor: randomColor}}>

    <div id="mainTwo" >
 
    <h1>Random Quote Machine</h1>
    <div id="quote-box">

      <div id="catch-quote">
        <FaQuoteLeft size={30} style={{color: randomColor, marginLeft: "3vh", transition}} />
        <div id="text">{quote.quote}
        </div>
        
        <FaQuoteRight size={30} style={{marginLeft:"68vh", color: randomColor, transition}} /> 
        
        <div id="author" style={{backgroundColor: randomColor, transition}}>-{quote.author}</div>
      </div>
            <div id="holdBtns">
      <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
        <button id="maybe">
        <a  id="tweet-quote" target="_blank" href="twitter.com/intent/tweet"><FaTwitter style={{marginBottom: "-.5vh", paddingLeft: "1vh"}} /></a>
        </button>  
      </div>
      </div>
    </div>
  </div>)
}

export default App
