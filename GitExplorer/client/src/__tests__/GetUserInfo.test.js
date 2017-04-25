import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';


import { shallow } from 'enzyme';

describe('My rest basic test' ,function () {
/*    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };
    it('renders initial message for user field user login', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="User-field">Login Name:</p>;
        //const ninep = wrapper.find('p').first().debug();
        expect(wrapper.contains(nineSign)).toEqual(true);
    });*/

    it('renders button getUser button click and checks value for user login', () => {
        const wrapper = shallow(<GetUserInfo />);
        wrapper.find('button.getUserInfo').simulate('click');
        const nineSign = <p className="User-data">mccanncm66</p>;
        console.log("************************************************************");
        console.log(nineSign);
        expect(wrapper.contains(nineSign)).toEqual(true);

    });







});
