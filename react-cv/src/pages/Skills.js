import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import arabic from '../media/arabic.webp';
import lightDown from '../media/light_down.webp';

import Technology from '../components/Technology';
import Loader from '../components/Loader';

let timeSkills = 0;
let timer;

const loaderColor = "#BC7B3A";

const Skills = () => {

    const [ImgLoaded, setImgLoaded] = useState(false);
    const [displayFront, setDisplayFront] = useState(false);
    const [displayBack, setDisplayBack] = useState(false);

    function checkIfLastImgLoaded() {
        console.log('chargée');
        setImgLoaded(true);
    }

    useEffect(() => {
        console.log(ImgLoaded)
        if(ImgLoaded) {
            const selectLoader = document.getElementById('loader-container');
            document.getElementById('skills-loader').removeChild(selectLoader); 
        }
    }, [ImgLoaded]);

    function changeDisplayFront() {
        setDisplayBack(false);
        setDisplayFront(!displayFront);
        console.log('==== FRONT ====');
        console.log(displayFront);
    }

    function changeDisplayBack() {
        setDisplayFront(false);
        setDisplayBack(!displayBack);
        console.log('==== BACK ====');
        console.log(displayBack);
    }

    useEffect(() => {
        const selectNight = document.querySelector('.background-night');
        const selectLight = document.querySelector('.switch-light');

        function displayNight() {
            selectNight.classList.remove('active-day');
            selectNight.classList.add('active-night');
        }

        function displayDay() {
            selectNight.classList.remove('active-night');
            selectNight.classList.add('active-day');
            selectLight.style.opacity = "0";
        }

        function increaseTime() {
            timeSkills ++;
            // console.log(timeSkills);

            if (timeSkills === 15) {
                displayNight();
            }

            else if (timeSkills === 20) {
                selectLight.classList.remove('inactive-light');
                selectLight.classList.add('active-light');
            }

            else if (timeSkills === 30) {
                displayDay();
            }

            else if (timeSkills === 35) {
                selectLight.classList.remove('active-light');
                selectLight.classList.add('inactive-light');
            }

            else if (timeSkills > 35) {
                timeSkills = 1;
            }
        }

        timer = setInterval(function () {
            increaseTime();
        }, 1000);

        selectLight.style.opacity = "0";

    }, []);

    useEffect(() => {
        return () => {
            console.log('composant démonté');
            clearInterval(timer);
            timeSkills = 0;
        }
    }, []);

    return (
        <>
        <div id="skills-loader">
            <Loader loaderColor={loaderColor}/>
        </div>
        <div className="skills-container">
            <div className="background-picture">
                <img src={arabic} alt="paysage de maison arabe" />
                <img src={lightDown} alt="lumière de nuit" className='switch-light' onLoad={checkIfLastImgLoaded}/>
                <div className="background-night"></div>
            </div>
            <div className="foreground-content" id='responsive-skills-foreground'>
                <Aside />
                <header id='responsive-header'>
                    <Navbar />
                </header>
                <main id='responsive-skills-main'>
                    <section id='responsive-skills-section'>
                        <div className="choice-container">
                            <div className="buttons-container">
                                <div className="skills-header">
                                    <h3>Compétences</h3>
                                </div>
                                <div className="orange-line"></div>
                                <div className="buttons">
                                    <button onClick={changeDisplayFront}>Front-end</button>
                                    <button onClick={changeDisplayBack}>Back-end</button>
                                </div>
                            </div>
                        </div>
                        <div className="language-container">
                            {displayFront && <Technology languageCategory={'Front-end'}/>}
                            {displayBack && <Technology languageCategory={'Back-end'}/>}
                        </div>
                    </section>
                </main>
            </div>
        </div>
        </>
    );
};

export default Skills;