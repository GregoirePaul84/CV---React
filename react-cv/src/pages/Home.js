import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="home-container">
            <div className="background-picture contrast saturation">
            </div>
            <div className="foreground-content">
                <aside>
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="name-job-container">
                        <h3 className='name'>Grégoire Paulet</h3>
                        <h3 className='job'>Développeur web junior</h3>
                    </div>
                </aside>
                <header>
                    <Navbar />
                </header>
                <main>
                    Contenu
                </main>
            </div>
        </div>
    );
};

export default Home;