import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import cloud3 from '../images/cloud3.png';
import parallax2 from '../images/2eplan2.png';
import parallax3 from '../images/1erplan.png';
import parallax4 from '../images/1erplan-2.png';
import parallax5 from '../images/4eplan.png';
import parallax6 from '../images/5eplan.png';
import parallax7 from '../images/sun2.png';
import parallax8 from '../images/sun_sunset.png';
import stars from '../images/stars2.png';
import comet from '../images/comet.png';
import moon from '../images/moon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import lamp from '../images/lamp2.png';
import lightLamp from '../images/light_lamp.png';

let timer;
let timerLog;

const Home = () => {

    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            const selectSand2 = document.querySelector('.parallax_2');
            const selectSand3 = document.querySelector('.parallax_3');
            const selectSand4 = document.querySelector('.parallax_4');
            const selectSand5 = document.querySelector('.parallax_5');
            const selectSun = document.querySelector('.parallax_6');
            const selectNight = document.querySelector('.background-night');
            const selectOpacity = selectNight.getAttribute('style');
            const removeDecimal = Math.trunc(-scrollY + 1000);
            const selectSunnyDay = document.querySelector('.sun');
            const selectSunset = document.querySelector('.sunset');
            const selectStars = document.querySelector('.stars');
            const selectComet = document.querySelector('.comet');
            const selectComet2 = document.querySelector('.comet2');
            const selectCloudTop = document.querySelector('.smallCloud-container');
            const selectCloudMiddle = document.querySelector('.middleCloud-container');
            const selectCloudMiddle2 = document.querySelector('.middleCloud-container2');
            const selectCloudBottom = document.querySelector('.bigCloud-container');
            const selectMoon = document.querySelector('.moon');
           

            if (scrollY !== 0 && scrollY < 1320.800048828125) {

                selectSand2.style.transform = `translateY(-${scrollY / 12}px)`;
                selectSand3.style.transform = `translateY(-${scrollY / 7}px)`;
                selectSand4.style.transform = `translateY(-${scrollY / 5}px)`;
                selectSand5.style.transform = `translateY(-${scrollY / 15}px)`;
                selectSun.style.transform = `translate(-${scrollY / 7}px, ${scrollY / 6}px)`;
                selectSun.style.filter = `blur(${removeDecimal / 1000 * 10}px)`;
                selectNight.style.opacity = `${scrollY / 3000}`;
                selectSunnyDay.style.opacity = `${removeDecimal / 1000}`;
                selectCloudTop.style.opacity = `${removeDecimal / 1000}`;
                selectCloudMiddle.style.opacity = `${removeDecimal / 1000}`;
                selectCloudMiddle2.style.opacity = `${removeDecimal / 1000}`;
                selectCloudBottom.style.opacity = `${removeDecimal / 1000}`;
                selectSunset.style.opacity = `${scrollY / 600}`;
                selectComet.style.display = `none`;
                selectComet2.style.display = `none`;
                selectMoon.style.opacity = `${scrollY / 600 - 1.5}`;


                if (scrollY >= 800) {
                    selectSun.style.filter = `blur(${removeDecimal / 1000 * 10}px)`;
                    selectSunset.style.opacity = `${scrollY / 100}`;
                    selectStars.style.opacity = `${scrollY / 1000 - 0.8}`;
                }
            }

            else if (scrollY >= 1320) {
                const selectValue = selectOpacity.slice(9, 20);
                selectSand2.style.transform = `translateY(-${1320 / 12}px)`;
                selectSand3.style.transform = `translateY(-${scrollY / 7}px)`;
                selectSand4.style.transform = `translateY(-${scrollY / 5}px)`;
                selectSun.style.filter = `blur(${removeDecimal / 1000 * 10}px)`;
                selectNight.style.opacity = `${scrollY / 3000}`;
                selectComet.style.display = `block`;
                selectComet2.style.display = `block`;
                selectMoon.style.opacity = `${scrollY / 600}`;
                selectSand4.style.filter = `blur(10px)`;

                if (selectValue >= '0.4432') {
                    selectNight.style.opacity = `0.4432`;
                }

                if (scrollY >= 4200) {
                    selectSand4.style.transform = `translateY(-${4200 / 5}px)`;
                    selectSand4.style.filter = `blur(0px)`;
                }
            }

            else {
                selectSand2.style.transform = `translateY(0)`;
                selectSand3.style.transform = `translateY(0)`;
                selectSand4.style.transform = `translateY(0)`;
                selectNight.style.opacity = `0`;
                selectSun.style.filter = `blur(10px)`;
                selectSunnyDay.style.opacity = `1`;
                selectStars.style.opacity = '0';
                selectComet.style.display = `none`;
                selectComet2.style.display = `none`;
                selectMoon.style.opacity = `0`;
            }
            
        };
        handleScroll();

          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    });

    useEffect(() => {
        
        const message = ["Je suis Grégoire Paulet,", "Développeur web junior"];
        let i = 0;
        let timer;

        function typingEffect() {
            // Divise chaque lettre de chaque message dans un tableau
            let word = message[i].split("");
            console.log('yes');

            const loopTyping = function() {
                
                // Si la longueur du tableau > 0, on retire le premier élément du tableau et on l'affiche dynamiquement
                if (word.length > 0) {

                    if (document.querySelector('.blink-text') === null) {
                        return;
                    }
                    
                    document.querySelector('.blink-text').innerHTML += word.shift();
                } 
                // Si la longueur du tableau = 0, on lance l'effet de suppression
                else {
                    setTimeout(deletingEffect, 3000);
                    return false;
                };
                // Relance la fonction tous les 100ms
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = message[i].split("");
            
            const loopDeleting = function() {
                if (word.length > 0) {

                    if (document.querySelector('.blink-text') === null) {
                        return;
                    }

                    // Enlève le dernier élement du tableau et on affiche dynamiquement
                    word.pop();
                    document.querySelector('.blink-text').innerHTML = word.join("");
                } 
                
                else {         
                    
                    // Changement de l'index de la variable word ligne 134
                    if (message.length > (i + 1)) {
                        i++;
                        
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
    
        loopDeleting();
    };

    typingEffect();

    }, []);

    return (
        <div className="home-container">
            <div className="background-picture">
                <div className='smallCloud-container'>
                    <img className='smallCloud' src={cloud1} alt="" />
                </div>
                <div className='middleCloud-container'>
                    <img className='middleCloud' src={cloud2} alt="" />
                </div>
                <div className='middleCloud-container2'>
                    <img className='middleCloud' src={cloud2} alt="" />
                </div>
                <div className='bigCloud-container'>
                    <img className='bigCloud' src={cloud3} alt="" />
                </div>
                <div className="parallax parallax_1">
                    <img src={parallax6} />
                </div>
                <div className="parallax parallax_5">
                    <img src={parallax5} />
                </div>
                <div className="parallax parallax_6">
                    <img src={parallax7} className="sun"/>
                    <img src={parallax8} className="sunset"/>
                </div>
                <div className="parallax parallax_2">
                    <img src={parallax2} />
                </div>
                <div className="parallax parallax_3">
                    <img src={parallax3} />
                </div>
                <div className="parallax parallax_4">
                    <img src={parallax4} />
                </div>
                <div className="stars">
                    <img src={stars} alt="" />
                </div>
                <div className="comet">
                    <img src={comet} alt="" />
                </div>
                <div className="comet2">
                    <img src={comet} alt="" />
                </div>
                <div className="moon">
                    <img src={moon} alt="" />
                </div>
                <div className="background-night"></div>
            </div>
            
            <div className="foreground-content">
                <Aside />
                <header>
                    <Navbar />
                </header>
                <main>
                    <div className="arrow-container">
                        <FontAwesomeIcon icon={faChevronDown} className="arrow-scroll" />
                        <div className="text-lamp-container">
                            <div className="text-container">
                                <h1>Bonjour et bienvenue sur mon site !</h1>
                                <div className="blink-text-container">
                                    <h2 className='blink-text'></h2>
                                    <span>&#9646;</span>
                                </div>
                            </div>
                            <div className="lamp-container">
                                <img src={lamp} alt="" />
                            </div>
                            <img src={lightLamp} alt="" className='light-lamp'/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;