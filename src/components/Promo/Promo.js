import React from 'react';

import { PromoCq } from './../../utils/content';

import './Promo.scss';

const Promo = () => {
    return (
        <div className="promo">
            <h2>{PromoCq.header}</h2>
            <p dangerouslySetInnerHTML={{ __html: PromoCq.caption }} />
        </div>
    );
}

export default Promo;