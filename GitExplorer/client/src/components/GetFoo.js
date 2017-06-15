import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

let GetFoo = class GetFoo extends Component {

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    render() {
        return (
            <div className="App">
                <label className="pup-label">
                    state.foo: {this.props.foo}
                </label><br />
                <label className="pup-label">
                    state.file: {this.props.file}
                </label> <br />
                <Button className="getFoo" bsStyle="danger" onClick={this.props.getFoo}>Get Foo</Button> <br />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        foo: state.getFoo.foo,
        file: state.getFoo.file,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFoo: () => {
            fetch('/foo')
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

