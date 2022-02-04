import React, {useState} from "react";
import img from "../../../images/NoPoster.png";
import FilmControls from "../FilmControls";

export default function FilmCard({movie, type}) {

    const [description, setDescription] = useState(false)

    return (
        <>
            <div className={'film-container'}>
                <article className="film-card">
                    <div className="film-img-wrapper">
                        {
                            movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                      alt="smth" className="film-img" onClick={() => setDescription(!description)}/>
                            ) : (
                                <img src={img} alt="no Poster"/>
                            )
                        }
                        <div className="film-description-container" style={description ? {display: "block"} : {display: "none"}}
                             onClick={() => setDescription(!description)} >
                                {movie.overview.length>550 ?
                                   ( <h5 className="film-description" style={{fontSize: '.95rem'}} onClick={() => setDescription(!description)}>{movie.overview}</h5>) :
                                    ( <h5 className="film-description" onClick={() => setDescription(!description)}>{movie.overview}</h5>)
                                }

                        </div>
                    </div>
                    <div className="film-buttons-container">
                        <FilmControls movie={movie} type={type}/>
                    </div>
                    <div className="film-text-container">
                        <div className="film-header-wrapper">
                            <h3>{movie.title}</h3>
                        </div>
                        <div className="film-date-wrapper">
                            <p>{movie.release_date ? movie.release_date.substring(0, 4) : '-'}</p>
                        </div>
                    </div>
                </article>
            </div>

        </>
    )
}