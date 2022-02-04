import React, {useContext} from "react";
import {FilmContext} from "../../../context/GlobalState";
import FilmCard from "../FilmCard/FilmCard";

export default function Watched(){
    const {watched} = useContext(FilmContext)

    return(
        <>
            <h3 className={'film-counter'}>
                <span>{watched.length} {watched.length === 1 ? 'Film' : 'Films'}</span> you've watched
            </h3>
            {
                watched.length > 0 ?
                    (<div className={'grid'}>{watched.map(movie => (<FilmCard movie={movie} key={movie.id} type={'watched'}/>))}
                    </div>) :
                    <h2 className={'no-movies'}>There are no watched films in your collection</h2>

            }
        </>
    )
}