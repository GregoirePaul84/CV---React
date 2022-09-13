import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import lavanders from '../images/lavandes.jpg';

let flowers;

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

    return (
        <div className="about-container">
            <div className="background-picture">
                <img src={lavanders} alt="" />
                <div className="flowers"></div>
            </div>
            <div className="foreground-content">
                <Aside />
                <header>
                    <Navbar />
                </header>
                <main>
                    
                </main>
            </div>
        </div>
    );
};

export default About;