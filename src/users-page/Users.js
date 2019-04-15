import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import User from "./User";
import RegistrtionForm from "../RegistrtionForm";

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {name: 'Ran', surname: 'Israilov'},
                {name: 'Vasya', surname: 'Pupkin'},
                {name: 'Izik', surname: 'Petrov'},
            ]
        };
    }

    addUser() {
    }

    deleteUser(index) {
        this.state.users.splice(index, 1);
        this.setState({users: this.state.users});
    }

    handleAddUser(user) {
        let newArrUsers = this.state.users.slice();
        newArrUsers.push(user);
        // this.setState({
        //     users: newArrUsers
        // });
        this.setState({
            users: [...this.state.users, user]
        });
    }

    getUserById(id) {
        return this.state.users.find((user, index) => user[index] === id);
    }

    render() {
        let users = this.state.users.map((user, index) => {
            return <User
                key = {index}
                name = {user.name}
                surname = {user.surname}
                num = {index + 1}
                index = {index}
                deleteUser = {this.deleteUser.bind(this)}
                //userDetails = {this.userDetails.bind({index})}
            />
        });
        return (
            <div>
                <RegistrtionForm addUser={this.handleAddUser.bind(this)}/>
                {users}
            </div>
        );
    }
}

export default Users;