import React, {Component} from 'react';
import 'whatwg-fetch';
import ElfElements from './ElfElements';
import Debug from '../ElfLogger'
const logger = new Debug(false);
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';


class ShowUserInfo extends Component {

    constructor() {
        super();

        //this.shouldUpdate = true;
        //logger.log('ShowUserInfo constructor called.');
        //logger.log('ShowUserInfo props.' + JSON.stringify(this.props.gitUser, null, 4));
    }
    render() {
        return (
            <View>
                <Button title="getUser" onPress={this.props.getUser}>Get Git User</Button>
                <View>
                    <Text>Login Name: {this.props.login}</Text>
                    <Text>Html Url: {this.props.html_url}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.getUser.login,
        html_url: state.getUser.html_url
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        getUser: () => {
            fetch('http://192.168.1.55:30025/user/expo-get-user')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                const body = JSON.parse(json.body);
                dispatch({
                    type: 'GETEXPOUSER',
                    getUser: body
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};

ShowUserInfo = connect(mapStateToProps, mapDispatchToProps)(ShowUserInfo);

export default ShowUserInfo;

