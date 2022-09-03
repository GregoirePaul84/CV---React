import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to={'/home'}>
                <div className="home">
                    <h2>Accueil</h2>
                </div>
            </NavLink>
            <NavLink to={'/about'}>
                <div className="about">
                    <h2>À propos</h2>
                </div>
            </NavLink>
            <NavLink to={'/skills'}>
                <div className="skills">
                    <h2>Compétences</h2>
                </div>
            </NavLink>
            <NavLink to={'/portfolio'}>
                <div className="portfolio">
                    <h2>Portfolio</h2>
                </div>
            </NavLink>
        </nav>
    );
};

export default Navbar;