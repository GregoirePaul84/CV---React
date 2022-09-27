import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    function removeContactBox() {
        const selectContactBox = document.querySelector('.contact-container');
        selectContactBox.classList.remove('contact-appears');
        selectContactBox.classList.add('contact-disappears');
    }

    return (
        <div className='contact-container' id='contact-anchor'>
            <div className="contact-background">
                <div className="contact-title">
                    <h3>Me contacter</h3>
                </div>
                <div className="contact-info">
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} />
                        +33781373010
                    </div>
                    <div className="email">
                        <FontAwesomeIcon icon={faAt} />
                        gregoirepaulet84@gmail.com
                    </div>
                </div>
                <div className="contact-arrow" onClick={removeContactBox}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </div>
        </div>
    );
};

export default Contact;