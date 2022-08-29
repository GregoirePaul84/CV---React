import React from 'react';
import Navbar from '../components/Navbar';

import seaBeach from '../images/seaBeach.jpg';
import airplane from '../images/plane.png';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import cloud3 from '../images/cloud3.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="background-picture">
                <img src={seaBeach} alt="" />
            </div>
            <div className="foreground-content">
                <aside>
                    <div className="logo">
                        <h1>G P</h1>
                    </div>
                    <div className="name-job-container">
                        <h3 className='name'>Grégoire Paulet</h3>
                        <h3 className='job'>Développeur web junior</h3>
                    </div>
                </aside>
                <header>
                    <div className="airplane-container">
                        <img src={airplane} alt="" className='airplane' />
                    </div>
                    <Navbar />
                </header>
                <main>
                    <div className='smallCloud-container'>
                        <img className='smallCloud' src={cloud1} alt="" />
                    </div>
                    <div className='middleCloud-container'>
                        <img className='middleCloud' src={cloud3} alt="" />
                    </div>
                    <div className='bigCloud-container'>
                        <img className='bigCloud' src={cloud2} alt="" />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;