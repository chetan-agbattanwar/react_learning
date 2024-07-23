import React from 'react'
import { useState, useEffect } from 'react'

function HowToFetchAPI() {

    const [apiData, setApiData ] = useState([])
    const API = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(API).then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setApiData(data)
        })
        .catch((error)=>console.log(error))
    }, [])
    

  return (
    <ul>
        {
            apiData.map((currentData)=>{
                return <li key={currentData.id}> {currentData.title} </li>
            })
        }
    </ul>
  )
}

export default HowToFetchAPI