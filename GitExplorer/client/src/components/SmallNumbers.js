import React, {Component} from 'react';
import '../css/App.css';
import { Button } from 'react-bootstrap';


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
        this.state = {
            nine: props.numbers.nine,
            eight: props.numbers.eight,
            seven: props.numbers.seven,
            six: props.numbers.six,
            five: props.numbers.five,
            four: props.numbers.four,
            three: props.numbers.three,
            two: props.numbers.two,
            one: props.numbers.one
        };
    }

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    getSeven = () => {
        this.setState({seven: '7'});
    };

    getSix = () => {
        this.setState({six: '6'});
    };

    getFive = () => {
        this.setState({five: '5'});
    };

    getFour = () => {
        this.setState({four: '4'});
    };

    getThree = () => {
        this.setState({three: '3'});
    };

    getTwo = () => {
        this.setState({two: '2'});
    };

    getOne = () => {
        this.setState({one: '1'});
    };



    render() {
        return (
            <div className="App">
                <label className="pup-label-number">
                    state.nine: {this.state.nine}
                </label>
                <Button className="numberButton" onClick={this.getNine}>Get Nine</Button> <br />
                <label className="pup-label-number">
                    state.eight: {this.state.eight}
                </label>
                <Button className="numberButton" onClick={this.getEight}>Get Eight</Button> <br />

                <label className="pup-label-number">
                    state.seven: {this.state.seven}
                </label>
                <Button className="numberButton" onClick={this.getSeven}>Get Seven</Button> <br />

                <label className="pup-label-number">
                    state.six: {this.state.six}
                </label>
                <Button className="numberButton" onClick={this.getSix}>Get Six</Button> <br />

                <label className="pup-label-number">
                    state.five: {this.state.five}
                </label>
                <Button className="numberButton" onClick={this.getFive}>Get Five</Button> <br />

                <label className="pup-label-number">
                    state.four: {this.state.four}
                </label>
                <Button className="numberButton" onClick={this.getFour}>Get Four</Button> <br />

                <label className="pup-label-number">
                    state.three: {this.state.three}
                </label>
                <Button className="numberButton" onClick={this.getThree}>Get Three</Button> <br />

                <label className="pup-label-number">
                    state.two: {this.state.two}
                </label>
                <Button className="numberButton" onClick={this.getTwo}>Get Two</Button> <br />

                <label className="pup-label-number">
                    state.one: {this.state.one}
                </label>                
                <Button className="numberButton" onClick={this.getOne}>Get One</Button> <br />
            </div>
        );
    }
}

export default SmallNumbers;

