import React, {useEffect, useState} from 'react';
import './Navbar.css';
import Github from "../../Resources/Icons/GithubLogo.png"

const Navbar = ({ isHome }) => {

    const [menuOpen, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!menuOpen)
    }

    useEffect(() => {
        console.log({isHome})
        if(!isHome) {
            setMenuState(false);
        }
    }, [isHome]);

    return (

        <nav className={`navbar ${isHome ? 'home' : 'not-home'}`}>

            <div className="navbar-left">
                <a href="/" className="Home-Link">
                    Nathan Ceci.
                </a>
            </div>


            <div className="navbar-center">

            </div>


            <div className="navbar-right">

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <a href="#about-me">About</a>
                    </li>
                    <li>
                        <a href="#expertise">Expertise</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href={"https://github.com/Nathancecixx"}>
                            <img src={Github} alt={"Github Logo"} className={`Github-Logo ${isHome ? 'home' : 'not-home'}`}/>
                        </a>
                    </li>
                </ul>

                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

            </div>

        </nav>
    );
};

export default Navbar;