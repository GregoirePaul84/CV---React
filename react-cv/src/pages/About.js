import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import parallax2 from '../images/2eplan2.png';
import parallax3 from '../images/1erplan.png';
import parallax4 from '../images/1erplan-2.png';
import parallax5 from '../images/4eplan.png';
import parallax6 from '../images/5eplan.png';
import parallax7 from '../images/sun2.png';


const About = () => {

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
            

            console.log(scrollY);
            if (scrollY !== 0 && scrollY < 1320.800048828125) {
                selectSand2.style.transform = `translateY(-${scrollY / 12}px)`;
                selectSand3.style.transform = `translateY(-${scrollY / 7}px)`;
                selectSand4.style.transform = `translateY(-${scrollY / 5}px)`;
                selectSand5.style.transform = `translateY(-${scrollY / 15}px)`;
                selectSun.style.transform = `translate(-${scrollY / 5}px, ${scrollY / 5}px)`;
                selectNight.style.opacity = `${scrollY / 3000}`;

                if (scrollY >= 300) {
                    selectSun.style.filter = `blur(10px) hue-rotate(-${scrollY / 13}deg)`;
                }
            }

            else if (scrollY >= 1320) {
                const selectValue = selectOpacity.slice(9, 20);
                selectSand2.style.transform = `translateY(-${1320.800048828125 / 12}px)`;
                selectSand3.style.transform = `translateY(-${1320.800048828125 / 7}px)`;
                selectSand4.style.transform = `translateY(-${scrollY / 5}px)`;
                selectSun.style.filter = `blur(10px) hue-rotate(286deg)`;
                selectNight.style.opacity = `${scrollY / 3000}`;

                if (selectValue >= '0.4432') {
                    selectNight.style.opacity = `0.4432`;
                }
            }

            else {
                selectSand2.style.transform = `translateY(0)`;
                selectSand3.style.transform = `translateY(0)`;
                selectSand4.style.transform = `translateY(0)`;
                selectNight.style.opacity = `0`;
                selectSun.style.filter = `blur(10px) hue-rotate(0deg)`;
            }
            
          };
          handleScroll();
      
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };

    });

    return (
        <div className="about-container">
            <div className="background-picture">
                <div className="parallax parallax_1">
                    <img src={parallax6} />
                </div>
                <div className="parallax parallax_5">
                    <img src={parallax5} />
                </div>
                <div className="parallax parallax_6">
                    <img src={parallax7} />
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
                <div className="background-night"></div>
            </div>
            
            <div className="foreground-content">
                <Aside />
                <header>
                    {/* <div className="airplane-container">
                        <img src={airplane} alt="" className='airplane' />
                    </div> */}
                    <Navbar />
                </header>
                <main>
                    {/* <div className='smallCloud-container'>
                        <img className='smallCloud' src={cloud1} alt="" />
                    </div>
                    <div className='middleCloud-container'>
                        <img className='middleCloud' src={cloud3} alt="" />
                    </div>
                    <div className='bigCloud-container'>
                        <img className='bigCloud' src={cloud2} alt="" />
                    </div> */}
                </main>
            </div>
        </div>
    );
};

export default About;