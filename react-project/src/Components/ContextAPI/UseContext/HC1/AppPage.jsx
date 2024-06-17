import React from 'react'
import UserContextProvider from '../../../../context/UserContextProvider'
import Login from './Login'
import Profile from './Profile'

function AppPage() {
  return (
    <UserContextProvider>
        <h1>hey, Context API</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default AppPage