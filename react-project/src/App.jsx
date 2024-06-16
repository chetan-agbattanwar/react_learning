import './App.css'
import ParentComponent from './Components/ContextAPI/UseContext/Example2/ParentComponent'

export const myContext = createContext()

function App() {

  return (
    <>
    <ParentComponent />
    </>
  )
}

export default App
