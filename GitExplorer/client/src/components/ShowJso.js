import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';
import Logger from '../assets/ElfLogger';
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
                    Html Url: <a href={this.props.gitJso.html_url}>{this.props.gitJso.html_url}</a>
                </p>
                <p className="App-intro">
                    Description: {this.props.gitJso.description}
                </p>
                <Button id="getGist" bsStyle="danger" onClick={this.props.fetchJSO}>Get JsObjects</Button> <br />
            </div>
        );
    }
}

export default ShowJso;

