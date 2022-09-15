import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import vietnam from '../images/vietnam.jpg';
import vietnamCloud from '../images/cloud_vietnam.png';
import ProjectBox from '../components/ProjectBox';

import bookiImg from '../images/booki.png';
import ohMyFoodImg from '../images/ohmyfood.png';

let timePortfolio = 0;
let rain;
let timer;

let projectObject = [
    { projectName : "Booki",
      projectColor: "#0065FC",
      projectText: "Intégration d’une maquette en HTML / CSS, site responsive Desktop / Tablette / Mobile.",
      projectImg : bookiImg,
      projectSite : "https://gregoirepaul84.github.io/booki/"
    },
    { projectName : "Ohmyfood !",
      projectColor: "#9356DC",
      projectFont : "'Shrikhand', cursive",
      projectText: "Intégration de maquettes en HTML / CSS, implémentation d’animations CSS.",
      projectImg : ohMyFoodImg,
      projectSite : "https://gregoirepaul84.github.io/GregoirePaulet_3_04112021/"
    }
];


const Portfolio = () => {

    useEffect(() => {

        const selectWeather = document.querySelector('.background-gray');
        const selectRainFall = document.querySelector('.background-rain');
        const selectBgImg = document.querySelector('.bg-img');

        function rainFall() {

            const waterDrop = document.createElement('i');

            waterDrop.classList.add('fas');
	        waterDrop.classList.add('fa-tint');

            waterDrop.style.left = Math.random() * window.innerWidth + 'px';

            waterDrop.style.opacity = Math.random() + 0.4;
	        waterDrop.style.fontSize = Math.random() * 6 +'px';

            waterDrop.style.animationDuration = Math.random() * 2 + 's';

            selectRainFall.appendChild(waterDrop);

            setTimeout(() => {
                waterDrop.remove();
            }, 2000)
        }

        function increaseTime() {
            timePortfolio ++;
            // console.log(timePortfolio);

            if (timePortfolio === 15) {
                selectWeather.classList.remove('inactive-background-gray');
                selectWeather.classList.add('active-background-gray');
            }

            else if (timePortfolio === 20) {
                console.log('pluie');
                rain = setInterval(rainFall, 10);
                selectBgImg.classList.remove('blur0px');
                selectBgImg.classList.add('blur2px');
            }

            else if (timePortfolio === 60) {
                console.log('soleil');
                selectWeather.classList.remove('active-background-gray');
                selectWeather.classList.add('inactive-background-gray');
                selectBgImg.classList.remove('blur2px');
                selectBgImg.classList.add('blur0px');
                clearInterval(rain);
            }

            else if (timePortfolio > 120) {
                timePortfolio = 1;
            }
        }
        
        timer = setInterval(function () {
            increaseTime();
        }, 1000);
        
    }, [])

    useEffect(() => {
        // Anything in here is fired on component mount.
        return () => {
            console.log('composant démonté');
            clearInterval(timer);
            timePortfolio = 0;
        }
    }, [])

    return (
        <div className="portfolio-container">
            <div className="background-picture">
                <img src={vietnam} alt="" className='bg-img' />
                <img src={vietnamCloud} alt="" className='light-cloud'/>
                <div className="background-rain"></div>
                <div className="background-gray"></div>
            </div>
            <div className="foreground-content">
                <Aside />
                <header>
                    <Navbar />
                </header>
                <main>
                    <div className="all-projects-container">
                        {projectObject.map((key) => {
                            return (
                            <ProjectBox key={key.projectName} 
                            projectName={key.projectName} 
                            projectColor={key.projectColor}
                            projectFont={key.projectFont}
                            projectText={key.projectText}
                            projectImg={key.projectImg}
                            projectSite={key.projectSite}
                            />
                            )
                        }
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Portfolio;