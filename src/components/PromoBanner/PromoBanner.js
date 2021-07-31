import React, { useState, useEffect } from 'react';

import './PromoBanner.scss';

const PromoBanner = () => {
    const endTime = new Date('2021', '07', '08', '18', '00');
    const [remainingTime, setRemainingTime] = useState(new Date(new Date() - endTime));
    console.log("=> end", endTime)
    console.log("=> now", new Date())
    console.log("=> remaini", remainingTime)

    return (
        <div className="promo-banner">
            <p> 
                Book now to get exciting travel deals. Upto 40% off on credit card payments 
            </p>
            <p> 
                <b>
                    Offer ends in 
                </b>
            </p>
        </div>
    );
}

export default PromoBanner;