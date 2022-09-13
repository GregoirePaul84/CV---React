import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import vietnam from '../images/vietnam.jpg';
import vietnamCloud from '../images/cloud_vietnam.png';

let timeSkills = 0;
let rain;
let timer;
let timerLog;

const Skills = () => {

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
            timeSkills ++;

            if (timeSkills === 15) {
                selectWeather.classList.remove('inactive-background-gray');
                selectWeather.classList.add('active-background-gray');
            }

            else if (timeSkills === 20) {
                console.log('pluie');
                rain = setInterval(rainFall, 10);
                selectBgImg.classList.remove('blur0px');
                selectBgImg.classList.add('blur2px');
            }

            else if (timeSkills === 60) {
                console.log('soleil');
                selectWeather.classList.remove('active-background-gray');
                selectWeather.classList.add('inactive-background-gray');
                selectBgImg.classList.remove('blur2px');
                selectBgImg.classList.add('blur0px');
                clearInterval(rain);
            }

            else if (timeSkills > 120) {
                timeSkills = 1;
            }
        }
        
        timer = setInterval(function () {
            increaseTime();
        }, 1000);
            
        timerLog = setInterval(function () {
            console.log(timeSkills);
        }, 1000);
        
    }, [])

    useEffect(() => {
        // Anything in here is fired on component mount.
        return () => {
            console.log('composant démonté');
            clearInterval(timer);
            clearInterval(timerLog);
            timeSkills = 0;
        }
    }, [])

    return (
        <div className="skills-container">
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
                    
                </main>
            </div>
        </div>
    );
};

export default Skills;