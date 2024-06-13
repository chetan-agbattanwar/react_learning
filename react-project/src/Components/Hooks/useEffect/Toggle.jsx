import React, {useEffect, useState} from 'react'
import ToggleScript from './ToggleScript'

function Toggle() {

    const [state, setState] = useState(true)
    
    useEffect(()=>{
        console.log('Toggle state changed')
    },[state])

  return (
    <>
    <button onClick={()=>setState(!state)}>Toggle</button>
    {state ? <ToggleScript/> : ""}
    
    </>
  )
}

export default Toggle