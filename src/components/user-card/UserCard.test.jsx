import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

const componentProps = {
    className: 'user-card',
    name: 'test-card',
    dob: '12/12/12',
    employmentStatus: 'full-time',
    income: 50000,
    houseNumber: 123,
    postCode: 'EC1 1AB',
    submitUser: () => {},
    id: 1,
};

const componentShallow = shallow(<UserCard {...componentProps} />);

describe('UserCard component', () => {
    describe('Component Shapshot', () => {
        test('should match stored snapshot', () => {
            expect(componentShallow).toMatchSnapshot();
        });
    });

    describe('Component Render', () => {
        test('should render the title', () => {
            expect(componentShallow.find('h3')).toHaveLength(1);
            expect(componentShallow.find('h3').text()).toBe(componentProps.name);
        });

        test('should render a ul', () => {
            expect(componentShallow.find('ul')).toHaveLength(1);
        });

        test('should render an li with the dob prop', () => {
            expect(componentShallow.find('#dob').text()).toBe(`D.O.B: ${componentProps.dob}`);
        });

        test('should render an li with the employmentStaus prop', () => {
            expect(componentShallow.find('#status').text()).toBe(`Employment Status: ${componentProps.employmentStatus}`);
        });

        test('should render an li with the income prop', () => {
            expect(componentShallow.find('#income').text()).toBe(`Income: ${componentProps.income}`);
        });

        test('should render an li with the houseNumber prop', () => {
            expect(componentShallow.find('#houseNo').text()).toBe(`House No: ${componentProps.houseNumber}`);
        });

        test('should render an li with the postCode prop', () => {
            expect(componentShallow.find('#postCode').text()).toBe(`Postcode: ${componentProps.postCode}`);
        });
    });
});
