import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from './components/GetFoo';
import GetUserInfo from './components/GetUserInfo';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import './css/index.css';

var numbersInit = {
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

ReactDOM.render(
    <div>
        <Header />
        <GetUserInfo/>
        <GetFoo />
        <SmallNumbers numbers={numbersInit} />
    </div>,

  document.getElementById('root')
);
