import React, {useContext, useReducer, useEffect, useState} from 'react'
import AppReducer from "./AppReducer";
import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { doc, setDoc, collection , getDocs, addDoc} from "firebase/firestore";
import {db} from "../firebaseAuth";

import {initializeApp} from "firebase/app";
// import firebase from "firebase/compat";




const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched')
        ? JSON.parse(localStorage.getItem('watched')) : [],
    description: '',
    currentUser: {}
}

export const FilmContext = React.createContext(initialState)

export function FilmProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const {currentUser} = useContext(FilmContext)



    // saving in local storage
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))

    }, [state])


    // actions
    const addFilmToWatchlist = (film) => {
        dispatch({type: 'ADD_FILM_TO_WATCHLIST', payload: film})
    }
    const addFilmToWatched = (film) => {
        dispatch({type: 'ADD_FILM_TO_WATCHED', payload: film})
    }
    // toggleWatchlist
    const toggleWatchlistToWatched = (film) =>{

        dispatch({type: 'TOGGLE_WATCHLIST_TO_WATCHED', payload: film})
    }
    // toggleWatched
    const toggleWatchedToWatchlist = (film) =>{

        dispatch({type: 'TOGGLE_WATCHED_TO_WATCHLIST', payload: film})
    }
    // delete from Watchlist state
    const deleteFilmFromWatchlist = (film) =>{
        dispatch({type: 'DELETE_FILM_FROM_WATCHLIST',  payload: film})
    }
    // delete from Watched state
    const deleteFilmFromWatched = (film) =>{
        dispatch({type: 'DELETE_FILM_FROM_WATCHED', payload: film})
    }
    // get Description Film ID
    const getDescId = (film) =>{
        dispatch({type: 'GET_DESC_ID', payload: film})
    }

    // auth

    const [loading, setLoading] = useState(true)

    const firebaseApp = initializeApp({
        // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        // appId: process.env.REACT_APP_FIREBASE_API_ID,
        // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
        apiKey: "AIzaSyBVEoaZwK-ZQUjJ_7hUgnmWM8_-SrSWXWU",
        authDomain: "watchlist-development.firebaseapp.com",
        databaseURL: "https://watchlist-development-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "watchlist-development",
        storageBucket: "watchlist-development.appspot.com",
        messagingSenderId: "1018886316157",
        appId: "1:1018886316157:web:bb7dcf805dc35655241114",
        measurementId: "G-PGZ4JD9W5M"
    })


// export const auth = firebaseApp.auth()
    const auth = getAuth(firebaseApp)
    const usersCollectionRef = collection(db, 'users')
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider()
    auth.useDeviceLanguage()


    const signUp = async function (email, password){
        try{
            setError('')
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
        }catch (err){
            console.log(err)
            setError('Failed to sign up')
        }
    }
    const signIn = async function (email, password){
        try{
            setError('')
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)
        }catch (err){
            console.log(err)
            setError('Failed to sign in')

        }
    }

    const googleSignIn = async function(){
        console.log(`i'm trying...`)
        try{
            const result = await signInWithPopup(auth, provider)
            const credential = await GoogleAuthProvider.credentialFromResult(result);
            const token = await credential.accessToken
            const user = await result.user
            console.log(user)
            return user

        }catch (e){
            console.log(e)
        }
    }

    const logout = async function() {
        try{
            setError('')
            await signOut(auth)
            console.log('sign-out successfully ')
        }catch (e){
            console.log(e)
        }
    }

    useEffect(() =>{
       // const getUsers = async () =>{
       //     const data = await getDocs(usersCollectionRef)
       //     console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
       //     await addDoc(usersCollectionRef, {name: '1234', data: JSON.parse(localStorage.getItem('watchlist')) })
       // }
       // getUsers()
    },[])


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            dispatch({type: 'SET_CURRENT_USER', payload: user})
            // setDoc(doc(`/users/${user.uid}`), JSON.parse(localStorage.getItem('watchlist')),)
            setLoading(false)
        })
        return unsubscribe
    }, [])



    // update database from localstorage
    const updateUserInfo =() =>{
        console.log(currentUser)

    }

    return (
        <FilmContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            description: state.description,
            currentUser: state.currentUser,
            signUp,
            signIn,
            logout,
            googleSignIn,
            error,
            addFilmToWatchlist,
            addFilmToWatched,
            toggleWatchlistToWatched,
            toggleWatchedToWatchlist,
            deleteFilmFromWatchlist,
            deleteFilmFromWatched,
            getDescId


        }}>
            {children}
        </FilmContext.Provider>
    )

}