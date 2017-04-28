import React from 'react';
import GetUserInfo from '../components/GetUserInfo';


import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('My GetUserInfo test' ,function () {

    const showData = false;

    function getFirst(wrapper, element) {
        if (showData) {
            const ninep = wrapper.find(element).debug();
            console.log(ninep);
        }
    }
    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: asdf</p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for the button #getUser', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        //getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
