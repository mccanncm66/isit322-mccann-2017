import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../elf-logger';
import ElfHeader from './ElfHeader';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from '../numbers-data';
import fieldDefinitions from '../field-definitions';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
const logger = new Debug(false);

class DataMaven extends Component {

    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };

        logger.log('GetUserInfo constructor called.');
        logger.log(JSON.stringify(this.state.gitUser));
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fetchUser = (event) => {
        logger.log('--GetUserInfo Fetch User Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                logger.log(JSON.stringify(response));
                return response.json();
            }).then(function (json) {
            //console.log('parsed json', json);
            var body = JSON.parse(json.body);
            logger.log(JSON.stringify(body));
            that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });

    };

    fetchGist = (event) => {
        logger.log('--GetUserInfo Fetch Gist Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/api/gist-test')
            .then(function (response) {
                logger.log(JSON.stringify(response));
                return response.json();
            }).then(function (json) {
            //console.log('parsed json', json);
            var body = JSON.parse(json.body);
            logger.log(JSON.stringify(body));
            that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });

    };

    render() {
        logger.log('--GetUserInfo Render Being Called--');
        logger.log(JSON.stringify(this.state.gitUser));
        return (
            <Router>
                <div>
                    <ElfHeader/>
                    <Route exact path='/'
                           render={(props) => (
                           <GetUserInfo {...props}
                                            fields={fieldDefinitions}
                                            gitUser={this.state.gitUser}
                                            onChange={this.fetchUser}/>
                           )}
                       />

                    <Route path='/get-foo' component={GetFoo}/>
                    <Route path='/get-numbers'
                           render={(props) => (
                               <SmallNumbers {...props}
                                             numbers={numbersInit}/>
                           )}
                    />
                </div>
            </Router>
        );
    }
}
// <Route exact path='/' component={GetUserInfo}/>

export default DataMaven;

