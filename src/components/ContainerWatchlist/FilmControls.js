import React, {useContext} from 'react'
import {FilmContext} from "../../context/GlobalState";

export default function FilmControls({movie, type}){
    const { toggleWatchlistToWatched, toggleWatchedToWatchlist, deleteFilmFromWatchlist, deleteFilmFromWatched} = useContext(FilmContext)

    return(
        <>
            {type === 'watchlist' && (
                <>
                <button className={'film-btn'} onClick={()=> toggleWatchlistToWatched(movie)}>
                    Watched
                </button>
                <button className={'film-btn'} onClick={() => deleteFilmFromWatchlist(movie)}>
                    Delete
                </button>
                </>

            )

            }

            {type === 'watched' && (
                <>
                    <button className={'film-btn'} onClick={()=> toggleWatchedToWatchlist(movie)}>
                        Return to Watchlist
                    </button>
                    <button className={'film-btn'} onClick={() => deleteFilmFromWatched(movie)}>
                        Delete
                    </button>
                </>

            )

            }

        </>
    )
}