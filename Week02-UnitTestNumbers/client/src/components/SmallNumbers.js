import React, {Component} from 'react';
import '../css/App.css';

const error = {
    message: "No props in the small numbers component. you must pass in props."
};

class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        console.log('TEST PROPS', props);
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
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>
                <p className="App-intro">
                    state.seven: {this.state.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.state.six}
                </p>
                <p className="App-intro">
                    state.five: {this.state.five}
                </p>
                <p className="App-intro">
                    state.four: {this.state.four}
                </p>
                <p className="App-intro">
                    state.three: {this.state.three}
                </p>
                <p className="App-intro">
                    state.two: {this.state.two}
                </p>
                <p className="App-intro">
                    state.one: {this.state.one}
                </p>
                <button className="getNine" onClick={this.getNine}>Get Nine</button> <br />
                <button className="getEight" onClick={this.getEight}>Get Eight</button> <br />
                <button className="getSeven" onClick={this.getSeven}>Get Seven</button> <br />
                <button className="getSix" onClick={this.getSix}>Get Six</button> <br />
                <button className="getFive" onClick={this.getFive}>Get Five</button> <br />
                <button className="getFour" onClick={this.getFour}>Get Four</button> <br />
                <button className="getThree" onClick={this.getThree}>Get Three</button> <br />
                <button className="getTwo" onClick={this.getTwo}>Get Two</button> <br />
                <button className="getOne" onClick={this.getOne}>Get One</button> <br />
            </div>
        );
    }
}

export default SmallNumbers;

