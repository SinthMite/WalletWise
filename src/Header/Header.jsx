import React,{useState} from "react";
import { signOut } from "firebase/auth";
import defaultProfile from '../assets/default-profile-image.png'
import './Header.css'

export default function Header({Firebase, setLogIn}){
    const { currentUser } = Firebase.auth;
    function authSignOut() {
        signOut(Firebase.auth)
            .then(() => {
                setLogIn(false); // Set loggedIn state to false on logout
                window.localStorage.setItem('LogInValue', JSON.stringify(false)); // Update local storage value
            }).catch((error) => {
                console.error("Sign Out Error:", error);
            });
    };

    function renderProfilePicture(user) {
        if (user && user.photoURL) {
            return <img src={user.photoURL} alt="Profile" className="profile-image" />;
        } else {
            return <img src="default-profile-image.png" alt="Default Profile" className="profile-image" />;
        }
    }

    return(
        <section className="HeaderSection">
          <div className="HeaderContainer">
                {currentUser ? renderProfilePicture(currentUser) : <img src={defaultProfile} alt="Default Profile" />}
                <button onClick={authSignOut}>Log Out</button>
            </div>        
        </section>
    )
}