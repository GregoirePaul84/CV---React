import React from 'react';

import htmlImg from '../images/html5.png';
import cssImg from '../images/css3.png';
import sassImg from '../images/sass.png';
import javascriptImg from '../images/javascript.png';
import reactImg from '../images/react.png';
import ProgressBar from './ProgressBar';

import nodeImg from '../images/nodejs.png';
import sqlImg from '../images/sql.png';
import mongoImg from '../images/mongo.png';

// import nodeJsImg 

const languageFrontObject = [
    {
        languageImg : htmlImg,
        languageName : 'HTML5',
        languageProgress : '75%'
    }, 
    {
        languageImg : cssImg,
        languageName : 'CSS3',
        languageProgress : '72%'
    }, 
    {
        languageImg : sassImg,
        languageName : 'Sass',
        languageProgress : '55%'
    }, 
    {
        languageImg : javascriptImg,
        languageName : 'Javascript',
        languageProgress : '42%'
    }, 
    {
        languageImg : reactImg,
        languageName : 'ReactJS',
        languageProgress : '31%'
    }
];

const languageBackObject = [
    {
        languageImg : nodeImg,
        languageName : 'NodeJS',
        languageProgress : '65%'
    }, 
    {
        languageImg : sqlImg,
        languageName : 'SQL',
        languageProgress : '40%'
    }, 
    {
        languageImg : mongoImg,
        languageName : 'MongoDB',
        languageProgress : '35%'
    }, 
];

const Technology = ({languageCategory}) => {
    if (languageCategory === 'Front-end') console.log('Front-end');
    if (languageCategory === 'Back-end') console.log('Back-end');
    return (
        <div className='technology-container'>
            <div className="technology-header">
                <h3>{languageCategory}</h3>
            </div>
            <div className="orange-line"></div>
            <div className="experience-container">
                <div className='experience'>Expérience</div>
                <div className='year'>1 an</div>
            </div>
            <div className="under-container">
                <div className="transparent-div"></div>
                <div className="vertical-line-container">
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="languages-container">
                {(languageCategory === 'Front-end') ?
                    languageFrontObject.map((key) => {
                        return (
                            <ProgressBar key={key.languageName}
                            languageImg={key.languageImg}
                            languageName={key.languageName}
                            languageProgress={key.languageProgress}
                            />
                        )
                    })
                    : null
                }
                {(languageCategory === 'Back-end') ?
                    languageBackObject.map((key) => {
                        return (
                            <ProgressBar key={key.languageName}
                            languageImg={key.languageImg}
                            languageName={key.languageName}
                            languageProgress={key.languageProgress}
                            />
                        )
                    })
                    : null
                }
            </div>
        </div>

    );
};

export default Technology;