import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h3>
                    andrea francesco <br /> pavia
                </h3>
            </div>
            <div className="header__hamburger">
                <input
                    type="checkbox"
                    id="hamby"
                    className="hamby visuallyHidden"
                />
                <label htmlFor="hamby">
                    <div className="hamburger hamburger4">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                        <span className="bar bar5"></span>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;
