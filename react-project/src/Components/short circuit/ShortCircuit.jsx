import React, { useState } from 'react'

function ShortCircuit() {

    const [toggle, setToggle] = useState('please Login')
    const [user, setUser] = useState('')

    const handleToggle = (toggle)=> {
        setUser('')
        return (toggle === 'please Login') ? setToggle('You are Logged in') : setToggle('please Login')
    }

    const handleSetUser = ()=> {
        setToggle('You are Logged in')
        setUser('Hello, Chetan')
    }

    const handleClearUser = ()=> {
        setToggle('please Login')
        setUser('')
    }

  return (
    <div className='container'>
        <h1>Welcome to the ShortCircuit Evaluation</h1>
        <p>{toggle}</p>
        <p>{user}</p>
        <div className="buttons">
        <button onClick={()=>handleToggle(toggle)}>Toggle Login State</button>
        <button onClick={handleSetUser}>Set User</button>
        <button onClick={handleClearUser}>Clear User</button>
        </div>
    </div>
  )
}

export default ShortCircuit