import React from 'react';

import photoCV from '../media/photo_cv.png';
import cv from '../media/CV.pdf';

const Presentation = () => {

    function displayContact() {
        const selectContactBox = document.querySelector('.contact-container');
        selectContactBox.classList.remove('contact-disappears');
        selectContactBox.classList.add('contact-appears');

        window.scrollBy({
            top: 1000,
            left: 0,
            behavior : "smooth"
        })
    }

    return (
        <div className='presentation-container'>
            <div className="introduction-photo">
                <p>Je suis âgé de <span>33 ans</span> et suis domicilié dans le sud de la France (Avignon).</p>
                <img src={photoCV} alt="Grégoire Paulet" />
            </div>
            <div className="main-info">
                <p>A la suite d’une reconversion je me suis découvert une passion pour le monde du web, particulièrement pour le <span>développement front-end</span>. 
                <br/>
                Si vous êtes à la recherche d’un alternant en développement web / intégration web et que mon profil vous intéresse, n’hésitez pas à me contacter!</p>
            </div>
            <div className="buttons">
                <a href={cv} target="_blank" rel="noreferrer">
                    <button>Mon CV</button>
                </a>
                <button onClick={displayContact}>Contact</button>
            </div>
        </div>
    );
};

export default Presentation;