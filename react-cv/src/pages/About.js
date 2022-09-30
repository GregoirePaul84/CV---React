import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Contact from '../components/Contact';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';

import lavanders from '../media/lavandes.webp';

let flowers;

const loaderColor = "#544a7d";

const About = () => {

    useEffect(() => {
        const selectFlowers = document.querySelector('.flowers');

        function getRandomSize(min, max) {
            return Math.random() * (max - min) + min;
        }

        function riseFlowers() {

            const flowerCircle = document.createElement('i');

            flowerCircle.classList.add('fa-solid');
	        flowerCircle.classList.add('fa-circle');

            flowerCircle.style.left = getRandomSize(0 , 100) + '%';
            flowerCircle.style.bottom = getRandomSize(0 , 30) + '%';

	        flowerCircle.style.fontSize = getRandomSize(15 , 30) + 'px';

            selectFlowers.appendChild(flowerCircle);

            setTimeout(() => {
                flowerCircle.remove();
            }, 10000);
              
        }

        flowers = setInterval(riseFlowers, 1000);

    }, []);

    useEffect(() => {
       
        return () => {
            console.log('composant démonté');
            clearInterval(flowers);
        }
    }, []);

    useEffect(() => {
        const selectLoader = document.getElementById('loader-container');
        setTimeout(() => {document.getElementById('about-loader').removeChild(selectLoader)}, 3000);
    }, [])

    return (
        <>
        <div id="about-loader">
            <Loader loaderColor={loaderColor}/>
        </div>
        <div className="about-container">
            <div className="background-picture">
                <img src={lavanders} alt="" />
                <div className="flowers"></div>
            </div>
            <div className="foreground-content" id='responsive-about-foreground'>
                <Aside />
                <header id='responsive-header'>
                    <Navbar />
                </header>
                <main id='responsive-about-main'>
                   <Contact />
                   <Presentation /> 
                </main>
            </div>
        </div>
        </>
    );
};

export default About;