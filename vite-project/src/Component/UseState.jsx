import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)

  return (
    <>
    <h2>count = {count}</h2>
    <button onClick={()=>setCount(count+1)}>+1</button>
    <button onClick={()=>setCount(0)}>Zero</button>
    <button onClick={()=>setCount(count-1)}>-1</button>
    </>
  )
}

export default UseState