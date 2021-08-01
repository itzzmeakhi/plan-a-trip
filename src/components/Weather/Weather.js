import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Card from './../common/Card/Card';

import './Weather.scss';

const Weather = () => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        try {
            const fetchCitiesData =  async () => {
                const res = await (await axios.get('https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576')).data;
                setCities([...res?.result]);
            }
            fetchCitiesData();
        } catch (error) {
            console.log("Error occurred", error);
        }
    }, []);
    return (
        <div className="weather" id="weather">
            <div className="title">
                <p> THE WEATHER CHANNEL </p>
            </div>
            <div className="cities">
                {
                    cities.length > 0 && cities.map((city, index) => <Card key={uuidv4()} index={index} {...city} />)
                }
            </div>
        </div>
    );
}

export default Weather;