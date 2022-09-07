import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import lavanders from '../images/lavandes.jpg';

const Portfolio = () => {

    useEffect(() => {
        const selectFlowers = document.querySelector('.flowers');

        let timePortfolio = 0;

        function displayFlowers() {
            selectFlowers.classList.add('ascend-flowers');
        }

        function increaseTime() {
            timePortfolio ++;

            if (timePortfolio === 15) {
                displayFlowers();
            }

            // else if (timeSkills === 20) {
            //     selectLight.classList.remove('inactive-light');
            //     selectLight.classList.add('active-light');
            // }

            // else if (timeSkills === 30) {
            //     displayDay();
            // }

            // else if (timeSkills === 35) {
            //     selectLight.classList.remove('active-light');
            //     selectLight.classList.add('inactive-light');
            // }

            else if (timePortfolio> 35) {
                timePortfolio = 1;
            }
        }
        
        setInterval(function () {
            increaseTime();
        }, 1000);
            
        setInterval(function () {
            console.log(timePortfolio);
        }, 1000);

    }, [])

    return (
        <div className="portfolio-container">
            <div className="background-picture">
                <img src={lavanders} alt="" />
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

export default Portfolio;