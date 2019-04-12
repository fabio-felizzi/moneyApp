import React, { Fragment } from 'react';

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
        id,
    } = formDetails;
    return (
        <Fragment>
            <form className={`${className} details-form`}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} placeholder="Name" />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="text" name="name" value={dob} placeholder="Date of Birth" />
                </div>
                <div>
                    <label>Employment Status</label>
                    <input type="text" name="name" value={employmentStatus} placeholder="Employment Status" />
                </div>
                <div>
                    <label>Income</label>
                    <input type="text" name="name" value={income} placeholder="Income" />
                </div>
                <div>
                    <label>House No</label>
                    <input type="text" name="name" value={houseNumber} placeholder="House No" />
                </div>
                <div>
                    <label>Postcode</label>
                    <input type="text" name="name" value={postCode} placeholder="Postcode" />
                </div>
                <button disabled={submitEnabled === false} type="submit" onClick={submitForm}>Show me eligible cards</button>
            </form>
        </Fragment>
    );
};

export default DetailsForm;
