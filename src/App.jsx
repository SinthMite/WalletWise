import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './LogIn/LogIn.jsx';
import Header from './Header/Header.jsx';
import UserDefined from './UserDefined/UserDefined.jsx';
function App({ Firebase }) {
  const [logIn, setLogIn] = useState(false);

  return (
    <Router>
      <Routes>
        {!logIn &&<Route path="/" exact element={<LogIn Firebase={Firebase} setLogIn={setLogIn} />} />}
        {logIn &&<Route path='/Home' element={<Header Firebase={Firebase} setLogIn={setLogIn} />} />}
      </Routes>
      {/* Define more routes here if needed */}
    </Router>
  );
}

export default App;