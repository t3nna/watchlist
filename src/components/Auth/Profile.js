import React, {useState, useContext} from "react";
import {FilmContext} from "../../context/GlobalState";

export default function Profile(){
    const {currentUser, logout} = useContext(FilmContext)
    const handleLogout =() =>{
        logout()
    }
    return(
        <div className={'profile-container'}>
            <h2>Profile</h2>
            <div className="profile-email">
                Email: {currentUser && currentUser.email}
            </div>
            <div className="profile-logout">
                <button onClick={handleLogout}>Log out</button>
            </div>

        </div>
    )
}