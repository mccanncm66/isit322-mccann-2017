import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
//import mock from './mocks';
var fetch = require('./mocks').fetch;

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for server',
            nine: '0',
            eight: '0',
            seven: '0',
            six: '0',
            five: '0',
            four: '0',
            three: '0',
            two: '0',
            one: '0'
        };
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };

    getSix = () => {
        this.setState({six: '6'});
    };

    getFive = () => {
        this.setState({five: '5'});
    };

    getFour = () => {
        this.setState({four: '4'});
    };

    getThree = () => {
        this.setState({three: '3'});
    };

    getTwo = () => {
        this.setState({two: '2'});
    };

    getOne = () => {
        this.setState({one: '1'});
    };

    getFoo = () => {
        const that = this;
        fetch(this, '/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            }).catch(function (ex) {
                console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>

                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>
                <p className="App-intro">
                    state.seven: {this.state.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.state.six}
                </p>
                <p className="App-intro">
                    state.five: {this.state.five}
                </p>
                <p className="App-intro">
                    state.four: {this.state.four}
                </p>
                <p className="App-intro">
                    state.three: {this.state.three}
                </p>
                <p className="App-intro">
                    state.two: {this.state.two}
                </p>
                <p className="App-intro">
                    state.one: {this.state.one}
                </p>
                <button className="getFoo" onClick={this.getFoo}>Get Foo</button> <br />
                <button className="getNine" onClick={this.getNine}>Get Nine</button> <br />
                <button className="getEight" onClick={this.getEight}>Get Eight</button> <br />
                <button className="getSeven" onClick={this.getSeven}>Get Seven</button> <br />
                <button className="getSix" onClick={this.getSix}>Get Six</button> <br />
                <button className="getFive" onClick={this.getFive}>Get Five</button> <br />
                <button className="getFour" onClick={this.getFour}>Get Four</button> <br />
                <button className="getThree" onClick={this.getThree}>Get Three</button> <br />
                <button className="getTwo" onClick={this.getTwo}>Get Two</button> <br />
                <button className="getOne" onClick={this.getOne}>Get One</button> <br />
            </div>
        );
    }
}

export default App;

