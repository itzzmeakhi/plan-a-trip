import React from 'react';

import Button from './../common/Button/Button';

import { ReactComponent as WelcomeImage } from './../../assets/welcome-image.svg';
import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="img-container">
                <WelcomeImage />
            </div>
            <div className="content">
                <h1> Life is short <br></br> and the world is wide! </h1>
                <p> Stay at the comfort of your homes and book a trip to travel after the post pandemic era. </p>
                <Button
                    type="button">
                        PLAN A TRIP
                </Button>
            </div>
        </div>
    );
}

export default Main;