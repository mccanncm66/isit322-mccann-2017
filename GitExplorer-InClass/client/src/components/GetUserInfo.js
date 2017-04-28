import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo'
import fieldDefinition from '../field-definitions';

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            gitUser: {
                login: 'asdf',
                avatar_url:'avatar'
            }
        };

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = true;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fetchUser = () => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            //console.log('parsed json', json);
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
                <ShowUserInfo
                    fields={fieldDefinition}
                    gitUser={this.state.gitUser}
                    onChange={this.fetchUser}
                />
            </div>
        );
    }
}

export default GetUserInfo;

