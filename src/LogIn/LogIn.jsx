import './LogIn.css';
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import Phone from '../assets/Phone.png'

export default function LogIn({Firebase, setLogIn}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }

    const DefaultSubmition=(event)=>{
        event.preventDefault();
    }
    function authSignWithGoogle(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(Firebase.auth, provider)
       .then((result) => {
        setLogIn(true);
        window.localStorage.setItem('LogInValue', JSON.stringify(true));
    })
    .catch((error)=>{
        console.log("Google Auth Error: ",error);
    })
}

function authSignInWithEmail() {
    signInWithEmailAndPassword(firebase.auth, email, password)
        .then((userCredential) => {
            setLogIn(true); // Set loggedIn state to true on successful login
            window.localStorage.setItem('LogInValue', JSON.stringify(true)); // Update local storage value
            setEmail('');
            setPassword('');
        }).catch((error) => {
            console.error("Email Auth Error:", error);
        });
};

function authCreateAccountWithEmail() {
    createUserWithEmailAndPassword(firebase.auth, email, password)
        .then((userCredential) => {
            setEmail('');
            setPassword('');
        }).catch((error) => {
            console.error("Create Account Error:", error);
        });
};

function authSignOut() {
    signOut(firebase.auth)
        .then(() => {
            setLogIn(false); // Set loggedIn state to false on logout
            window.localStorage.setItem('LogInValue', JSON.stringify(false)); // Update local storage value
        }).catch((error) => {
            console.error("Sign Out Error:", error);
        });
};

function guestLogIn() {
    setLogIn(true); // Set loggedIn state to true for guest login
}
useEffect(() => {
    const LogInData = window.localStorage.getItem('LogInValue');
    if (LogInData !== null && typeof JSON.parse(LogInData) === 'boolean') {
        setLogIn(JSON.parse(LogInData)); // Set the loggedIn state with the retrieved value
    } else {
        setLogIn(false); // Default to false if no valid value found in local storage
    }
}, []);

    return(
        <div className='LogInPageTotalScreen'>
            <div className='LogInPageContainer'>
                <div className='LogInSquare'>
                    <h1>WalletWise</h1>
                </div>
                    <div className='LogInFormDiv'>
                        <form action="" onSubmit={DefaultSubmition}>
                        <input type="email" placeholder='Email' value={email} onChange={handleEmail} />
                        <input type="password" placeholder='Password' value={password} onChange={handlePassword} />


                            <button type='submit'>Log In</button>
                            <button type='submit'>Sign Up</button>
                            <button type='submit'>Forgot Password</button>
                            <button onClick={authSignWithGoogle} type='submit'>Sign In With Google</button>
                        </form>
    
                </div>
            </div>
        </div>
    )
}