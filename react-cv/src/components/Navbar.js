import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="about">
                <h2>À propos</h2>
            </div>
            <div className="skills">
                <h2>Compétences</h2>
            </div>
            <div className="portfolio">
                <h2>Portfolio</h2>
            </div>
        </nav>
    );
};

export default Navbar;