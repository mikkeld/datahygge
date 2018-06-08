import React from 'react';

const Header = props => {
    return (
        <header className="site-header">
            <div className="aux cf">
                <h2 className="site-header__title">
                    <a className="site-header__root-link" data-g-label="Header Logo">
                        <img className="site-header-logo" alt="Edit component without sing code" src="https://firebasestorage.googleapis.com/v0/b/ui-tweak.appspot.com/o/logo3.png?alt=media&token=40c36553-56e7-468d-9991-e927de82cbda" />
                    </a>
                </h2>
                <nav className="site-header__main-nav" id="HeaderNav">
                    <ul>
                        <li>
                            <div className="site-header__cta site-header__cta--desktop">
                                <a href="https://mariohayashi.typeform.com/to/pfNw75">
                                    <button id="header-cta" className="get-app mdl-button mdl-button--raised mdl-button--white-colored mdl-js-button mdl-js-ripple-effect" data-play-store-url="https://mariohayashi.typeform.com/to/pfNw75" data-app-store-url="https://mariohayashi.typeform.com/to/pfNw75" data-g-event="Get the App" data-g-action="click" data-g-label="header:desktop">
                                        Get early access!
                                    </button>a>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="site-header__cta site-header__cta--mobile">
                    <button id="get-app--large" className="get-app mdl-button mdl-button--raised mdl-button--colored js-get-app-button mdl-js-button mdl-js-ripple-effect" data-play-store-url="https://mariohayashi.typeform.com/to/pfNw75" data-app-store-url="https://mariohayashi.typeform.com/to/pfNw75" data-g-event="Get the App" data-g-action="click" data-g-label="header:mobile">
                        Get early access!
                    </button>
                    <div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;


