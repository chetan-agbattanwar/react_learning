import { useState } from 'react'
import './App.css'
import Day1 from './Components/Day1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Day1/>
  )
}

export default App
