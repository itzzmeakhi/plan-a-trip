import React from 'react';

import { ReactComponent as WeatherIcon } from './../../../assets/icon-party-sunny.svg';

import './Card.scss';

const Card = ({ city, temp_Celsius, temp_Fahr, index }) => {
    const cardColors = {
        1: '#0D7E88',
        2: '#D09378',
        3: '#405B5D',
        4: '#74A748'
    };
    return (
        <div className="card" style={{ backgroundColor: cardColors[index+1] }}>
            <p>{city}</p>
            <WeatherIcon />
            <p className="temp">{temp_Celsius}&#176;</p>
        </div>
    );
}

export default Card;