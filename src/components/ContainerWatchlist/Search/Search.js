import React, {useState} from "react";
import './Search.css'
import FilmResult from "../FilmResult/FilmResult";

export default function Search() {
    const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const Search = (e) => {
        e.preventDefault()

        setText(e.target.value)
        fetch(`
            https://api.themoviedb.org/3/search/movie?api_key=ace7abdadb0d05bb4604217adee8cfac&language=en-US&page=1&include_adult=false&query=${text}`)
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
    }


    return (
        <>
            <main className={'main'}>
                <div className="container-fluid wrapper">
                    <section className="search-section-padding">
                        <div className="search-input-wrapper als-search-v4-input-wrapper-with-border">
                            <div className="als-search-v4-input-wrapper-cursor">
                                <div style={text.length !== 0 ? {display: 'none'} : {display: 'block'}}
                                     className="als-search-v4-input-placeholder">Film search
                                </div>
                                <form><input type={'text'} autoComplete="off"
                                             className="with-pseudo-cursor"
                                             onChange={Search}
                                />
                                    <div className="pseudo-cursor blink"></div>
                                </form>
                            </div>

                        </div>
                    </section>

                    <div className="grid">
                        {
                            results.map((movie) =>(
                                <FilmResult movie={movie} key={movie.id}/>
                            ))
                        }


                    </div>
                </div>
            </main>

        </>
    )
}