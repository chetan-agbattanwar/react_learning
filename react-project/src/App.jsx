import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChanger from './Components/background-color-changer/BgChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BgChanger/>
  )
}

export default App
