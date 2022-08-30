import React from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import desert4 from '../images/3eplan.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="background-picture">
               
            </div>
            <div className="foreground-content">
                <Aside />
                <header>
                    {/* <div className="airplane-container">
                        <img src={airplane} alt="" className='airplane' />
                    </div> */}
                    <Navbar />
                </header>
                {/* <main>
                    <div className='smallCloud-container'>
                        <img className='smallCloud' src={cloud1} alt="" />
                    </div>
                    <div className='middleCloud-container'>
                        <img className='middleCloud' src={cloud3} alt="" />
                    </div>
                    <div className='bigCloud-container'>
                        <img className='bigCloud' src={cloud2} alt="" />
                    </div>
                </main> */}
            </div>
        </div>
    );
};

export default About;