import  React, {Component} from 'react';
import DropdownDisplay from "./DropdownDisplay";


const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            companies: [],
            selectedCompany: '',
            selectedCompanyLabel: ''
        };
    }
    getData() {
        setTimeout(() => {
            // this.setState({companies: techCompanies})
            this.setState({companies: [{label: 'Select Company', value: ''}].concat(techCompanies)})
        }, 1000);
    }
    componentDidMount() {
       // this.setState({companies: techCompanies})
        this.getData();
        this.setState({selectedCompanyLabel: ''})
    }
    toggleState() {
        this.setState({isOpened: !this.state.isOpened});
    }

    labelFromValue (id) {
       let findLabel = techCompanies.find(
           (opt) => opt.value == id
       );
        if(findLabel) {
            this.setState({
                selectedCompanyLabel: findLabel
            });
        }else {
            this.setState({
                selectedCompanyLabel: ''
            });
        }

    }

    showMessage(num) {
        alert('this message from parent! ' +  this.state.selectedCompanyLabel.label + ' ' + num);
    }

    render() {
       // let labelFromValue = (opts, id) => opts.find(opt => opt.value === id);
        const selectedCompanyLabel = this.state.selectedCompanyLabel.label;

        return (
            <div>
                <form>
                    <select value={this.state.selectedCompany}
                    //onChange={(event) => {this.setState({selectedCompany: event.target.value, selectedCompanyLabel: event.target.value});
                    onChange={(event) => {this.setState({selectedCompany: event.target.value});
                                this.labelFromValue(event.target.value);
                        }
                    }>
                        {this.state.companies.map(
                            (company) => <option key={company.value} value={company.value}>{company.label}</option>)}
                    </select>
                </form>

                <p >from parent {selectedCompanyLabel}</p>
                <DropdownDisplay
                    selectedCompanyLabel={this.state.selectedCompanyLabel}
                    showMessage = {this.showMessage.bind(this)}
                />

            </div>
        );
    }

}
export default Dropdown;