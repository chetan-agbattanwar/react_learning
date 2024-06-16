import React, {useContext} from 'react'
import { myContextAPI } from './ParentComponent'

function GrandChildComponent() {

    const {name, age} = useContext(myContextAPI)

  return (
    <div>
        <h1>hi, {name}</h1>
        <p>you age is {age}</p>
    </div>
  )
}

export default GrandChildComponent