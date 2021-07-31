import React from 'react';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-options">
                <a href="#"> WEATHER </a>
                <a href="#"> DESTINATIONS </a>
                <a href="#"> GET A QUOTE </a>
            </div>
        </div>
    );
}

export default Header;