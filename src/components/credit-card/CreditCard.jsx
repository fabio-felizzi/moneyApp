import React, { Fragment } from 'react';

const CreditCard = ({
    className, name, apr, balanceTransfer, purchaseOffer, creditAvailable,
}) => {
    return (
        <div className={`card ${className}`}>
            <h3>{name}</h3>
            <ul>
                <li>{`APR: ${apr}%`}</li>
                <li>{`Balance Transfer Offer Duration: ${balanceTransfer} Months`}</li>
                <li>{`Purchase Offer Duration: ${purchaseOffer} Months`}</li>
                <li>{`Credit Available: £${creditAvailable}`}</li>
            </ul>
        </div>
    );
};

export default CreditCard;
