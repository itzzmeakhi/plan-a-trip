import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-options">
                <a href="#weather"> WEATHER </a>
                <a href="#destinations"> DESTINATIONS </a>
                <a href="#quote"> GET A QUOTE </a>
            </div>
        </div>
    );
}

export default Header;