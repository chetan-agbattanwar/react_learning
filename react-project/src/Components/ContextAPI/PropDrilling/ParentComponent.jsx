import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(props) {
    console.log(props);
  return (
    <div>
        <ChildComponent name={props.name} age={props.age} />
    </div>
  )
}

export default ParentComponent