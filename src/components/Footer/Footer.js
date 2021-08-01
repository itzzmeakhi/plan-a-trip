import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-col">
                <h4>Tripzone</h4>
                <p>About</p>
                <p>Awards</p>
                <p>Contact Us</p>
                <p>Feedback</p>
            </div>

            <div className="footer-col">
                <h4>Main Offices</h4>
                <p>The United States</p>
                <p>India</p>
                <p>Brazil</p>
                <p>Canada</p>
            </div>

            <div className="footer-col">
                <h4>Sub Offices</h4>
                <p>Australia</p>
                <p>England</p>
                <p>France</p>
                <p>Germany</p>
            </div>

            <div className="footer-col">
                <h4>Disclaimer</h4>
                <p>This layout is created as a part of Sirius UI Recruitments. All the above content has no direct relation with Sirius business.</p>
            </div>

        </div>
    );
}

export default Footer;