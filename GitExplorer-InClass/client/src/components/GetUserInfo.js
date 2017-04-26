import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            gitUser: {}
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

    getUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            console.log('parsed json', json);
                // DISPLAY WITH LOGGER AS NEEDED
                // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
                var body = JSON.parse(json.body);
                that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    login: {this.state.gitUser.login}
                </p>
                <p className="App-intro">
                    avatar: {this.state.gitUser.avatar_url}
                </p>

                <button id="getUser" onClick={this.getUser}>Get Git User</button> <br />
            </div>
        );
    }
}

export default GetUserInfo;

