import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import ElfEnzymeDebug from '../assets/ElfEnzymeDebug';
var elfDebug = new ElfEnzymeDebug(false, 'header-test');
import {
    BrowserRouter as Router,
} from 'react-router-dom'

describe('My header test' ,function () {


    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><ElfHeader/></Router>, div);
    });
    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to React</h2>;
        elfDebug.getAll(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and reads H2 text using mount', () => {
        const wrapper = mount(<Router><ElfHeader/></Router>);
        const welcome = <h2>Welcome to React</h2>;
        elfDebug.getAll(wrapper);
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});
