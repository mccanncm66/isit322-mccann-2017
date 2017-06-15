import React, {Component} from 'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

const error = {
    message: 'No props in the small numbers component. you must pass in props.'
};

let SmallNumbers = class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        if(!props.numbers){
            alert('No props in the small numbers component. you must pass in props.');
            throw error.message;
        }
    }

    getNine = () => {
        this.props.dispatch({type: 'NUMBER_NINE'});
    };

    getEight = () => {
        this.props.dispatch({type: 'NUMBER_EIGHT'});
    };

    getSeven = () => {
        this.props.dispatch({type: 'NUMBER_SEVEN'});
    };

    getSix = () => {
        this.props.dispatch({type: 'NUMBER_SIX'});
    };

    getFive = () => {
        this.props.dispatch({type: 'NUMBER_FIVE'});
    };

    getFour = () => {
        this.props.dispatch({type: 'NUMBER_FOUR'});
    };

    getThree = () => {
        this.props.dispatch({type: 'NUMBER_THREE'});
    };

    getTwo = () => {
        this.props.dispatch({type: 'NUMBER_TWO'});
    };

    getOne = () => {
        this.props.dispatch({type: 'NUMBER_ONE'});
    };

    render() {
        return (
            <div className="App">
                <label className="pup-label-number">
                    state.nine: {this.props.numbers.nine}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getNine}>Get Nine</Button> <br />
                <label className="pup-label-number">
                    state.eight: {this.props.numbers.eight}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getEight}>Get Eight</Button> <br />

                <label className="pup-label-number">
                    state.seven: {this.props.numbers.seven}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getSeven}>Get Seven</Button> <br />

                <label className="pup-label-number">
                    state.six: {this.props.numbers.six}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getSix}>Get Six</Button> <br />

                <label className="pup-label-number">
                    state.five: {this.props.numbers.five}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getFive}>Get Five</Button> <br />

                <label className="pup-label-number">
                    state.four: {this.props.numbers.four}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getFour}>Get Four</Button> <br />

                <label className="pup-label-number">
                    state.three: {this.props.numbers.three}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getThree}>Get Three</Button> <br />

                <label className="pup-label-number">
                    state.two: {this.props.numbers.two}
                </label>
                <Button bsStyle="danger" className="numberButton" onClick={this.getTwo}>Get Two</Button> <br />

                <label className="pup-label-number">
                    state.one: {this.props.numbers.one}
                </label>                
                <Button bsStyle="danger" className="numberButton" onClick={this.getOne}>Get One</Button> <br />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers
    };
};

SmallNumbers = connect(mapStateToProps)(SmallNumbers);

export default SmallNumbers;

