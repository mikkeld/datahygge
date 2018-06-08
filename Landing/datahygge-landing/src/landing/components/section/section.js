import React from 'react';

const IMG_PATH = 'https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Fimg.png?alt=media&token=fc9257c7-5364-4340-8409-fd5b21341635';

const Section = props => {
    return (
        <section className="section section--welcome section--text-left section--grey section--rev section--align-image-bottom">
            <div className="aux">
                <div className="grid grid--bottom">
                    <div className="section__content grid__item palm--one-whole lap--one-half desk--one-half">
                        <header className="recesection__header">
                            <h2 className="section__title">Out of the box insights for components</h2>
                            <p>
                                Instant insights for the components that matters. No setup required.<br />
                                Click and select a component to see for yourself.
                            </p>
                        </header>
                    </div>
                    <div className="section__image grid__item palm--one-whole lap--one-half desk--one-half">
                        <picture>
                            <source srcset={IMG_PATH} media="(min-width: 769px)" />
                                <source srcset={IMG_PATH} media="(max-width: 768px)" />
                                    <img srcset={IMG_PATH} alt="Welcome to the new Google Wallet." />
                        </picture>
                </div>
                </div>
            </div>
        </section>
    )
};

export default Section;




