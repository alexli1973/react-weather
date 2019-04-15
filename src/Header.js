import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Navbar, Nav} from "react-bootstrap";

class Header extends Component{

    render() {
        //console.log('MENU ', this.props.items);
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar><Link to="/weather">Weather</Link></Navbar>
                    <Navbar><Link to="/dropdown">Dropdown</Link></Navbar>
                    <Navbar><Link to="/users">Users</Link></Navbar>

                </Navbar>
                {/*{this.props.items.map((item, index) =>*/}
                    {/*<a href={item.link} key={index}>{item.label}</a>*/}
                {/*)}*/}
            </div>
        );
    }


}
//
// Header.propTypes = {
//     items: PropTypes.array.isRequired,
//     isLoading: PropTypes.bool,
//     submit: PropTypes.func.isRequired,
//     title: PropTypes.string.isRequired,
//     type: PropTypes.oneOf(['news', 'photos']),
//     user: PropTypes.shape({
//         name: PropTypes.string,
//         age: PropTypes.number
//     }),
//     users: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string,
//             age: PropTypes.number
//         })
//     )
// };

export default Header;
