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

    render() {
        logger.log('--GetUserInfo Render Being Called--');
        logger.log(JSON.stringify(this.state.gitUser));
        return (
            <div className="App">
                <ShowUserInfo
                    fields={this.props.fields}
                    gitUser={this.props.gitUser}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default GetUserInfo;

