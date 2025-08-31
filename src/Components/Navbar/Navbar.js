import React, { useEffect, useState } from "react";
import "./Navbar.css";
import GithubLight from "../../Resources/Icons/GithubLogo.png";
import GithubDark from "../../Resources/Icons/GithubLogo(Dark).png";
import LinkedinLight from "../../Resources/Icons/LinkedInLogo.png";
import LinkedinDark from "../../Resources/Icons/LinkedInLogo(Dark).png";

const Navbar = ({ isHome, darkMode, toggleDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen((s) => !s);

    useEffect(() => {
        if (!isHome) {
            setMenuOpen(false);
            setScrolled(true);
            return;
        }
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    useEffect(() => {
        if (!isHome) setMenuOpen(false);
    }, [isHome]);

    const closeMenu = () => setMenuOpen(false);

    const SocialIcon = ({ href, light, dark, alt }) => (
        <a href={href} target="_blank" rel="noreferrer" aria-label={alt} className="social-link" onClick={closeMenu}>
            <img
                src={darkMode ? dark : light}
                alt={alt}
                className="social-icon"
                draggable="false"
            />
        </a>
    );

    return (
        <header
            className={[
                "navbar",
                isHome ? "home" : "not-home",
                scrolled ? "scrolled" : "",
                menuOpen ? "open" : "",
            ].join(" ")}
            role="banner"
        >
            <div className="nav-shell">
                <div className="navbar-left">
                    <a href="/" className="brand Home-Link" onClick={closeMenu} aria-label="Go to homepage">
                        <span className="brand__text">Nathan Ceci</span>
                        <span className="brand__dot">.</span>
                    </a>
                </div>

                <nav className="navbar-center" aria-label="Primary">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#about-me" onClick={closeMenu} data-underline="true">About</a></li>
                        <li><a href="#expertise" onClick={closeMenu} data-underline="true">Expertise</a></li>
                        <li><a href="#projects" onClick={closeMenu} data-underline="true">Projects</a></li>
                        <li className="socials">
                            <SocialIcon
                                href="https://github.com/Nathancecixx"
                                light={GithubLight}
                                dark={GithubDark}
                                alt="GitHub"
                            />
                            <SocialIcon
                                href="https://www.linkedin.com/in/nathan-ceci"
                                light={LinkedinLight}
                                dark={LinkedinDark}
                                alt="LinkedIn"
                            />
                        </li>
                    </ul>
                </nav>

                <div className="navbar-right">
                    {/* Theme toggle */}
                    <button
                        className={`theme-toggle ${darkMode ? "dark" : "light"}`}
                        onClick={toggleDarkMode}
                        role="switch"
                        aria-checked={darkMode}
                        aria-label="Toggle theme"
                    >
                        <span className="toggle-track" />
                        <span className="toggle-thumb" />
                        <span className="toggle-icon sun" aria-hidden="true">☀</span>
                        <span className="toggle-icon moon" aria-hidden="true">☾</span>
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
