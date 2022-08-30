import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="home">
                <NavLink to={'/home'}>
                    <h2>Accueil</h2>
                </NavLink>
            </div>
            <div className="about">
                <NavLink to={'/about'}>
                    <h2>À propos</h2>
                </NavLink>
            </div>
            <div className="skills">
                <NavLink to={'/skills'}>
                    <h2>Compétences</h2>
                </NavLink>
            </div>
            <div className="portfolio">
                <NavLink to={'/portfolio'}>
                    <h2>Portfolio</h2>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;