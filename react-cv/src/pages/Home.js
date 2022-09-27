import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import cloud1 from '../media/small_cloud.webp';
import cloud2 from '../media/middle_cloud.webp';
import cloud3 from '../media/inverted_cloud.webp';
import parallax2 from '../media/2eplan2.webp';
import parallax3 from '../media/1erplan.webp';
import parallax4 from '../media/1erplan-2.webp';
import parallax5 from '../media/4eplan.webp';
import parallax6 from '../media/5eplan.webp';
import parallax7 from '../media/sun.webp';
import parallax8 from '../media/sunset.webp';
import stars from '../media/stars2.webp';
import comet from '../media/comet.png';
import moon from '../media/moon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import lamp from '../media/light_lamp2.webp';


const Home = () => {

    const [scrollY, setScrollY] = useState(0);
    const [innerWidth, setinnerWidth] = useState(window.innerWidth);
    const [translateParallax, setTranslateParallax] = useState((-window.innerWidth / 100 + 11) * 100);
    
    useEffect(() => {

        const selectSky = document.querySelector('.parallax_1');
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

        const handleScroll = () => {
            setScrollY(window.scrollY);

            if(scrollY === 0) {
                selectStars.style.opacity = `0`;
            }

            if (scrollY < 1320.800048828125) {

                if (window.innerWidth > 1100) {
                    selectSky.style.transform = `translate(0px, 0px)`;
                    selectSand2.style.transform = `translate(0px, -${scrollY / 12}px)`;
                    selectSand3.style.transform = `translate(0px, -${scrollY / 7}px)`;
                    selectSand4.style.transform = `translate(0px, -${scrollY / 5}px)`;
                    selectSand5.style.transform = `translate(0px, -${scrollY / 15}px)`;
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
                        selectSunset.style.opacity = `${scrollY / 100}`;
                        selectStars.style.opacity = `${scrollY / 1000 - 0.8}`;
                    }
                }

                if (window.innerWidth <= 1100) {

                    selectSky.style.transform = `translateX(-${(-innerWidth / 100 + 11) * 100}px)`;
                    selectComet2.style.transform = `translateX(-${(-innerWidth / 100 + 11) * 100}px)`;
                    selectMoon.style.transform = `translateX(-${(-innerWidth / 100 + 11) * 100}px)`;
                    selectSand2.style.transform = `translate(-${(-innerWidth / 100 + 11) * 100}px, -${scrollY / 12}px)`;
                    selectSand3.style.transform = `translate(-${(-innerWidth / 100 + 11) * 100}px, -${scrollY / 9}px)`;
                    selectSand4.style.transform = `translate(-${(-innerWidth / 100 + 11) * 100}px, -${scrollY / 7}px)`;
                    selectSand5.style.transform = `translate(-${(-innerWidth / 100 + 11) * 100}px, -${scrollY / 17}px)`;
                    selectSun.style.transform = `translate(-${translateParallax + scrollY / 7}px, ${scrollY / 8}px)`;
                    selectSun.style.filter = `blur(${removeDecimal / 1000 * 6}px)`;
                    selectNight.style.opacity = `${scrollY / 3000}`;
                    selectSunnyDay.style.opacity = `${removeDecimal / 1700}`;
                    selectCloudTop.style.opacity = `${removeDecimal / 1000}`;
                    selectCloudMiddle.style.opacity = `${removeDecimal / 1000}`;
                    selectCloudMiddle2.style.opacity = `${removeDecimal / 1000}`;
                    selectCloudBottom.style.opacity = `${removeDecimal / 1000}`;
                    selectSunset.style.opacity = `${scrollY / 600}`;
                    selectComet.style.display = `none`;
                    selectComet2.style.display = `none`;
                    selectMoon.style.opacity = `${scrollY / 600 - 1.5}`;

                    if (scrollY >= 800) {
                        selectSunset.style.opacity = `${scrollY / 100}`;
                        selectStars.style.opacity = `${scrollY / 1000 - 0.8}`;
                    }
                }
            }

            else if (scrollY >= 1320) {
                const selectValue = selectOpacity.slice(9, 20);

                if (window.innerWidth > 1100) {
                    selectSand2.style.transform = `translate(0px, -${1320 / 12}px)`;
                    selectSand3.style.transform = `translate(0px, -${scrollY / 7}px)`;
                    selectSand4.style.transform = `translate(0px, -${scrollY / 5}px)`;
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
                        selectSand4.style.transform = `translate(-${translateParallax}px, -${4200 / 5}px)`;
                        selectSand4.style.filter = `blur(0px)`;
                    }
                }

                if (window.innerWidth <= 1100) {
                    selectSky.style.transform = `translateX(-${(-innerWidth / 100 + 11) * 100}px)`;
                    selectMoon.style.transform = `translateX(-${(-innerWidth / 100 + 11) * 100}px)`;
                    selectSun.style.transform = `translate(-${scrollY / 7}px, ${scrollY / 6}px)`;
                    selectSand2.style.transform = `translate(-${translateParallax}px, -${1320 / 12}px)`;
                    selectSand3.style.transform = `translate(-${translateParallax}px, -${scrollY / 9}px)`;
                    selectSand4.style.transform = `translate(-${translateParallax}px, -${scrollY / 7}px)`;
                    selectSand5.style.transform = `translate(-${(-innerWidth / 100 + 11) * 100}px, -${scrollY / 17}px)`;
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
                        selectSand4.style.transform = `translate(-${translateParallax}px, -${4200 / 5}px)`;
                        selectSand4.style.filter = `blur(0px)`;
                    }

                    
                }
            }

            else {
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

        const detectInnerWidth = () => {
            setinnerWidth(window.innerWidth);
            setTranslateParallax((-window.innerWidth / 100 + 11) * 100);
        }

        detectInnerWidth();


        window.addEventListener("resize", detectInnerWidth);
        return () => {
            window.removeEventListener("resize", detectInnerWidth);
        };

    }, [innerWidth, scrollY])

    useEffect(() => {
        
        const message = ["Je suis Grégoire Paulet,", "Développeur web junior"];
        let i = 0;
        // eslint-disable-next-line
        let timer;

        function typingEffect() {
            // Divise chaque lettre de chaque message dans un tableau
            let word = message[i].split("");

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
                    
                    // Changement de l'index de la variable word ligne 212
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
                    <img className='smallCloud' src={cloud1} alt="petit nuage" />
                </div>
                <div className='middleCloud-container'>
                    <img className='middleCloud' src={cloud2} alt="nuage moyen" />
                </div>
                <div className='middleCloud-container2'>
                    <img className='middleCloud' src={cloud2} alt="nuage moyen" />
                </div>
                <div className='bigCloud-container'>
                    <img className='bigCloud' src={cloud3} alt="gros nuage" />
                </div>
                <div className="parallax parallax_1">
                    <img src={parallax6} alt="ciel"/>
                </div>
                <div className="parallax parallax_5">
                    <img src={parallax5} alt="sable 4ème plan"/>
                </div>
                <div className="parallax parallax_6">
                    <img src={parallax7} className="sun" alt="soleil"/>
                    <img src={parallax8} className="sunset" alt="soleil couchant"/>
                </div>
                <div className="parallax parallax_2">
                    <img src={parallax2} alt="sable 3ème plan"/>
                </div>
                <div className="parallax parallax_3">
                    <img src={parallax3} alt="sable 2ème plan"/>
                </div>
                <div className="parallax parallax_4">
                    <img src={parallax4} alt="sable 1er plan"/>
                </div>
                <div className="stars">
                    <img src={stars} alt="étoiles nuit" />
                </div>
                <div className="comet">
                    <img src={comet} alt="1ère comète" />
                </div>
                <div className="comet2" id='tablet-comet'>
                    <img src={comet} alt="2ème comète" />
                </div>
                <div className="moon">
                    <img src={moon} alt="lune" />
                </div>
                <div className="background-night"></div>
            </div>
            
            <div className="foreground-content">
                <Aside />
                <header id='responsive-header'>
                    <Navbar />
                </header>
                <main id='tablet-main'>
                    <div className="arrow-container">
                        { (window.scrollY + window.innerHeight <= 2399) ?
                            <FontAwesomeIcon icon={faChevronDown} className="arrow-scroll" />
                        : null }
                        <div className="text-lamp-container" id='tablet-text-lamp-container'>
                            <div className="text-container" id='tablet-text-container'>
                                <h1>Bonjour et bienvenue sur mon site !</h1>
                                <div className="blink-text-container">
                                    <h2 className='blink-text'>{}</h2>
                                    <span>&#9646;</span>
                                </div>
                            </div>
                            <div className="lamp-container" id='tablet-lamp-container'>
                                <img src={lamp} alt="" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;