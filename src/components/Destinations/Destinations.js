import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Destinations.scss';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        try {
            const fetchDestinationsData =  async () => {
                const res = await (await axios.get('https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c')).data;
                setDestinations([...res?.result]);
            }
            fetchDestinationsData();
        } catch (error) {
            console.log("Error occurred", error);
        }
    }, []);
    return (
        <div className="destinations" id="destinations">
            <h2>Featured Destinations</h2>
            <div className="dest-swiper">
                {destinations && destinations.map(dest => {
                    return (
                        <div className="dest">
                            <div className="dest-img" style={{ backgroundImage: `url('${dest.imageUrl}')`}}></div>
                            <p>{dest.city}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Destinations;