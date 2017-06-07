import React, {Component} from 'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';

const error = {
    message: "No props in the small numbers component. you must pass in props."
};

class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        //console.log('TEST PROPS', props);
        if(!props.numbers){
            alert("No props in the small numbers component. you must pass in props.");
            throw error.message;
        }
/*        this.state = {
            nine: props.numbers.nine,
            eight: props.numbers.eight,
            seven: props.numbers.seven,
            six: props.numbers.six,
            five: props.numbers.five,
            four: props.numbers.four,
            three: props.numbers.three,
            two: props.numbers.two,
            one: props.numbers.one
        };*/
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
                <Button className="numberButton" onClick={this.getNine}>Get Nine</Button> <br />
                <label className="pup-label-number">
                    state.eight: {this.props.numbers.eight}
                </label>
                <Button className="numberButton" onClick={this.getEight}>Get Eight</Button> <br />

                <label className="pup-label-number">
                    state.seven: {this.props.numbers.seven}
                </label>
                <Button className="numberButton" onClick={this.getSeven}>Get Seven</Button> <br />

                <label className="pup-label-number">
                    state.six: {this.props.numbers.six}
                </label>
                <Button className="numberButton" onClick={this.getSix}>Get Six</Button> <br />

                <label className="pup-label-number">
                    state.five: {this.props.numbers.five}
                </label>
                <Button className="numberButton" onClick={this.getFive}>Get Five</Button> <br />

                <label className="pup-label-number">
                    state.four: {this.props.numbers.four}
                </label>
                <Button className="numberButton" onClick={this.getFour}>Get Four</Button> <br />

                <label className="pup-label-number">
                    state.three: {this.props.numbers.three}
                </label>
                <Button className="numberButton" onClick={this.getThree}>Get Three</Button> <br />

                <label className="pup-label-number">
                    state.two: {this.props.numbers.two}
                </label>
                <Button className="numberButton" onClick={this.getTwo}>Get Two</Button> <br />

                <label className="pup-label-number">
                    state.one: {this.props.numbers.one}
                </label>                
                <Button className="numberButton" onClick={this.getOne}>Get One</Button> <br />
            </div>
        );
    }
}



// SMALL NUMBERS ITSELF HERE.
// AND AT THE BOTTOM:

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers
    };
};

SmallNumbers = connect(mapStateToProps)(SmallNumbers);

export default SmallNumbers;

