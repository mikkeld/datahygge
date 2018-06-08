import React from 'react';

const Hero = props => {
    return (
        <div className="hero hero--home">
            <div className="hero__bg-container">
                <div className="hero__bg-container-overlay">
                    <h1>UX analytics <br />out of the box</h1>
                    <a href="https://mariohayashi.typeform.com/to/pfNw75" className="get-app hero__btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored margin-right" target="_blank" data-g-event="Send Money" data-g-action="click" data-g-label="hero">
                        Get early access!
                    </a>
                    <a href="video.html" className="get-app hero__btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" data-g-event="Request Money" data-g-action="click" data-g-label="hero">
                        Watch video
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Hero;



