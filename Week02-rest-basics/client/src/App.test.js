import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('My rest basic test' ,function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    })

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });


});
