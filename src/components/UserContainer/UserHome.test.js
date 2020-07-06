import React from 'react';
import { shallow } from 'enzyme';
import UserHome from './UserHome';

describe('UserHome Component', () => {
    it('only has 1 h5 in UserHome', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5');
        expect(text).toHaveLength(1);
    })

    it('check if UserHome message is visible', () => {
        const wrapper = shallow(<UserHome />);
        const text = wrapper.find('h5').text();
        expect(text).toEqual("Welcome User");
    })
})
