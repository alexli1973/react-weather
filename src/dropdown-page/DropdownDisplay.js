import React, {Component} from 'react';

class DropdownDisplay extends Component {

    constructor() {
        super();
    }

    render() {
        const selectedCompanyLabel = this.props.selectedCompanyLabel.label;
        return (
            <div>
                <p>This is DropdownDisplay Block</p>
                <p>{selectedCompanyLabel}</p>
                <button onClick={this.props.showMessage.bind(null, 3)}>Child Button</button>
            </div>
        );
    }
}

export default DropdownDisplay;