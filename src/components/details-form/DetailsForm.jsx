import React from 'react';
import PropTypes from 'prop-types';

const DetailsForm = ({
    className, formDetails, submitForm, submitEnabled,
}) => {
    const {
        name,
        dob,
        employmentStatus,
        income,
        houseNumber,
        postCode,
    } = formDetails;
    return (
        <form className={`${className} details-form`}>
            <div>
                <label htmlFor="name">
                  Name
                    <input id="name" type="text" name="name" value={name} placeholder="Name" />
                </label>
            </div>
            <div>
                <label htmlFor="dob">
                      Date of Birth
                    <input id="dob" type="text" name="dob" value={dob} placeholder="Date of Birth" />
                </label>
            </div>
            <div>
                <label htmlFor="employment">
                      Employment Status
                    <input id="employment" type="text" name="employment" value={employmentStatus} placeholder="Employment Status" />
                </label>
            </div>
            <div>
                <label htmlFor="income">
                      Income
                    <input id="income" type="text" name="income" value={income} placeholder="Income" />
                </label>
            </div>
            <div>
                <label htmlFor="houseNo">
                      House No
                    <input id="houseNo" type="text" name="houseNo" value={houseNumber} placeholder="House No" />
                </label>
            </div>
            <div>
                <label htmlFor="postcode">
                      Postcode
                    <input id="postcode" type="text" name="postcode" value={postCode} placeholder="Postcode" />
                </label>
            </div>
            <button disabled={submitEnabled === false} type="submit" onClick={submitForm}>Show me eligible cards</button>
        </form>
    );
};

DetailsForm.propTypes = {
    className: PropTypes.string.isRequired,
    formDetails: PropTypes.shape({
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        dob: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        employmentStatus: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        income: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        houseNumber: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        postCode: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }).isRequired,
    submitForm: PropTypes.func.isRequired,
    submitEnabled: PropTypes.bool.isRequired,
};

export default DetailsForm;
