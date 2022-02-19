import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './EnterPage.css'
import background1 from '../../images/changing/film1.png'
import background2 from '../../images/changing/film2.jpeg'
import background3 from '../../images/changing/film3.jpeg'


export default function EnterPage() {

    const [currentImage, setCurrentImage] = useState(0)
    const [images, setImages] = useState([
        background1,
        background2,
        background3,
    ])


    function switchImage() {
        if (currentImage < images.length -1) {
            setCurrentImage(image => image+1)
        }
    }



    useEffect(() => {
        const interval = setInterval(() =>{
            switchImage()
            setCurrentImage(image => image%3)

        }, 4000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className={'enter-page-image-slide'}>
            <img src={images[currentImage]} alt="fancy " className={'changing-images'}/>
            <nav className={'navbar-enter'}>
                <div className="navbar-enter-title-container">
                    <h1>IVAN MELNYK.</h1>
                </div>
                <div className="navbar-enter-container">
                    <div className="svg-icon">
                        <svg fill="#fbfbff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="90px"
                             height="90px">
                            <path
                                d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"/>
                        </svg>
                    </div>
                    <div className="svg-icon">
                        <svg fill="#fbfbff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="192px"
                             height="192px">
                            <path
                                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/>
                        </svg>
                    </div>
                    <Link to={'/add'}
                        className="navbar-enter-button">
                            <h2>Start</h2>
                    </Link>
                </div>
            </nav>
            <main className={'page-caption'}>
                <Link to={'/add'} className="navbar-enter-button">
                    <p>Start</p>
                </Link>
                <h2>
                    HERE YOU CAN CREATE<br/>
                    WATCHLIST NOT TO FORGET<br/>
                    SOMETHING
                </h2>
            </main>
        </div>
    )
}