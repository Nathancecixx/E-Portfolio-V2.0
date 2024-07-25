import React, {useEffect, useState} from 'react';
import './Navbar.css';
import Github_light from "../../Resources/Icons/GithubLogo.png"
import Github_Dark from "../../Resources/Icons/GithubLogo(Dark).png"

const Navbar = ({ isHome, darkMode, toggleDarkMode}) => {

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
                <div className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode.toggleDarkMode}>
                    <div className="toggle-thumb"></div>
                </div>
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
                            {darkMode === true &&
                                <img src={Github_Dark} alt={"Github Logo"} className={`Github-Logo ${isHome ? 'home' : 'not-home'}`}/>
                            }
                            {darkMode === false &&
                                <img src={Github_light} alt={"Github Logo"} className={`Github-Logo ${isHome ? 'home' : 'not-home'}`}/>
                            }
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