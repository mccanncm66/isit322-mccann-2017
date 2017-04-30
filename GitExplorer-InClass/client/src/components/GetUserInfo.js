import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../elf-logger';
import ShowUserInfo from './ShowUserInfo'
import fieldDefinitions from '../field-definitions';
const logger = new Debug(true);

class GetUserInfo extends Component {
/*    constructor() {
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
    }*/ //Old Constuctor
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

        logger.log('GetUserInfo constructor called.')
        logger.log(JSON.stringify(this.state.gitUser));
    }
    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fetchUser = () => {
        logger.log('--Fetch User Being Called--');
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            //console.log('parsed json', json);
                var body = JSON.parse(json.body);
                that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });
        event.preventDefault();
    };

    render() {
        logger.log('--GetUserInfo Render Being Called--');
        logger.log(JSON.stringify(this.state.gitUser));
        return (
            <div className="App">
                <ShowUserInfo
                    fields={fieldDefinitions}
                    gitUser={this.state.gitUser}
                    onChange={this.fetchUser}
                />
            </div>
        );
    }
}

export default GetUserInfo;

