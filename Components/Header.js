import React from "react"
import { Link } from "react-router";

export const Header = () => {
    return (

        <>
            <div className="nav-container">
                <div className="logo-container">
                    <img className="logo" src="https://www.shutterstock.com/shutterstock/photos/2018476604/display_1500/stock-vector-quiz-speech-bubble-banner-with-quiz-text-glassmorphism-style-for-business-marketing-and-2018476604.jpg"></img>
                </div>
                <div className="items">
                    <ul className="nav-ul">
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/AboutUs'}><li>About-Us</li></Link>
                        <Link to={'/Contact'}><li>Contact</li></Link>

                    </ul>

                </div>

            </div>

        </>
    )

}
