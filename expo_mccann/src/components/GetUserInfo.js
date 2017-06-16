import React, {Component} from 'react';
import 'whatwg-fetch';
import Debug from '../ElfLogger';
import ShowUserInfo from './ShowUserInfo'
import fieldDefinitions from '../field-definitions';
const logger = new Debug(false);
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

class GetUserInfo extends Component {

    constructor() {
        super();
        const tempGitUser = {};
        this.state = {
            gitUser: {
                login: 'nada',
                html_url: 'nada'
            }
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
            <View>
                <ShowUserInfo
                    fields={this.props.fields}
                    gitUser={this.props.gitUser}
                    onChange={this.props.onChange}
                />
            </View>
        );
    }
}

export default GetUserInfo;

