import React, { useContext } from 'react'
import { myContext } from './Parent'

function Child() {
    const {name, age} = useContext(myContext)
  return (
    <>
    <h2>My name is {name}</h2>
    <h3> and My age is {age}</h3>
    </>
  )
}

export default Child