import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers from "../components/SmallNumbers";
import { shallow } from 'enzyme';

const numbersInit = {
    nine: '0',
    eight: '0',
    seven: '0',
    six: '0',
    five: '0',
    four: '0',
    three: '0',
    two: '0',
    one: '0',
};

describe('My small number test' ,function () {

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        //console.log(ninep);
    };

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
    };

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        getLast(wrapper);
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getNine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        getLast(wrapper);
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getEight', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getSeven', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getSix', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getFive', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.five: 5</p>;
        wrapper.find('button.getFive').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getFour', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.four: 4</p>;
        wrapper.find('button.getFour').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getThree', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.three: 3</p>;
        wrapper.find('button.getThree').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getTwo', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.two: 2</p>;
        wrapper.find('button.getTwo').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for button.getOne', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit} />);
        const nineSign = <p className="App-intro">state.one: 1</p>;
        wrapper.find('button.getOne').simulate('click');
        const ninep = wrapper.find('p').last().debug();
        //console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });




});
