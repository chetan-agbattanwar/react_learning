import React from 'react'

function EventPropagations() {

    const handleGrandParent = ()=> {
        console.log("GrandParent");
    }

    const handleParent = ()=> {
        console.log("Parent");
    }

    const handleChild = (event)=> {
        console.log(event);
        event.stopPropagation() // for stoping event propagation
        console.log("child");
    }

    // return (
    //     <div onClick={handleGrandParent}>
    //         <div onClick={handleParent}>
    //             <button onClick={handleChild}>
    //                 Click Me
    //             </button>
    //         </div>
    //     </div>
    // )

    return (
        <div onClickCapture={handleGrandParent}>
            <div onClickCapture={handleParent}>
                <button onClickCapture={handleChild}>
                    Click Me
                </button>
            </div>
        </div>
    )
}

export default EventPropagations