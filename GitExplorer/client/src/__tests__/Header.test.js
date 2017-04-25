import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from '../components/GetFoo';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('My header test' ,function () {

    var quiet = false;

    function getFirst(wrapper) {
        const eightp = wrapper.find('h2').first().debug();
        if(!quiet) {
            console.log("Headder:", eightp);
        }

    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetFoo />, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});
