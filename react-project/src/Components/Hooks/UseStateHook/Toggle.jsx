import React, {useState} from 'react'
import ToggleScript from './ToggleScript'

function Toggle() {

    const [state, setState] = useState(true)

  return (
    <>
    <button onClick={()=>setState(!state)}>Toggle</button>
    {state ? <ToggleScript/> : ""}
    
    </>
  )
}

export default Toggle