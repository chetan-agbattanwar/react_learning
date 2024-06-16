import React, {useContext} from 'react'
import { myContext } from '../../../App'

function ChildComponent1() {

  const {name='ketan', age=25} = useContext(myContext)

  return (
    <div>
    <h1>Hello, {name}</h1>
    <p>You are {age} years old.</p>
</div>
  )
}

export default ChildComponent1