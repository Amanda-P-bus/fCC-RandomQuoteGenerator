import { useState } from 'react'

import quotes from "./assets/quotes.json"

import './App.css'

interface Quote {
  quote: string;
  author: string;
}



const getRandomQuote = (): Quote => {return quotes[Math.floor(Math.random()*quotes.length)]}

function App() {
const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return <div>
    <h1>Random Quote Machine</h1>
    <div id="quote-box">

      <div id="catch-quote">
        <div id="text">{quote.quote}</div>

        <div id="author">{quote.author}</div>

      </div>
            
      <button id="new-quote">New Quote</button>
      
      <button id="tweeter">
        <a  id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet Quote</a>
      </button>
      
    </div>
  </div>
}

export default App
