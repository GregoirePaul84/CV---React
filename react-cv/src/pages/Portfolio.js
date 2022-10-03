import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import vietnam from '../media/vietnam.webp';
import vietnamCloud from '../media/vietnam-cloud.webp';
import ProjectBox from '../components/ProjectBox';

import bookiImg from '../media/booki.webp';
import ohMyFoodImg from '../media/ohmyfood.webp';
import laChouetteAgenceImg from '../media/lachouetteagence.webp';
import kanapImg from '../media/kanap.webp';
import piiquanteImg from '../media/piiquante.webp';
import groupomaniaImg from '../media/groupomania.webp';
import Loader from '../components/Loader';

const loaderColor = "#506911";

let timePortfolio = 0;
let rain;
let timer;

let projectObject = [
    { projectName : "Booki",
      projectColor : "#0065FC",
      projectText : "Intégration d’une maquette en HTML / CSS, site responsive Desktop / Tablette / Mobile.",
      projectImg : bookiImg,
      projectSite : "https://gregoirepaul84.github.io/booki/",
      projectGithub : "https://github.com/GregoirePaul84/booki/tree/dev-branch"
    },
    { projectName : "Ohmyfood !",
      projectColor: "#9356DC",
      projectText : "Intégration de maquettes en HTML / CSS, implémentation d’animations CSS.",
      projectImg : ohMyFoodImg,
      projectSite : "https://gregoirepaul84.github.io/GregoirePaulet_3_04112021/",
      projectGithub : "https://github.com/GregoirePaul84/GregoirePaulet_3_04112021"
    },
    { projectName : "La chouette agence",
      projectColor: "#F3976C",
      projectText : "Optimisation d'un site déjà existant, amélioration du référencement et de l'accessibilité.",
      projectImg : laChouetteAgenceImg,
      projectSite : "https://gregoirepaul84.github.io/la-chouette-agence-modifi-/",
      projectGithub : "https://github.com/GregoirePaul84/la-chouette-agence-modifi-"
    },
    { projectName : "Kanap",
      projectColor: "#0A3B4D",
      projectText : "Réalisation du front-end d'un site de e-commerce, communication avec une API et création d'un système de panier.",
      projectImg : kanapImg,
      projectGithub : "https://github.com/GregoirePaul84/kanap",
      isProjectAvailable : false
    },
    { projectName : "Piiquante",
      projectColor: "#C40000",
      projectText : "Construction d'une API sécurisée, mise en place des opérations CRUD.",
      projectImg : piiquanteImg,
      projectGithub : "https://github.com/GregoirePaul84/Piiquante",
      isProjectAvailable : false
    },
    { projectName : "Groupomania",
      projectColor: "#FD2D01",
      projectText : "Création d'un MVP de réseau social de A à Z. Réalisation des maquettes, de la base de données, du back et du front.",
      projectImg : groupomaniaImg,
      projectGithub : "https://github.com/GregoirePaul84/P7_Groupomania",
      isProjectAvailable : false
    }
];


const Portfolio = () => {

    const [ImgLoaded, setImgLoaded] = useState(false);

    function checkIfLastImgLoaded() {
        console.log('chargée');
        setImgLoaded(true);
    }

    useEffect(() => {
        console.log(ImgLoaded)
        if(ImgLoaded) {
            const selectLoader = document.getElementById('loader-container');
            setTimeout(() => {document.getElementById('portfolio-loader').removeChild(selectLoader)}, 1000); 
        }
    }, [ImgLoaded]);

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

            if (timePortfolio === 15) {
                selectWeather.classList.remove('inactive-background-gray');
                selectWeather.classList.add('active-background-gray');
            }

            else if (timePortfolio === 20) {
                rain = setInterval(rainFall, 10);
                selectBgImg.classList.remove('blur0px');
                selectBgImg.classList.add('blur2px');
            }

            else if (timePortfolio === 60) {
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
        
    }, []);

    useEffect(() => {
        return () => {
            console.log('composant démonté');
            clearInterval(timer);
            timePortfolio = 0;
        }
    }, []);

    return (
        <>
        <div id="portfolio-loader">
            <Loader loaderColor={loaderColor}/>
        </div>
        <div className="portfolio-container">
            <div className="background-picture">
                <img src={vietnam} alt="rizières vietnamiennes" className='bg-img' />
                <img src={vietnamCloud} alt="gros nuage" className='vietnam-cloud' onLoad={checkIfLastImgLoaded}/>
                <div className="background-rain"></div>
                <div className="background-gray"></div>
            </div>
            <div className="foreground-content" id='responsive-portfolio-foreground'>
                <Aside />
                <header id='responsive-header'>
                    <Navbar />
                </header>
                <main id='responsive-portfolio-main'>
                    <div className="all-projects-container">
                        {projectObject.map((key) => {
                            return (
                            <ProjectBox key={key.projectName} 
                            projectName={key.projectName} 
                            projectColor={key.projectColor}
                            projectText={key.projectText}
                            projectImg={key.projectImg}
                            projectSite={key.projectSite}
                            projectGithub={key.projectGithub}
                            isProjectAvailable={key.isProjectAvailable}
                            />
                            )
                        }
                        )}
                    </div>
                </main>
            </div>
        </div>
        </>
    );
};

export default Portfolio;