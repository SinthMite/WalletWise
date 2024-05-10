import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Firebase from './Firebase/Firebase.jsx';

const { db, auth, app } = Firebase;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App Firebase={Firebase}/>
  </React.StrictMode>,
);