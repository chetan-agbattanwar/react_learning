import React, { useState, useEffect } from 'react'

function DataFetchingUsingAsyncAwait(){

    const [apiData, setApiData ] = useState([])
    const API = 'https://jsonplaceholder.typicode.com/posts'

    const fetchData = async()=>{
        try {
            const response = await fetch(API)
            const data = await response.json()
            setApiData(data)
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <ul>
        {
            apiData.map((currentElemnt)=>{
                return <li key={currentElemnt.id}>{currentElemnt.title}</li>
            })
        }
    </ul>
  )
}

export default DataFetchingUsingAsyncAwait