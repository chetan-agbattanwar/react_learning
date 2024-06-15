import React from 'react'

// local storage in js
// localStorage.setItem('key','value')
// localStorage.setItem('key1','value1')
// localStorage.setItem('key2','value2')

// console.log(localStorage.getItem('key'));

// localStorage.removeItem('key')
// console.log(localStorage.getItem('key'));

// localStorage.clear()

// sessionStorage in js
// sessionStorage.setItem("name","chetan")
// sessionStorage.setItem("age",27)
// sessionStorage.setItem("address","warora")

// console.log(sessionStorage.getItem("name"));

// sessionStorage.removeItem('age')

// sessionStorage.clear()

function WebStorage() {
  return (
    <>
    {localStorage.setItem('age',27)}
    {sessionStorage.setItem('age',27)}
    {localStorage.removeItem('age')}
    {sessionStorage.clear()}
    </>
  )
}

export default WebStorage