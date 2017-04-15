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
            nine: '0'
        };
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

/*    fetch() {
        this.setState({foo: "bar"});
        return {
            then: function () {
                return {
                    then: function () {
                        return {
                            catch: function () {

                            }
                        }
                    }
                }
            }
        }
    }*/

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
                    state.file: {this.state.file}
                </p>
                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <button className="getFoo" onClick={this.getFoo}>Get Foo</button>
                <button className="getNine" onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

export default App;

