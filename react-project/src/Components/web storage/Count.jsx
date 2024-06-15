import React, {useState} from 'react'

function Count() {

    const [count, setCount] = useState(0)
    // localStorage.setItem("count", count)
    sessionStorage.setItem("count", count)
    // console.log(`count = ${localStorage.getItem("count")}`);

    const incrementByOne = ()=> {
        setCount(count+1)
        // localStorage.setItem("count", count)
        sessionStorage.setItem("count", count)
        // console.log(`incrementByOne = ${localStorage.getItem("count")}`);
    }

  return (
    <>
    <h1>count = {count}</h1>
    <button onClick={incrementByOne}>+1</button>

    <button onClick={()=>{
        setCount(0)
        // localStorage.setItem("count", count)
        sessionStorage.setItem("count", count)
        // console.log(`zero = ${localStorage.getItem("count")}`);
    }}>ZERO</button>

    <button onClick={()=>{
        setCount(count-1)
        // localStorage.setItem("count", count)
        sessionStorage.setItem("count", count)
        // console.log(`decrementByOne = ${localStorage.getItem("count")}`);
    }}>-1</button>
    </>
  )
}

export default Count