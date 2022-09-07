import React, { useEffect } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import vietnam from '../images/vietnam.jpg';
import vietnamCloud from '../images/cloud_vietnam.png';
// import rain from '../images/rain.png';

const Skills = () => {

    useEffect(() => {

        const selectRainy = document.querySelector('.background-gray');

        let timeSkills = 0;

        function displayRainyDay() {
            selectRainy.classList.add('active-background-gray');
        }

        function increaseTime() {
            timeSkills ++;

            if (timeSkills === 15) {
                displayRainyDay();
            }

            else if (timeSkills === 50) {
                selectRainy.classList.remove('active-background-gray');
                selectRainy.classList.add('inactive-background-gray');
            }

            // else if (timeSkills === 30) {
            //     displayDay();
            // }

            // else if (timeSkills === 35) {
            //     selectLight.classList.remove('active-light');
            //     selectLight.classList.add('inactive-light');
            // }

            else if (timeSkills > 50) {
                timeSkills = 1;
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
                <img src={vietnam} alt="" />
                <img src={vietnamCloud} alt="" className='light-cloud'/>
                {/* <img src={rain} alt="" /> */}
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