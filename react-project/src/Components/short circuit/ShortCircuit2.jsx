import React, { useState } from 'react'

function ShortCircuit2() {

    const [isUserLogin, setIsUserLogin ] = useState(false)
    const [user, setUser] = useState('')

  return (
    <div className='container'>
        <h1>Welcome to the ShortCircuit Evaluation</h1>
        {isUserLogin && <p>You are Login</p> }
        {user ?? }
        <div className="buttons">
        <button onClick={()=>setIsUserLogin(!isUserLogin)}>Toggle Login State</button>
        <button onClick={()=>setUser('hello Chetan')}>Set User</button>
        <button onClick={()=>setUser('')}>Clear User</button>
        </div>
    </div>
  )
}

export default ShortCircuit2