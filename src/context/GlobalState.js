import React, {useContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched')
        ? JSON.parse(localStorage.getItem('watched')) : [],
    description: ''
}

export const FilmContext = React.createContext(initialState)

export function FilmProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState)


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


    return (
        <FilmContext.Provider value={{
            watchlist: state.watchlist,
            watched: state.watched,
            description: state.description,
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