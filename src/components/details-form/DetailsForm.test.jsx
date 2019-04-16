import React from 'react';
import { shallow } from 'enzyme';
import DetailsForm from './DetailsForm';

const componentProps = {
    className: 'test-form',
    formDetails: {
        name: 'test-name',
        dob: '12/12/12',
        employmentStatus: 'full-time',
        income: 50000,
        houseNumber: 123,
        postCode: 'ABC 123',
    },
    submitForm: () => {},
    submitEnabled: false,
};

const {
    name,
    dob,
    employmentStatus,
    income,
    houseNumber,
    postCode,
} = componentProps.formDetails;

const componentShallow = shallow(<DetailsForm {...componentProps} />);

describe('DetailsForm component', () => {
    describe('Component Shapshot', () => {
        test('should match stored snapshot', () => {
            expect(componentShallow).toMatchSnapshot();
        });
    });

    describe('Component Render', () => {
        test('should render the name prop', () => {
            expect(componentShallow.find('#name').props().value).toBe(name);
        });

        test('should render the dob prop', () => {
            expect(componentShallow.find('#dob').props().value).toBe(dob);
        });

        test('should render the employmentStatus prop', () => {
            expect(componentShallow.find('#employment').props().value).toBe(employmentStatus);
        });

        test('should render the income prop', () => {
            expect(componentShallow.find('#income').props().value).toBe(income);
        });

        test('should render the houseNumber prop', () => {
            expect(componentShallow.find('#houseNo').props().value).toBe(houseNumber);
        });

        test('should render the postCode prop', () => {
            expect(componentShallow.find('#postcode').props().value).toBe(postCode);
        });
    });
});
