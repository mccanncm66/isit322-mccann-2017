import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Header from '../components/Header';
import SmallNumbers from "../components/SmallNumbers";
import { shallow } from 'enzyme';

describe('My rest basic test' ,function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });



    it('renders button click message for button.getFoo', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });



});
