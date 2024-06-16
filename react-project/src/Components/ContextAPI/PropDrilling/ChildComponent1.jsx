import React from 'react'

function ChildComponent1({name='ketan', age=25}) {
  return (
    <div>
    <h1>Hello, {name}</h1>
    <p>You are {age} years old.</p>
</div>
  )
}

export default ChildComponent1