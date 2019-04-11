import React from 'react';
import { shallow } from 'enzyme';
import { TitleBlock } from 'Components/title-block/TitleBlock';

describe('Button component', () => {
    const componentProps = {
        title: 'Component title',
        subtitle: 'Component subtitle',
    };

    const componentShallow = shallow(<TitleBlock {...componentProps} />);

    describe('Component Shapshot', () => {
        it('should match stored snapshot', () => {
            expect(componentShallow).toMatchSnapshot();
        });
    });

    describe('Component Render', () => {
        it('should render the title', () => {
            expect(componentShallow.find('h1')).toHaveLength(1);
        });

        it('should render the subtitle', () => {
            expect(componentShallow.find('h2')).toHaveLength(1);
        });
    });
});
