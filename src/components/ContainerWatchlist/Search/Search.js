import React, {useEffect, useState} from "react";
import './Search.css'
import FilmResult from "../FilmResult/FilmResult";

export default function Search() {
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [fetchSwitch, setFetchSwitch] = useState(true)

    useEffect(() =>{

        fetch(  fetchSwitch ? `https://api.themoviedb.org/3/search/movie?api_key=ace7abdadb0d05bb4604217adee8cfac&language=en-US&page=1&include_adult=false&query=${text}`
        : `https://api.themoviedb.org/3/search/tv?api_key=ace7abdadb0d05bb4604217adee8cfac&language=en-US&page=1&include_adult=false&query=${text}`
        )
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
                console.log(data.results)
                setResults(data.results)
            })
            .catch(err => console.log(err.message))


    }, [text, fetchSwitch])



    return (
        <>
            <main className={'main'}>
                <div className="container-fluid wrapper">
                    <div className="switch-fetch-req">
                        {/*<label className="switch">*/}
                        {/*    <input type="checkbox"/>*/}
                        {/*        <span className="slider round"></span>*/}
                        {/*</label>*/}

                        <button className={'search-switch'} style={fetchSwitch ? {backgroundColor: 'coral'} : {}} onClick={() => setFetchSwitch(true)}>
                            Films
                        </button>

                        <button className={'search-switch'} style={!fetchSwitch ? {backgroundColor: 'coral'} : {} } onClick={() => setFetchSwitch(false)}>
                            TV Shows
                        </button>

                    </div>

                    <section className="search-section-padding">
                        <div className="search-input-wrapper als-search-v4-input-wrapper-with-border">
                            <div className="als-search-v4-input-wrapper-cursor">
                                <div style={text.length !== 0 ? {display: 'none'} : {display: 'block'}}
                                     className="als-search-v4-input-placeholder">Film search
                                </div>
                                <form><input type={'text'} autoComplete="off"
                                             className="with-pseudo-cursor"
                                             onChange={ event => setText(event.target.value)}
                                />
                                    <div className="pseudo-cursor blink"></div>
                                </form>
                            </div>

                        </div>
                    </section>

                    <div className="grid">
                        {
                            results.map((movie) =>(
                                <FilmResult movie={movie} key={movie.id} mediaType={fetchSwitch ? 'movie' : 'tv'}/>
                            ))
                        }


                    </div>
                </div>
            </main>

        </>
    )
}