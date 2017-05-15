import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Logger from '../ElfLogger';
const logger = new Logger('show-new-gist');
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

export class ShowNewGist extends Component {
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
                    Create On: {this.props.gitGist.created_at}
                </p>
                <p className="App-intro">
                    Id: {this.props.gitGist.id}
                </p>
                <p className="App-intro">
                    Url: <a href={this.props.gitGist.url}>{this.props.gitGist.url}</a>
                </p>
                <p className="App-intro">
                    Html Url: <a href={this.props.gitGist.html_url}>{this.props.gitGist.html_url}</a>
                </p>
                <p className="App-intro">
                    Description: {this.props.gitGist.description}
                </p>
                <button id="getGist" onClick={this.props.fetchGist}>Get Gist</button> <br />
            </div>
        );
    }
}

export default ShowNewGist;
