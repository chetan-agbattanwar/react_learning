import { createContext } from 'react'
import './App.css'
import ParentComponent1 from './Components/ContextAPI/UseContext/ParentComponent1'

export const myContext = createContext()

function App() {

  return (
    <>
    <myContext.Provider value={{name:'chetan', age:27}}>
    <ParentComponent1 />
    </myContext.Provider>
    
    <myContext.Provider value={{name:'ashu'}}>
    <ParentComponent1 />
    </myContext.Provider>
    </>
  )
}

export default App
