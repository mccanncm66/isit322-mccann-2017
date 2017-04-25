import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            userLogin: 'waiting for data',
            avatar_url: 'waiting for data',
            url: 'waiting for data',
            html_url: 'waiting for data',
            followers_url: 'waiting for data'
        };

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = true;
        this.debug('GetUserInfo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getUser = () => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // you write it

                return response.json();
            }).then (function (json) {
                //display wwith logger as needed
                //parse the json body into js since it is probably a string
                var body = JSON.parse(json.body);
                //console.log(body);
                that.setState({
                    userLogin: body.login
                ,   avatar_url: body.avatar_url
                ,   url: body.url
                ,   html_url: body.html_url
                ,   followers_url: body.followers_url});
        }).catch(function (ex) {
            //display with logger
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">

                    <p className="User-field">
                        Login Name:
                    </p>
                    <p className="User-data">
                        {this.state.userLogin}
                    </p>
                    <p className="User-field">
                        Avatar Url:
                    </p>
                    <p className="User-data">
                        {this.state.avatar_url}
                    </p>
                    <p className="User-field">
                        Url:
                    </p>
                    <p className="User-data">
                        {this.state.url}
                    </p>
                    <p className="User-field">
                        HTML Url:
                    </p>
                    <p className="User-data">
                        {this.state.html_url}
                    </p>
                    <p className="User-field">
                        Followers Url:
                    </p>
                    <p className="User-data">
                        {this.state.followers_url}
                    </p>
                    <button className="getUserInfo" onClick={this.getUser}>Get User</button> <br />

            </div>
        );
    }
}

export default GetUserInfo;

