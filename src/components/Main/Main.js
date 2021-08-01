import React from 'react';

import Button from './../common/Button/Button';
import { MainCq } from './../../utils/content';

import { ReactComponent as WelcomeImage } from './../../assets/welcome-image.svg';
import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="img-container">
                <WelcomeImage />
            </div>
            <div className="content">
                <h1 dangerouslySetInnerHTML={{ __html: MainCq.header }} />
                <p> {MainCq.caption} </p>
                <Button
                    type="button">
                        {MainCq.planBtnText}
                </Button>
            </div>
        </div>
    );
}

export default Main;