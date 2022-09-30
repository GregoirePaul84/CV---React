import React from 'react';

const Loader = ({loaderColor}) => {
    return (
        <div id='loader-container' style={{background:`linear-gradient(153deg, ${loaderColor} 0%, #ffffff 100%)`}}>
            <div className="loading-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading-text">
                Je réfléchis...
            </div>
        </div>
    );
};

export default Loader;