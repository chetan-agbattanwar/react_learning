import React, { useState } from 'react'

function HowNotToFetchAPI() {

  const [apiData, setApiData] = useState([])

  const API = 'https://jsonplaceholder.typicode.com/posts'

  fetch(API)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    setApiData(data)
  })
  .catch((error)=>console.log(error))

  return (
    <>
    <ul>
      {
        apiData.map((currentElement)=>{
          return <li key={currentElement.id}> {currentElement.title} </li>
        })
      }
    </ul>
    </>
  )
}

export default HowNotToFetchAPI