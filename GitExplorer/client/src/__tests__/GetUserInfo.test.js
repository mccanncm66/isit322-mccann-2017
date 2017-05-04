import React from 'react';
import GetUserInfo from '../components/GetUserInfo';
import ReactDOM from 'react-dom';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(true);


import { shallow } from 'enzyme';
import { mount } from 'enzyme';

describe('My GetUserInfo test' ,function () {

    function getDefault(id, value) {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <label className="ElfFormLabel" htmlFor={id}>{value}</label>;
        elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);        
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });
    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <label className="ElfFormLabel" htmlFor="login">loginName:</label>;
        //elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for the button #getUser', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph" id="login">Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        //getFirst(wrapper, 'p');
        elfDebug.getIndex(wrapper, 0);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <label className="ElfFormLabel" htmlFor="avatar_url">Avatar Url:</label>;
        //elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button default message for the  #getUser', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph" id="avatar_url">aiunknown</p>;
        //getFirst(wrapper, 'p');
        elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders button click message for the button #getUser', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph" id="avatar_url">https://avatars1.githubusercontent.com/u/15935921?v=3</p>;
        wrapper.find('button#getUser').simulate('click');
        //getFirst(wrapper, 'p');
        elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

});
