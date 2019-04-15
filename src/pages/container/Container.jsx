/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

        const renderedCards = cards.map((card) => {
            const {
                name, apr, balanceTransfer, purchaseOffer, creditAvailable, employment, minIncome, defaultCard,
            } = card;

            return (
                <StyledCreditCard
                    name={name}
                    apr={apr}
                    balanceTransfer={balanceTransfer}
                    purchaseOffer={purchaseOffer}
                    creditAvailable={creditAvailable}
                    employment={employment}
                    minIncome={minIncome}
                    key={name}
                    defaultCard={defaultCard}
                />
            );
        }).filter((card) => {
            const { employment, minIncome, defaultCard } = card.props;
            let isVisible = false;

            if (employmentStatus === employment) {
                isVisible = true;
            } else if (income >= minIncome && minIncome !== null) {
                isVisible = true;
            } else if (defaultCard === true) {
                isVisible = true;
            } else {
                isVisible = false;
            }

            return isVisible;
        });

        return renderedCards;
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

Container.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
};

export default Container;
