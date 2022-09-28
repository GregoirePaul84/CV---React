import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to={'/CV_React/home'}>
                <div className="home">
                    <h2>Accueil</h2>
                </div>
            </NavLink>
            <NavLink to={'/CV_React/about'}>
                <div className="about">
                    <h2>À propos</h2>
                </div>
            </NavLink>
            <NavLink to={'/CV_React/skills'}>
                <div className="skills">
                    <h2>Compétences</h2>
                </div>
            </NavLink>
            <NavLink to={'/CV_React/portfolio'}>
                <div className="portfolio">
                    <h2>Portfolio</h2>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navbar;