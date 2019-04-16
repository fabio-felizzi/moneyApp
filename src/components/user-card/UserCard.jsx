import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({
    name, dob, employmentStatus, income, houseNumber, postCode, submitUser, className, id,
}) => (
    <div className={`user ${className}`}>
        <h3>{name}</h3>
        <ul>
            <li id="dob">{`D.O.B: ${dob}`}</li>
            <li id="status">{`Employment Status: ${employmentStatus}`}</li>
            <li id="income">{`Income: ${income}`}</li>
            <li id="houseNo">{`House No: ${houseNumber}`}</li>
            <li id="postCode">{`Postcode: ${postCode}`}</li>
        </ul>
        <button type="button" onClick={() => submitUser(name, dob, employmentStatus, income, houseNumber, postCode, id)}>Search for cards</button>
    </div>
);

UserCard.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    employmentStatus: PropTypes.string.isRequired,
    income: PropTypes.number.isRequired,
    houseNumber: PropTypes.number.isRequired,
    postCode: PropTypes.string.isRequired,
    submitUser: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default UserCard;
