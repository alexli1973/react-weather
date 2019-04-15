import React, {Component} from 'react';

class UserDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <div className='users'>
                User ID: {id}
                ---------
                Name: {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default UserDetail;