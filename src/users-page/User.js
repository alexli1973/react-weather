import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class User extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='users'>
                <p>Number : {this.props.num}</p>
                <p>Name : {this.props.name}</p>
                <p>Surname : {this.props.surname}</p>
                <button onClick={this.props.deleteUser.bind(null, this.props.index)}>Delete user {this.props.name}</button>
                <p><NavLink to={`/users/${this.props.index}`}>Details</NavLink></p>
                {/*<button onClick={this.props.userDetails.bind(null, this.props.index)}>{this.props.name} details</button>*/}
            </div>
        );
    }
}

export default User;