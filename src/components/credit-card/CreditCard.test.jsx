import React from 'react';
import { shallow } from 'enzyme';
import CreditCard from './CreditCard';

const componentProps = {
    className: 'credit-card',
    name: 'test-card',
    apr: 25,
    balanceTransfer: 6,
    purchaseOffer: 6,
    creditAvailable: 5000,
};

const componentShallow = shallow(<CreditCard {...componentProps} />);

describe('CreditCard component', () => {
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

        test('should render an li with the apr prop', () => {
            expect(componentShallow.find('#apr').text()).toBe(`APR: ${componentProps.apr}%`);
        });

        test('should render an li with the balanceTransfer prop', () => {
            expect(componentShallow.find('#balance').text()).toBe(`Balance Transfer Offer Duration: ${componentProps.balanceTransfer} Months`);
        });

        test('should render an li with the purchaseOffer prop', () => {
            expect(componentShallow.find('#purchase').text()).toBe(`Purchase Offer Duration: ${componentProps.purchaseOffer} Months`);
        });

        test('should render an li with the creditAvailable prop', () => {
            expect(componentShallow.find('#credit').text()).toBe(`Credit Available: £${componentProps.creditAvailable}`);
        });
    });
});
