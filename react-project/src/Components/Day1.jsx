import React from 'react'
import './style.css'

let style = {color:"orange", backgroundColor:"black"}

function Day1() {
  return (
    <>
    <h1 style={{color:"red", backgroundColor:"black"}}>inline css</h1>
    <h2 style={style}>internal css</h2>
    <h3>external css</h3>
    </>
  )
}

export default Day1