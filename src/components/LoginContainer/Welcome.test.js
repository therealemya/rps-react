import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome Component', () => {
    it('only has 1 h1 in Welcome', () => {
        const wrapper = shallow(<Welcome />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    })

    it('check if Welcome message is visible', () => {
        const wrapper = shallow(<Welcome />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual("Welcome");
    })

    it('only has 1 h5 in Welcome', () => {
        const wrapper = shallow(<Welcome />);
        const text = wrapper.find('h5');
        expect(text).toHaveLength(1);
    })

    it('check if A World Wide Game Of FUN!! message is visible', () => {
        const wrapper = shallow(<Welcome />);
        const text = wrapper.find('h5').text();
        expect(text).toEqual("A World Wide Game Of FUN!!");
    })
})





