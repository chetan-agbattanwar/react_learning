// paasing events as a props
import React from 'react'

function EventProps() {

    const handleWelcomeUser = (user)=> {
        alert(`hey, ${user}`)
    }

    const handleHover = ()=> alert('thanks for hovering me')

  return (
    <>
    <WelcomeUser 
    onClick={()=>handleWelcomeUser('chetan')} 
    onMouseEnter={handleHover} />
    </>
  )
}

// const WelcomeUser = (props)=> {
//     const handleGreeting = ()=> {
//         console.log('welcome user');
//         props.onClick()
//     }

//     return(
//         <>
//         <button onClick={props.onClick}>Click Me</button>
//         <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
//         <button onClick={handleGreeting}>Greeting Me</button>
//         </>
//     )
// }

// const WelcomeUser = (props)=> {
//     const {onClick, onMouseEnter} = props

//     const handleGreeting = ()=> {
//         console.log('welcome user');
//         onClick()
//     }

//     return(
//         <>
//         <button onClick={onClick}>Click Me</button>
//         <button onMouseEnter={onMouseEnter}>Hover Me</button>
//         <button onClick={handleGreeting}>Greeting Me</button>
//         </>
//     )
// }

const WelcomeUser = ({onClick, onMouseEnter})=> {

    const handleGreeting = ()=> {
        console.log('welcome user');
        onClick()
    }

    return(
        <>
        <button onClick={onClick}>Click Me</button>
        <button onMouseEnter={onMouseEnter}>Hover Me</button>
        <button onClick={handleGreeting}>Greeting Me</button>
        </>
    )
}

export default EventProps