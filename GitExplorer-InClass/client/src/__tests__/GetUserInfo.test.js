import React from 'react';
import GetUserInfo from '../components/GetUserInfo';


import { shallow } from 'enzyme';

describe('My GetUserInfo test' ,function () {

    function getFirst(wrapper, element) {
        const ninep = wrapper.find(element).first().debug();
        console.log(ninep);
    }
    it('renders default login data', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: </p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for the button #getUser', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
