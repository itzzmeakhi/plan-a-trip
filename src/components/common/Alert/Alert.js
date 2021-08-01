import React from 'react';

import './Alert.scss';

const Alert = ({ msg }) => {
    return (
        <div className="alert">
            <p>{msg}</p>
        </div>
    );
}

export default Alert;