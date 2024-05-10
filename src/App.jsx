import React, { useState } from 'react'
import './App.css'
import LogIn from './LogIn/LogIn.jsx'
import Header from './Header/Header.jsx'
import UserDefined from './UserDefined/UserDefined.jsx'
function App({ Firebase }) {
  const [logIn, setLogIn] = useState(false);

  return (
    <>
      {!logIn &&(<LogIn Firebase={Firebase} setLogIn={setLogIn}/>
      )}
      {logIn &&(<Header Firebase={Firebase} setLogIn={setLogIn}/>
      )}
    </>
  )
}

export default App