import UserContext from "./UserContext";

import React, { useState } from 'react'

// function UserContextProvider(props) {
//     console.log(props.children);
//     const [user, setUser] = useState(null)
//   return (
//     <UserContext.Provider value={{user, setUser}}>
//         {props.children}
//     </UserContext.Provider>
//   )

function UserContextProvider({children}) {
    console.log(children);
    const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider