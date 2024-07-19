import React from 'react';
import './Navbar.css';

import Github from "../../Resources/Icons/GithubLogo.png"

const Navbar = ({ IsHome }) => {

    console.log('IsHome prop:', IsHome);

    let extension = "NULL";

    if(IsHome){
        extension = "home";
    } else {
        extension = "not-home";
    }

    return (

        <nav className={`navbar ${IsHome ? 'home' : 'not-home'}`}>

            <div className="navbar-left">
                <a href="/" className="Home-Link">
                    Nathan Ceci.
                </a>
            </div>

            <div className="navbar-center">

            </div>

            <div className="navbar-right">

                <ul className="nav-links">
                    <li>
                        <a href="#about-me">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>

                <a href={"https://github.com/Nathancecixx"}>
                    <img src={Github} alt={"Github Logo"} className={`Github-Logo ${IsHome ? 'home' : 'not-home'}}`}/>
                </a>
            </div>

        </nav>
    );
};

export default Navbar;