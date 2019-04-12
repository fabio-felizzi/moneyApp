/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import StyledDetailsForm from 'StyledComponents/StyledDetailsForm';
import StyledContainer from 'StyledComponents/StyledContainer';

class Container extends Component {
    constructor(props) {
        super(props);
        const { users, cards } = this.props;

        this.state = {
            users,
            cards,
            selectedUser: {
                name: '',
                dob: '',
                employmentStatus: '',
                income: '',
                houseNumber: '',
                postCode: '',
                id: '',
            },
            submitEnabled: false,
        };
    }

    submitUser = (name, dob, employmentStatus, income, houseNumber, postCode, id) => {
        this.setState({
            selectedUser: {
                name, dob, employmentStatus, income, houseNumber, postCode, id,
            },
            submitEnabled: true,
        });
    }

    generateUsers = () => {
        const { users } = this.state;

        const renderedUsers = users.map(({
            name, dob, employmentStatus, income, houseNumber, postCode, id,
        }) => (
            <div className="user" key={id}>
                <h3>{name}</h3>
                <ul>
                    <li>{`D.O.B: ${dob}`}</li>
                    <li>{`Employment Status: ${employmentStatus}`}</li>
                    <li>{`Income: ${income}`}</li>
                    <li>{`House No: ${houseNumber}`}</li>
                    <li>{`Postcode: ${postCode}`}</li>
                </ul>
                <button type="button" onClick={() => this.submitUser(name, dob, employmentStatus, income, houseNumber, postCode, id)}>Search for cards</button>
            </div>
        ));

        return renderedUsers;
    }

    submitForm = (e) => {
        e.preventDefault();

        console.log('submitting');
    }

    render() {
        const { selectedUser, submitEnabled } = this.state;

        return (
            <StyledContainer id="container" className="grid-container">
                <div className="page-title">
                    <h1>
                    Crazy Cards Application
                    </h1>
                </div>
                <div className="page-content">
                    <div className="form">
                        <StyledDetailsForm formDetails={selectedUser} submitForm={this.submitForm} submitEnabled={submitEnabled} />
                    </div>
                    <div className="users">
                        {this.generateUsers()}
                    </div>
                    <div className="cards">
                        <h1>TESTING LAYOUT</h1>
                    </div>
                </div>
            </StyledContainer>
        );
    }
}

export default Container;
