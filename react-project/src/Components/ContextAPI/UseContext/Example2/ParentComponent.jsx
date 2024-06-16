import React, { createContext } from 'react'
import ChildComponent from './ChildComponent'

export const myContextAPI = createContext()

function ParentComponent() {
  return (
    <myContextAPI.Provider value={{name:'chetan', age:27}}>
    <ChildComponent/>
    </myContextAPI.Provider>

  )
}

export default ParentComponent