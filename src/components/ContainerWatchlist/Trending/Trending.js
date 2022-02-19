import React, {useEffect, useState} from "react";
import FilmResult from "../FilmResult/FilmResult";
import './Trending.css'

export default function Trending(){
    const [trending, setTrending] = useState([])

    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=ace7abdadb0d05bb4604217adee8cfac')
            .then(res => {
                    // return res.json()
                    if (res.ok) {
                        return res.json()
                    }
                    return res.json().then(err => {
                        const e = new Error('Some problems ')
                        e.data = err
                        throw e
                    })
                }
            )
            .then(data => {
                setTrending(data.results)
                console.log(data.results)
            })
            .catch(err => console.log(err.message))
    }, [])

    return(
        <section className={'trending-section'}>
            <h1>Trending</h1>
            <div className="horizontal-scroll snaps-inline">
                {
                    trending.map(movie =>(
                        <FilmResult movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </section>
    )
}