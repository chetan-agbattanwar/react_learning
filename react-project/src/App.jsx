import './App.css'
import ParentComponent from './Components/ContextAPI/PropDrilling/ParentComponent'
import ParentComponent1 from './Components/ContextAPI/PropDrilling/ParentComponent1'


function App() {

  return (
    <>
    {/* <ParentComponent name='chetan' age={27} />
    <ParentComponent name='chetan' />
    <ParentComponent age={30} /> */}

    <ParentComponent1 name='chetan' age={27} />
    <ParentComponent1 name='chetan' />
    <ParentComponent1 age={30} />
    </>
  )
}

export default App
