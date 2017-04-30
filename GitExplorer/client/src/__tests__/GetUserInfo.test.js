import React from 'react';
import GetUserInfo from '../components/GetUserInfo';
import ReactDOM from 'react-dom';


import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('My GetUserInfo test' ,function () {

    const showData = true;

    function getFirst(wrapper, element) {
        if (showData) {
            const ninep = wrapper.find(element).first().debug();
            console.log(ninep);
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });
    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <label className="ElfFormLabel" htmlFor="login">loginName:</label>;
        //getFirst(wrapper, 'label');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for the button #getUser', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph" id="login">Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        //getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

});
