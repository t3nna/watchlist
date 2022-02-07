import React, {useContext, useState} from 'react'
import img from '../../../images/NoPoster.png'
import './FilmResult.css'
import {FilmContext} from "../../../context/GlobalState";

export default function FilmResult({movie, mediaType}) {
    const {watched, watchlist, addFilmToWatchlist, addFilmToWatched, toggleWatchlistToWatched, toggleWatchedToWatchlist} = useContext(FilmContext)

    let storedFilmWatchlist = watchlist.find(item => item.id === movie.id)
    let storedFilmWatched = watched.find(item => item.id === movie.id)

    const watchlistDisabled = storedFilmWatchlist ? true : false
    const watchedDisabled = storedFilmWatched ? true : false

    movie.mediaType = mediaType

    // film only in one state
    const toggleWatchlist = (movie) =>{
        if (!storedFilmWatchlist){
        addFilmToWatched(movie)
        }

        if (storedFilmWatchlist){
            if (storedFilmWatchlist.id === movie.id){
                toggleWatchlistToWatched(movie)
            }
        }
    }
const toggleWatched = (movie) =>{
        if(!storedFilmWatched){
        addFilmToWatchlist(movie)
        }
        if (storedFilmWatched){
            if (storedFilmWatched.id === movie.id){
                toggleWatchedToWatchlist(movie)
            }
        }
    }


    const [description, setDescription] = useState(false)

    // find date in req
    const FilmDate =() =>{
        if (movie.release_date){
            return movie.release_date.substring(0, 4)
        }
        if (movie.first_air_date){
            return movie.first_air_date.substring(0, 4)
        }
        return '-'
    }

    return (
        <div className={'film-container'}>
            <article className="film-card">
                <div className="film-img-wrapper">
                    {
                        movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                  alt="smth" className="film-img" onClick={() => setDescription(!description)}/>
                        ) : (
                            <img src={img} alt="no Poster" onClick={() => setDescription(!description)}/>
                        )
                    }
                    <div className={description ? 'film-description-container film-description-open' : 'film-description-container'}
                         onClick={() => setDescription(!description)} >
                        {movie.overview.length>550 ?
                            ( <h5 className="film-description" style={{fontSize: '.95rem'}} onClick={() => setDescription(!description)}>{movie.overview}</h5>) :
                            ( <h5 className="film-description" onClick={() => setDescription(!description)}>{movie.overview}</h5>)
                        }

                    </div>
                </div>
                <div className="film-buttons-container">
                    <button className={'film-btn'} onClick={() => toggleWatched(movie)}
                            disabled={watchlistDisabled}
                            style={watchlistDisabled? {backgroundColor: 'coral'} : {}}>
                        Add to Watchlist
                    </button>


                    <button className={'film-btn'}
                            onClick={() => toggleWatchlist(movie)}
                            disabled={watchedDisabled}
                            style={watchedDisabled? {backgroundColor: 'coral'} : {}}>
                        Add to Watched
                    </button>
                </div>
                <div className="film-text-container">
                    <div className="film-header-wrapper">
                        <h3>{movie.title ? movie.title: movie.name

                        }</h3>
                    </div>
                    <div className="film-date-wrapper">
                        <p>{
                            // movie.release_date ? movie.release_date.substring(0, 4) : movie.first_air_date.substring(0, 4)
                            FilmDate()
                        }</p>
                    </div>
                </div>
            </article>
        </div>
    )
}