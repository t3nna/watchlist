import React, {useState, useEffect, useContext} from "react";
import './FilmDesc.css'
import {FilmContext} from "../../../context/GlobalState";

export default function FilmDesc() {
    const {description} = useContext(FilmContext)
    const [currentFilm, setCurrentFilm] = useState({})


    useEffect(() => {


        if (description.mediaType === 'movie') {
            console.log(description.id)
            fetch(`https://api.themoviedb.org/3/movie/${description.id}?api_key=ace7abdadb0d05bb4604217adee8cfac&language=en-US`)
                .then(data => data.json())
                .then(data => {
                    setCurrentFilm(data)
                    console.log(data)
                })
        }

        if (description.mediaType === 'tv') {
            console.log(description.id)
            fetch(`https://api.themoviedb.org/3/tv/${description.id}?api_key=ace7abdadb0d05bb4604217adee8cfac&language=en-US`)
                .then(data => data.json())
                .then(data => {
                    setCurrentFilm(data)
                    console.log(data)
                })

        }

    }, [description])


    // const desc =


    return (
        <div className={'full-info-container'}>

            {
                description.mediaType === 'tv' && (
                    <ul>

                        <li>
                            <div className="full-info-label">Name</div>
                            <div className="full-info-value">{currentFilm.name}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Genres</div>
                            <div
                                className="full-info-value">{currentFilm?.genres?.map(item => item.name).join(', ')}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Overview</div>
                            <div className="full-info-value">{currentFilm.overview}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Number of seasons</div>
                            <div className="full-info-value">{currentFilm.number_of_seasons}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Status</div>
                            <div className="full-info-value">{currentFilm.status}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Average vote</div>
                            <div className="full-info-value">{currentFilm.vote_average}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Production Companies</div>
                            <div className="full-info-value">
                                {currentFilm.production_companies?.map(item => item.name).join('; ')}
                            </div>
                        </li>

                    </ul>)}
            {

                description.mediaType === 'movie' && (
                    <ul>

                        <li>
                            <div className="full-info-label">Name</div>
                            <div className="full-info-value">{currentFilm.title}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Genres</div>
                            <div
                                className="full-info-value">{currentFilm?.genres?.map(item => item.name).join(', ')}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Overview</div>
                            <div className="full-info-value">{currentFilm.overview}</div>
                        </li>

                        <li>
                            <div className="full-info-label">Status</div>
                            <div className="full-info-value">{currentFilm.status}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Average vote</div>
                            <div className="full-info-value">{currentFilm.vote_average}</div>
                        </li>
                        <li>
                            <div className="full-info-label">Production Companies</div>
                            <div className="full-info-value">
                                {currentFilm.production_companies?.map(item => item.name).join('; ')}
                            </div>
                        </li>

                        <li>
                            <div className="full-info-label">Budget</div>
                            <div className="full-info-value">{currentFilm.budget}</div>
                        </li>


                    </ul>)
            }


        </div>
    )
}