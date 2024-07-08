import React, {useEffect, useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
      localStorage.clear()
      localStorage.setItem("count",count)
    },[count])

  return (
    <>
    <h1>Counter = {count}</h1>
    <button onClick={()=> setCount(count+1)}>+1</button>
    <button onClick={()=> setCount(0)}>ZERO</button>
    <button onClick={()=> setCount(count-1)}>-1</button>
    </>
  )
}

export default Counter