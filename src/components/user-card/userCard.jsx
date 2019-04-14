import React, { Fragment } from 'react';

const UserCard = ({
    name, dob, employmentStatus, income, houseNumber, postCode, submitUser, className, id,
}) => (
    <div className={`user ${className}`}>
        <h3>{name}</h3>
        <ul>
            <li>{`D.O.B: ${dob}`}</li>
            <li>{`Employment Status: ${employmentStatus}`}</li>
            <li>{`Income: ${income}`}</li>
            <li>{`House No: ${houseNumber}`}</li>
            <li>{`Postcode: ${postCode}`}</li>
        </ul>
        <button type="button" onClick={() => submitUser(name, dob, employmentStatus, income, houseNumber, postCode, id)}>Search for cards</button>
    </div>
);

export default UserCard;
