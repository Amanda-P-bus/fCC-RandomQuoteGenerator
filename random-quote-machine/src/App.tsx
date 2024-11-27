import { useState } from 'react'


import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {return quotes }

function App() {
const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return "hello"
}

export default App
