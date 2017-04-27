import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';


import { shallow } from 'enzyme';

describe('My rest basic test' ,function () {


    const getLast = (wrapper, element) => {
        const ninep = wrapper.find(element).last().debug();
        console.log(ninep);
    };
    it('renders initial message for user field user login', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="User-field">Login Name:</p>;
        getLast(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button getUser button click and checks value for user login', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="User-data">waiting for data</p>;
        wrapper.find('button#getUserInfo').simulate('click');
        getLast(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
