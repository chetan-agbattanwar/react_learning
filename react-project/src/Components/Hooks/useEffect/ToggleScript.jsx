import React, { useState, useEffect } from 'react'

function ToggleScript() {

    const [count, setCount] = useState(0)

    const Decrement = ()=>{
      if (count>0){
        setCount(count-1)
      }
    }

    useEffect(() => {
        console.log(`count=${count}`);
    }, [count])
    

  return (
    <>
    <h1>count = {count}</h1>
    <button style={{backgroundColor:"yellow"}} onClick={()=>setCount(count+1)}>+1</button>
    <button style={{backgroundColor:"red"}} onClick={Decrement}>-1</button>
    </>
  )
}

export default ToggleScript