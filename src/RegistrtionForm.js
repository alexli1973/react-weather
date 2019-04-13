import React, { Component } from 'react';

class RegistrtionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log('form is submitted', this.state.email);
        console.log('form is submitted', this.testInput.value);
    }
    handleEmailChange(event) {
        console.log('email was changed', this);
        this.setState({email: event.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    placeholder='E-mail'
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ref={(input) => this.testInput = input}
                />
                <button>Save</button>
            </form>

        )
    }
}

export default RegistrtionForm;
