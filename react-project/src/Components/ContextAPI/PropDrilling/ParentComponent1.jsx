import React from 'react'
import ChildComponent1 from './ChildComponent1'

function ParentComponent1({name, age}) {
    return (
        <div>
            <ChildComponent1 name={name} age={age} />
        </div>
    )
}

export default ParentComponent1