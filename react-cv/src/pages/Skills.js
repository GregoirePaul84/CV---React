import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import vietnam from '../images/vietnam.jpg';
import vietnamCloud from '../images/cloud_vietnam.png';

let timeSkills = 0;
let timeBlur = 0;

const Skills = () => {

    useEffect(() => {

        const selectRainy = document.querySelector('.background-gray');
        const selectRainFall = document.querySelector('.background-rain');
        const selectBgImg = document.querySelector('.bg-img');

        function rainFall() {
            const waterDrop = document.createElement('i');

            waterDrop.classList.add('fas');
	        waterDrop.classList.add('fa-tint');

            waterDrop.style.left = Math.random() * window.innerWidth + 'px';

            waterDrop.style.opacity = Math.random() + 0.4;
	        waterDrop.style.fontSize = Math.random() * 7 +'px';

            waterDrop.style.animationDuration = Math.random() * 1.5 + 's';

            selectRainFall.appendChild(waterDrop);

            setTimeout(() => {
                waterDrop.remove();
            }, 2000)
        }

        function increaseTime() {
            timeSkills ++;

            if (timeSkills === 15) {
                selectRainy.classList.remove('inactive-background-gray');
                selectRainy.classList.add('active-background-gray');
                
            }

            else if (timeSkills === 20) {
                console.log('pluie');
                setInterval(rainFall, 10);

                if (timeBlur >= 0 && timeBlur <= 3) {
                    setInterval(timeBlur ++, 1000);
                    setInterval(console.log(timeBlur), 1000);
                }

                if (timeBlur === 3) {
                    selectBgImg.classList.add('blur3px');
                }
                // selectRainFall.classList.add('active-rain');
                // selectDrop.style.animationDuration = Math.random() * 1 + 's';
            }

            else if (timeSkills === 40) {
                selectRainy.classList.remove('active-background-gray');
                selectRainy.classList.add('inactive-background-gray');
                // selectRainFall.classList.remove('active-rain');
                // waterDrop.remove();
            }

            else if (timeSkills > 50) {
                timeSkills = 1;
            }

            else {
                // selectRainFall.style.opacity = '0';
            }
        }
        
        setInterval(function () {
            increaseTime();
        }, 1000);
            
        setInterval(function () {
            console.log(timeSkills);
        }, 1000);
        
    }, [])

    return (
        <div className="skills-container">
            <div className="background-picture">
                <img src={vietnam} alt="" className='bg-img' />
                <img src={vietnamCloud} alt="" className='light-cloud'/>
                <div className="background-rain">
                </div>
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