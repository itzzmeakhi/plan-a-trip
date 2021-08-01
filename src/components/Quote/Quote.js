import React, { Component } from 'react';

import FormInput from './../common/FormInput/FormInput';
import Button from './../common/Button/Button';
import Alert from './../common/Alert/Alert';

import { QuoteCq } from './../../utils/content';

import './Quote.scss';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            email: '',
            valid: {
                name: {error: Object.keys(QuoteCq.fields.name.validations).length > 0},
                contact: {error: Object.keys(QuoteCq.fields.contact.validations).length > 0},
                email: {error: Object.keys(QuoteCq.fields.email.validations).length > 0}
            },
            showAlert: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.handleValidation(name, value);
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            contact: '',
            email: '',
            valid: {
                name: {error: Object.keys(QuoteCq.fields.name.validations).length > 0},
                contact: {error: Object.keys(QuoteCq.fields.contact.validations).length > 0},
                email: {error: Object.keys(QuoteCq.fields.email.validations).length > 0}
            },
            showAlert: true
        }, () => this.closeAlert());
    }

    closeAlert = () => {
        setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                valid: {...prevState.valid},
                showAlert: false
            }))
        }, 5000);
    }

    handleValidation = (name, value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const phoneRegex = /^[6-9]\d{9}$/;
        const validations = QuoteCq.fields[name].validations;
        const errorMessages = QuoteCq.fields[name].errorMessages;
        if(validations.required && value === "") {
            this.setState({
                valid: { [name]: { error: true, errorMessage: errorMessages.required } }
            });
        } else if(validations.phone && phoneRegex.test(value) === false) {
            this.setState({
                valid: { [name]: { error: true, errorMessage: errorMessages.phone } }
            });
        } else if(validations.email && emailRegex.test(value) === false) {
            this.setState({
                valid: { [name]: { error: true, errorMessage: errorMessages.email } }
            });
        } else {
            this.setState({
                valid: { [name]: { error: false, errorMessage: '' } }
            });
        }
    }

    render() {
        const { name, contact, email, valid, showAlert } = this.state;
        const { fields } = QuoteCq;
        return (
            <div className="quote" id="quote">
                <h2>{QuoteCq.header}</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={fields.name.label}
                        type="text"
                        name={fields.name.name}
                        value={name}
                        errorMessage={valid?.name?.errorMessage || ''}
                        handleChange={this.handleChange}
                        autoComplete="off" />

                    <FormInput
                        label={fields.contact.label}
                        type="text"
                        name={fields.contact.name}
                        value={contact}
                        errorMessage={valid?.contact?.errorMessage || ''}
                        handleChange={this.handleChange}
                        autoComplete="off" />

                    <FormInput
                        label={fields.email.label}
                        type="email"
                        name={fields.email.name}
                        value={email}
                        errorMessage={valid?.email?.errorMessage || ''}
                        handleChange={this.handleChange}
                        autoComplete="off" />

                    { showAlert ? <Alert msg={QuoteCq.successAlert} /> : null }

                    <Button
                        disabled={valid?.email?.error || valid?.name?.error || valid?.contact?.error}
                        type="submit">
                            {QuoteCq.submitBtnText}
                    </Button>
                </form>
            </div>
        );
    }
}

export default Quote;