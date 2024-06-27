import React from 'react'

function EvenHandling() {

    // const handleButton = ()=> alert('hey, I am chetan')
    const handleButton = (event)=> {
        alert('hey, I am chetan')
        console.log(event);
        console.log(event.type);
        console.log(event.target);
    }

    const handleButton2 = (event)=>{
        alert('hey, I am chetan')
        console.log(event);
        console.log(event.type);
        console.log(event.target);
    }

    const handleUser = (user='user')=>{
        console.log(`hello ${user}`);
    }


  return (
    <>
    <button onClick={handleButton}>Click Me</button>
    <button onClick={(event)=>handleButton2(event)}>Click Me 2</button>
    <button onClick={(event)=>console.log(event)}>Inline Function</button>
    <button onClick={(event)=>{
        alert('hey, I am chetan')
        console.log(event);
        console.log(event.type);
        console.log(event.target);
    }}>Inline Function 2</button>
    <button onClick={()=>handleUser('chetan')}>click me </button>
    <button onClick={()=>handleUser()}>click me </button>
    </>
  )
}

export default EvenHandling