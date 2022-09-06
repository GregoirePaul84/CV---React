import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import arabic from '../images/arabic.jpg';
import lightDown from '../images/light_down.png';
import dust from '../images/dust.png';

const About = () => {

    useEffect(() => {
        const selectNight = document.querySelector('.background-night');
        const selectLight = document.querySelector('.switch-light');
        let time = 0;

        function displayNight() {
            selectNight.classList.remove('active-day');
            selectNight.classList.add('active-night');
        }

        function displayDay() {
            selectNight.classList.remove('active-night');
            selectNight.classList.add('active-day');
            selectLight.style.opacity = "0";
        }

        function switchLight() {
            console.log('off');
            selectLight.style.opacity = "0"; 
            setTimeout(() => {
                console.log('on');
                selectLight.style.opacity = "1";
              }, 100);
        }

        function increaseTime() {
            time ++;

            if (time === 15) {
                displayNight();
            }

            else if (time === 20) {
                selectLight.classList.remove('inactive-light');
                selectLight.classList.add('active-light');
            }

            else if (time === 30) {
                displayDay();
            }

            else if (time === 35) {
                selectLight.classList.remove('active-light');
                selectLight.classList.add('inactive-light');
            }

            else if (time > 35) {
                time = 1;
            }
        }

        setInterval(function () {
            increaseTime();
        }, 1000);
            
        setInterval(function () {
            console.log(time);
        }, 1000);

        selectLight.style.opacity = "0";

    }, [])

    return (
        <div className="about-container">
            <div className="background-picture">
                <img src={arabic} alt="" />
                <img src={dust} alt="" />
                <img src={lightDown} alt="" className='switch-light' />
                <div className="background-night"></div>
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