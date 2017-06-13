import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Logger from '../ElfLogger';
const logger = new Logger('show-new-gist');
import { Button } from 'react-bootstrap';
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

export class ShowNewGist extends Component {
    constructor() {
        super();
        logger.log("ShowNewGist being called");
        this.state = {
            filename: '',
            description: ''
        };
        this.createGist = this.createGist.bind(this);
    }

    resetForm = () => {
        location.reload(true);
    };

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fileNameHandleChange = (value) => {
        logger.log(this.state.filename);
        this.setState({
            filename: value
        });
    };

    descriptionHandleChange = (value) => {
        logger.log(this.state.description);
        this.setState({
            description: value
        });
    };

    createGist = () => {
        const fName = this.state.filename ? this.state.filename : 'default';
        const description = this.state.description ? this.state.description : "No description";
        this.props.fetchGist(fName, description);
    };

    render() {
        return (
            <div className="App">
                <form>
                    <div className="form-group">
                        <label htmlFor="tbFileName" className="col-sm-2">File Name</label>
                        <input id="tbFileName" placeholder="default.txt" className="form-control" type="text" onChange={(e) => this.fileNameHandleChange(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tbDescription" className="col-sm-2">Description</label>
                        <textarea rows="3" id="tbDescription" placeholder={this.props.gitGist.description} className="form-control" type="text" onChange={(e) => this.descriptionHandleChange(e.target.value)}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="tbCreatedOn" className="col-sm-2">Created On</label>
                        <input id="tbCreatedOn" value={this.props.gitGist.created_at} className="form-control" type="text" disabled="true"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tbid" className="col-sm-2">Id</label>
                        <input id="tbid" value={this.props.gitGist.id} className="form-control" type="text" disabled="true"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="aUrl" className="col-sm-2">Url</label><br />
                        <a id="aUrl" href={this.props.gitGist.url} className="form-control">{this.props.gitGist.url}</a>
                    </div>
                    <div className="form-group">
                        <label htmlFor="aHtmlUrl" className="col-sm-2">Html Url</label><br />
                        <a id="aHtmlUrl" href={this.props.gitGist.html_url} className="form-control">{this.props.gitGist.html_url}</a>
                    </div>
                    <Button id="getGist" bsStyle="danger" onClick={this.createGist}>Create Gist</Button> <br />
                    <Button id="btnReset" bsStyle="default" className="btn-sm" onClick={this.resetForm}>Reset</Button>
                </form>
            </div>
        );
    }
}

export default ShowNewGist;

