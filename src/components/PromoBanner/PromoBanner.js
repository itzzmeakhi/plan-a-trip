import React, { useState, useEffect } from 'react';

import { remainingTime } from './../../utils/helpers';
import { PromoBannerCq } from './../../utils/content';

import './PromoBanner.scss';

const PromoBanner = () => {
    const [endsIn, setEndsIn] = useState(remainingTime());
    useEffect(() => {
        const timer = setTimeout(() => {
          setEndsIn(remainingTime());
        }, 1000);
        return () => clearTimeout(timer);
    });
    const { days, hours, minutes, seconds } = endsIn;

    return (
        <div className="promo-banner">
            <p> 
                {PromoBannerCq.promo}
            </p>
            <p className="bold"> 
                {`${PromoBannerCq.endsIn} ${days}d ${hours}h ${minutes}m ${seconds}s`}
            </p>
        </div>
    );
}

export default PromoBanner;