import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    let pathname = window.location.pathname

    return (
        <header className={'header'}>
            <div id="mobile-nav" style={nav ? {height: "192px"} : {height: '0'}}>
                <div className="nav-wrapper">
                    <nav className="header-nav-mobile">
                        <ul>
                            <li>
                                <Link to={'/watchlist'} onClick={() => setNav(!nav)}
                                      style={pathname === '/watchlist' ? {color: 'gray'} : {color: ' rgba(156,156,156,.7)'}}>Watchlist</Link>
                            </li>
                            <li>
                                <Link to={'/add'} onClick={() => setNav(!nav)}
                                      style={pathname === '/add' ? {color: 'gray'} : {color: ' rgba(156,156,156,.7)'}}>Add</Link>
                            </li>
                            <li>
                                <Link to={'/watched'} onClick={() => setNav(!nav)}
                                      style={pathname === '/watched' ? {color: 'gray'} : {color: ' rgba(156,156,156,.7)'}}>Watched</Link>
                            </li>
                            <li>
                                <Link to={'/about'} onClick={() => setNav(!nav)}
                                      style={pathname === '/about' ? {color: 'gray'} : {color: ' rgba(156,156,156,.7)'}}>About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="burger-button" onClick={() => setNav(!nav)}>
                <p>menu</p>
            </div>
            <div className="header-container">
                <div className="header-logo">
                    <h1>Ivan Melnyk.</h1>
                </div>

                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link to={'/watchlist'}
                                  style={pathname === '/watchlist' ? {color: ' rgba(156,156,156,.7)'} : {color: 'black'}}>Watchlist</Link>
                        </li>
                        <li>
                            <Link to={'/add'}
                                  style={pathname === '/add' ? {color: ' rgba(156,156,156,.7)'} : {color: 'black'}}>Add</Link>
                        </li>
                        <li>
                            <Link to={'/watched'}
                                  style={pathname === '/watched' ? {color: ' rgba(156,156,156,.7)'} : {color: 'black'}}>Watched</Link>
                        </li>
                        <li>
                            <Link to={'/about'}
                                  style={pathname === '/about' ? {color: ' rgba(156,156,156,.7)'} : {color: 'black'}}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}