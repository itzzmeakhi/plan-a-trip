import React from 'react';

import './FormInput.scss';

const FormInput = ({ label, handleChange, errorMessage, ...otherProps }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                onChange={handleChange}
                {...otherProps} />
            {errorMessage ? <span className="error">{errorMessage}</span> : null}
        </div>
    );
}

export default FormInput;