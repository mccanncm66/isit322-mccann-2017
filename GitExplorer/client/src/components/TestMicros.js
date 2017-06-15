import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

class TestMicros extends Component {

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    render() {
        return (
            <div className="App">
                <label className="pup-label">
                    Result: {this.props.micros.userService.result}
                </label> <br />
                <label className="pup-label">
                    Message: {this.props.micros.userService.message}
                </label><br />
                <Button className="testUserservice" bsStyle="danger" onClick={this.props.testUserService}>Test User Service</Button> <br />
                <label className="pup-label">
                    Result: {this.props.micros.quxService.result}
                </label> <br />
                <label className="pup-label">
                    Message: {this.props.micros.quxService.message}
                </label><br />
                <Button className="testQuxService" bsStyle="danger" onClick={this.props.testQuxService}>Test Qux Service</Button> <br />
                <label className="pup-label">
                    Result: {this.props.micros.gistService.result}
                </label> <br />
                <label className="pup-label">
                    Message: {this.props.micros.gistService.message}
                </label><br />
                <Button className="testGistService" bsStyle="danger" onClick={this.props.testGistService}>Test Gist Service</Button> <br />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        micros: {
            userService: state.micros.userService,
            quxService: state.micros.quxService,
            gistService: state.micros.gistService
        }
    };
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        testUserService: () => {
            fetch('/user/you-rang')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'USERSERVICE',
                    micros: {
                        userService: json,
                        quxService: state.quxService,
                        gistService: state.gistService
                    }
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        },
        testQuxService: () => {
            fetch('/qux/you-rang')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'QUXSERVICE',
                    micros: {
                        userService: state.userService,
                        quxService: json,
                        gistService: state.gistService
                    }
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        },
        testGistService: () => {
            fetch('/gists/you-rang')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'foobar',
                    micros: {
                        userService: state.userService,
                        quxService: state.quxService,
                        gistService: json
                    }
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};

TestMicros = connect(mapStateToProps, mapDispatchToProps)(TestMicros);

export default TestMicros;

