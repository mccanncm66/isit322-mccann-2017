import React, {Component} from 'react';
//import '../css/App.css';
//import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

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
            <View>
                <Text>
                    state.nine: {this.props.numbers.nine}
                </Text>
                <Button title="Get Nine" onPress={this.getNine} />
                <Text>
                    state.eight: {this.props.numbers.eight}
                </Text>
                <Button title="Get Eight" onPress={this.getEight} />

{/*                <Text className="pup-label-number">
                    state.seven: {this.props.numbers.seven}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getSeven}>Get Seven</Button> <br />

                <Text className="pup-label-number">
                    state.six: {this.props.numbers.six}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getSix}>Get Six</Button> <br />

                <Text className="pup-label-number">
                    state.five: {this.props.numbers.five}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getFive}>Get Five</Button> <br />

                <Text className="pup-label-number">
                    state.four: {this.props.numbers.four}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getFour}>Get Four</Button> <br />

                <Text className="pup-label-number">
                    state.three: {this.props.numbers.three}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getThree}>Get Three</Button> <br />

                <Text className="pup-label-number">
                    state.two: {this.props.numbers.two}
                </Text>
                <Button bsStyle="danger" className="numberButton" onPress={this.getTwo}>Get Two</Button> <br />

                <Text className="pup-label-number">
                    state.one: {this.props.numbers.one}
                </Text >
                <Button bsStyle="danger" className="numberButton" onPress={this.getOne}>Get One</Button> <br />*/}
            </View>
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

