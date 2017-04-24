import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for server',
            avatar: 'waiting for git image'
        };

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = false;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getFoo = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
                that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
                that.debug('GETONE-FETCH-TWO');
                that.debug('parsed json', json);
                console.log('parsed json', json);
                that.setState(foo => (json));
            }).catch(function (ex) {
                console.log('parsing failed', ex);
        });
    };
/*    getGit = () => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
            that.debug('GETONE-FETCH-TWO');
            that.debug('parsed json', json);
            console.log('parsed json', json);
            that.setState(avatar => (JSON.parse(json.body).avatar_url));
            console.log(JSON.parse(json.body).avatar_url);
            that.avatar = JSON.parse(json.body).avatar_url;
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };*/

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>
{/*                <p className="App-intro">
                    Git Image: {this.state.avatar}
                </p>*/}
                <button className="getFoo" onClick={this.getFoo}>Get Foo</button> <br />
{/*                <button className="getGit" onClick={this.getGit}>Get Git</button> <br />*/}
            </div>
        );
    }
}

export default GetFoo;

