import React, {useState} from 'react'

function Counter2() {

    const [count, setCount] = useState(0)

    const increaseByOne = ()=>{
        setCount(count+1)
    }

    const zero = ()=>{
        setCount(0)
    }

    const decreaseByOne = ()=>{
        setCount(count-1)
    }

  return (
    <>
    <h1>Counte = {count}</h1>
    <button onClick={increaseByOne}>+1</button>
    <button onClick={zero}>ZERO</button>
    <button onClick={decreaseByOne}>-1</button>
    </>
  )
}

export default Counter2