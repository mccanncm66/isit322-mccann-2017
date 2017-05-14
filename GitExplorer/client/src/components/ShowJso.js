import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Logger from '../ElfLogger';
const logger = new Logger('show-new-gist');
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

export class ShowJso extends Component {
    constructor() {
        super();
        logger.log("ShowNewGist being called");
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    Full Name: {this.props.gitJso.full_name}
                </p>
                <p className="App-intro">
                    Id: {this.props.gitJso.id}
                </p>
                <p className="App-intro">
                    Url: {this.props.gitJso.url}
                </p>
                <p className="App-intro">
                    Description: {this.props.gitJso.description}
                </p>
                <button id="getGist" onClick={this.props.fetchJSO}>Get JsObjects</button> <br />
            </div>
        );
    }
}

export default ShowJso;

