import React, {useState, useRef, useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import './Auth.css'
import {FilmContext} from "../../context/GlobalState";

export default function SignIn({setAuthOpen, authOpen}) {
    const {signIn, error, googleSignIn, currentUser} = useContext(FilmContext)
    const [loading, setLoading] = useState(false)


    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            await signIn(emailRef.current.value, passwordRef.current.value)
            if (!error) {
                setAuthOpen(!authOpen)
            }


        } catch (e) {
            console.log(e.message)

        }
        setLoading(false)

    }

    return (
        <div className={(authOpen) ? "menu menu-shown" : "menu"}>
            <div className="menu-head">
                <a onClick={() => setAuthOpen(!authOpen)}>
                    <svg className="menu-close-icon" fill="#fff" viewBox="0 0 23 23">
                        <path
                            d="M.38 1.97a1.14 1.14 0 010-1.59 1.14 1.14 0 011.6 0l9.51 9.54L21.03.38a1.12 1.12 0 011.57 0c.45.45.45 1.16 0 1.59l-9.52 9.52 9.52 9.54a1.12 1.12 0 01-1.57 1.59l-9.54-9.54-9.52 9.54c-.44.43-1.14.43-1.59 0a1.14 1.14 0 010-1.59l9.53-9.54z"></path>
                    </svg>
                </a>

            </div>

            <div className="menu-body">
                <ul>
                    <li className={'auth-title'}>
                        <h1>Enter</h1>
                        <h5>Via Social Networks</h5>
                    </li>
                    <li>
                        <div className="auth-google-logo" onClick={async function (){
                            const complete = await googleSignIn()
                            if (complete){
                                setAuthOpen(!authOpen)
                            }

                        }}>

                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="96px"
                                 height="96px">
                                <path
                                    d="M16.003,14.063v4.203h5.989c-0.783,2.547-2.911,4.369-5.989,4.369c-3.665,0-6.637-2.971-6.637-6.635s2.971-6.635,6.637-6.635c1.648,0,3.152,0.604,4.313,1.598l3.096-3.095C21.456,6.086,18.856,5,16.003,5C9.926,5,5,9.925,5,16s4.926,11,11.003,11c9.236,0,11.274-8.635,10.369-12.922L16.003,14.063z"/>
                            </svg>
                        </div>
                    </li>
                    <li className={'auth-with-password'}>
                        <form onSubmit={handleSubmit}>
                            <h5>With password</h5>
                            <div className="email">
                                <input type="text" placeholder={'Email'} ref={emailRef}/>
                            </div>
                            <div className="password">
                                <input type="password" placeholder={'Password'} ref={passwordRef}/>
                            </div>

                            <button className={'submit'} disabled={loading} type={'submit'}>
                                Submit
                            </button>
                        </form>
                    </li>
                    <li>
                        <div>
                            {error}
                        </div>
                    </li>
                    <li>
                        <Link to={'/register'}>
                            I don't remember password
                        </Link>
                    </li>
                    <li>
                        <Link to={'/register'}>
                            Registration
                        </Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}