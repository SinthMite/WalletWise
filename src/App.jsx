import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LogIn from './LogIn/LogIn.jsx';
import Header from './Header/Header.jsx';
import UserDefined from './UserDefined/UserDefined.jsx';

function App({ Firebase }) {
  const [logIn, setLogIn] = useState(true);

  return (
    <Router>
      <Routes>
        {!logIn && (
          <>
            <Route path="/WalletWise" element={<LogIn Firebase={Firebase} setLogIn={setLogIn} />} />
            <Route path="/WalletWise/Home" element={<Navigate to="/WalletWise" />} />
          </>
        )}
        {logIn && (
          <>
            <Route path="/WalletWise" element={<Header Firebase={Firebase} setLogIn={setLogIn} />} />
            <Route path="/WalletWise/Home" element={<Header Firebase={Firebase} setLogIn={setLogIn} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
