/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import StyledDetailsForm from 'StyledComponents/StyledDetailsForm';
import StyledContainer from 'StyledComponents/StyledContainer';
import StyledCreditCard from 'StyledComponents/StyledCreditCard';
import StyledUserCard from 'StyledComponents/StyledUserCard';

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
            displayCards: false,
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

    renderUsers = () => {
        const { users } = this.state;

        const renderedUsers = users.map(({
            name, dob, employmentStatus, income, houseNumber, postCode, id,
        }) => (
            <StyledUserCard
                name={name}
                dob={dob}
                employmentStatus={employmentStatus}
                income={income}
                houseNumber={houseNumber}
                postCode={postCode}
                key={id}
                id={id}
                submitUser={this.submitUser}
            />
        ));

        return renderedUsers;
    }

    renderCards = (employmentStatus, income) => {
        const { cards } = this.state;
        const {
            name, apr, balanceTransfer, purchaseOffer, creditAvailable, eligible,
        } = cards;
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            displayCards: true,
        });
    }

    resetForm = () => {
        this.setState({
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
            displayCards: false,
        });
    }

    render() {
        const { selectedUser, submitEnabled, displayCards } = this.state;
        const { employmentStatus, income } = selectedUser;

        return (
            <StyledContainer className="grid-container">
                <div className="page-title">
                    <h1>
                    Crazy Cards Application
                    </h1>
                </div>
                <div className="page-content">
                    <div className="form">
                        <StyledDetailsForm
                            formDetails={selectedUser}
                            submitForm={this.submitForm}
                            submitEnabled={submitEnabled}
                        />
                    </div>
                    <div className="users">
                        {this.renderUsers()}
                    </div>
                    {displayCards && this.renderCards(employmentStatus, income)}
                    <button type="button" onClick={this.resetForm}>Reset</button>
                </div>
            </StyledContainer>
        );
    }
}

export default Container;
