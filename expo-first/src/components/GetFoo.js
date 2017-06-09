import React, {Component} from 'react';
//import '../css/App.css';
import 'whatwg-fetch';
//import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Button, StyleSheet, Text, View} from 'react-native';
//import mock from './mocks';
//var fetch = require('../mocks').fetch;

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for server',
            avatar: 'waiting for git image'
        };

        // SET quiet TO false TO SEE DEBUG MESSAGES
        this.quiet = true;
       // this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

/*    getFoo = () => {
        const that = this;
        fetch('/foo')
            .then(function (response) {
                that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
                that.debug('GETONE-FETCH-TWO');
                that.debug('parsed json', json);
                //console.log('parsed json', json);
                that.setState(foo => (json));
            }).catch(function (ex) {
                console.log('parsing failed', ex);
        });
    };*/

    render() {
        return (
            <View>
                <Text>
                    state.foo: {this.props.foo}
                </Text>
                <Text>
                    state.file: {this.props.file}
                </Text>
                <Button title="Get Foo" onPress={this.props.getFoo} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        foo: state.getFoo.foo,
        file: state.getFoo.file,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
/*        getBar: () => {
            dispatch({
                type: 'GETFOO',
                getFoo: {
                    foo: 'url-mock-bar',
                    file: 'url-mock-api.js'
                }
            });
        },*/
        getFoo: () => {
            fetch('http://168.156.47.131:30025/foo')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'GETFOO',
                    getFoo: json
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};

GetFoo = connect(mapStateToProps, mapDispatchToProps)(GetFoo);

export default GetFoo;

