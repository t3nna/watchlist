import React, {useContext} from "react";
import './Watchlist.css'
import FilmResult from "../FilmResult/FilmResult";
import {FilmContext} from "../../../context/GlobalState";
import FilmCard from "../FilmCard/FilmCard";


export default function Watchlist() {
    const { watchlist} = useContext(FilmContext)


    return (
        <>
            <h3 className={'film-counter'}>
                <span>{watchlist.length} {watchlist.length === 1 ? 'Film' : 'Films'}</span> in your list
            </h3>
            {
                watchlist.length > 0 ?
                    (<div className={'grid'}>{watchlist.map(movie => (<FilmCard movie={movie} key={movie.id} type={'watchlist'}/>))}
                    </div>) :
                    <h2 className={'no-movies'}>There are no film in your collection</h2>

            }
        </>


    )
}