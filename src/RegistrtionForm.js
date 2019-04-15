import React, { Component } from 'react';

class RegistrtionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                surname: ''
            }
        };
        //this.handleNameChange = this.handleNameChange.bind(this);
        //this.handleSubnameChange = this.handleSubnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        //const data = new FormData(event.target);
        //console.log('form is submitted', this.state.email);
        //console.log('form is submitted', this.testInput.value);
        this.setState({user:{name: this.refs.name.value, surname: this.refs.surname.value}});
        console.log(this.refs);
        this.props.addUser({name: this.refs.name.value, surname: this.refs.surname.value});
    }
    handleEmailChange(event) {
        console.log('email was changed', this);
        this.setState({email: event.target.value})
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        placeholder='Name'
                        ref='name'
                        //value={this.state.name}
                      //  onChange={this.handleEmailChange}
                        //ref={(input) => this.testInput = input}
                    />
                    <input
                        type='text'
                        placeholder='Surname'
                        ref='surname'
                        //value={this.state.surname}
                       // onChange={this.handleEmailChange}
                        //ref={(input) => this.testInput = input}
                    />
                    <button>Save</button>
                </form>
            <p>{JSON.stringify(this.state.user)}</p>
            </div>
        )
    }
}

export default RegistrtionForm;
