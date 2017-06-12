import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../ElfLogger';
import ShowUserInfo from './ShowUserInfo'
import fieldDefinitions from '../field-definitions';
const logger = new Debug(false);

class GetUserInfo extends Component {

    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

        logger.log('GetUserInfo constructor called.');
        logger.log(JSON.stringify(this.state.gitUser));
    }
    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fetchUser = (event) => {
        logger.log('--GetUserInfo Fetch User Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/api/charlie')
            .then(function (response) {
                logger.log(JSON.stringify(response));
                return response.json();
            }).then(function (json) {
            //console.log('parsed json', json);
                var body = JSON.parse(json.body);
                logger.log(JSON.stringify(body));
                that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });

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
