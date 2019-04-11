/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

import './Container.css';

class Container extends Component {
    constructor(props) {
        super(props);
        const { users, cards } = this.props;

        this.state = {
            users,
            cards,
        };
    }

    generateUsers = () => {
        const { users } = this.state;

        const renderedUsers = users.map(({
            name, dob, employmentStatus, income, houseNumber, postCode,
        }) => (
            <div styleName="user" key={name}>
                <h3>{name}</h3>
                <ul>
                    <li>{`D.O.B: ${dob}`}</li>
                    <li>{`Employment Status: ${employmentStatus}`}</li>
                    <li>{`Income: ${income}`}</li>
                    <li>{`House No: ${houseNumber}`}</li>
                    <li>{`Postcode: ${postCode}`}</li>
                </ul>
            </div>
        ));

        return renderedUsers;
    }

    render() {        
        return (
            <main id="container" styleName="grid-container">
                <div styleName="page-title">
                    <h1>
                    Crazy Cards Application
                    </h1>
                </div>
                <div styleName="page-content">
                    <div styleName="form">
                        <h1>TESTING LAYOUT</h1>
                    </div>
                    <div styleName="users">
                        {this.generateUsers()}
                    </div>
                    <div styleName="cards">
                        <h1>TESTING LAYOUT</h1>
                    </div>
                </div>
            </main>
        );
    }
}

export default Container;
