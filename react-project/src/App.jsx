import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyLoader from './Components/loader/MyLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyLoader/>
  )
}

export default App
