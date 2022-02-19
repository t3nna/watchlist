import React from 'react'
import './Main.css'
import EnterPage from "../EnterPage/EnterPage";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";
import Navbar from "../ContainerWatchlist/Navbar/Navbar";
import FilmResult from "../ContainerWatchlist/FilmResult/FilmResult";
import Watchlist from "../ContainerWatchlist/Watchlist/Watchlist";
import Search from "../ContainerWatchlist/Search/Search";
import Watched from "../ContainerWatchlist/Watched/Watched";
import About from "../About/About";
import FilmDesc from "../ContainerWatchlist/FilmDesc/FilmDesc";
import Registr from "../Auth/Registr";
import Profile from "../Auth/Profile";


export default function Main() {
    return (
        <div className={'main-container'}>
            <Router>
                <Switch>
                    <Route path={'/'} exact>
                        <EnterPage/>
                    </Route>
                    <Route path={'/watchlist'} exact>
                        <Navbar/>
                        <Watchlist/>
                    </Route>
                <Route path={'/watched'} exact>
                        <Navbar/>
                        <Watched/>
                    </Route>
                <Route path={'/add'} exact>
                        <Navbar/>
                        <Search/>
                    {/*<Profile/>*/}
                    </Route>
                <Route path={'/about'} exact>
                        <Navbar/>
                        <About/>
                    </Route>

                    <Route path={'/film-desc'} exact>
                        <Navbar/>
                        <FilmDesc/>

                    </Route>
                    <Route path={'/register'} exact>
                        <Registr/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}