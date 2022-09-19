import React, { useEffect } from 'react';

const ProgressBar = ({languageImg, languageName, languageProgress}) => {

    useEffect(() => {
        document.querySelectorAll(".orange-progress-bar").forEach(e => e.classList.add("bar-animation"));

    }, [])

    return (
        <div className="language">
            <div className="language-img">
                <img src={languageImg} alt="" />
            </div>
            <div className="language-name">
                {languageName}
            </div>
            <div className="progress-bar-container">
                <div className="gray-progress-bar">
                    <div className="orange-progress-bar" style={{width:languageProgress}}></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;