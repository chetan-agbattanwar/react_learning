import React, { createContext } from 'react'
import Child from './Child'

export const myContext = createContext()

function Parent() {
  return (
    <myContext.Provider value={{name:'chetan', age:27}}>
        <Child/>
    </myContext.Provider>
  )
}

export default Parent