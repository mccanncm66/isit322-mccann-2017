import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../ElfLogger';
import ElfHeader from './ElfHeader';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from '../numbers-data';
import fieldDefinitions from '../field-definitions';
import ShowNewGist from './ShowNewGist';
import GistLister from './GistLister';
import ShowJso from './ShowJso';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
const logger = new Debug('data-maven');

class DataMaven extends Component {

    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }
        this.state = {
            gitUser: tempGitUser,
            gitGist: {
                id: 'id-qux',
                url: '',
                html_url: '',
                description: 'description-qux',
                created_at: ''
            },
            gitJso: {
                full_name: 'full_name-qux',
                id: 'id-qux',
                url: 'url-qux',
                description: 'description-qux',
                html_url: 'foobar',
            },
            gistList: [{html_url: 'foo'}]
        };
        //this.fetchGistLists = this.fetchGistLists.bind(this);
        //logger.log('GetUserInfo constructor called.');
        //logger.log(JSON.stringify(this.state.gitUser));
    };

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    fetchUser = (event) => {
        //logger.log('--GetUserInfo Fetch User Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/gitapi/user')
            .then((response) => {
                logger.log(JSON.stringify(response));
                return response.json();
            }).then((json) => {
            //console.log('parsed json', json);
            const body = JSON.parse(json.body);
            logger.log(JSON.stringify(body));
            that.setState({gitUser: body});
        }).catch((ex) => {
            // DISPLAY WITH LOGGER
        });

    };

    fetchGist = (event) => {
        logger.log('--DataMaven Fetch Gist Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/gitapi/gists/gist-test')
            .then((response) => {
                //logger.log(JSON.stringify(response));
                return response.json();
            }).then((json) => {
            //console.log('parsed json', json);
            const body = json.result;
            //logger.log(JSON.stringify(body));
            that.setState({gitGist: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
            // DISPLAY WITH LOGGER
        });

    };

    fetchGistLists = (event) => {
        logger.log('--DataMaven Fetch Gist Lists Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/gitapi/gists/get-gist-list')
            .then((response) => {
                //logger.log(JSON.stringify(response));
                return response.json();
            }).then((json) => {
            //console.log('parsed json', json);
            const body = json.result;
            //logger.log(JSON.stringify(body));
            that.setState({gistList: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
            // DISPLAY WITH LOGGER
        });

    };

    fetchJSO = (event) => {
        logger.log('--DataMaven FetchJSO Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/gitapi/user/charlie-jso')
            .then((response) => {
                //logger.log(JSON.stringify(response));
                return response.json();
            }).then((json) => {
            //console.log('parsed json', json);
            const body = JSON.parse(json.body);
            //logger.log(JSON.stringify(body));
            that.setState({gitJso: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
            // DISPLAY WITH LOGGER
        });

    };

    render = () => {
        //logger.log('--DataMaven Render Being Called--');
        //logger.log(JSON.stringify(this.state.gitUser));
        return (
            <Router history="">
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
                    <Route path='/show-new-gist' render={(props) => (
                        <ShowNewGist {...props}
                                        gitGist={this.state.gitGist}
                                        fetchGist={this.fetchGist}
                                     />
                    )}/>
                    <Route path='/get-gist-list' render={(props) => (
                        <GistLister {...props}
                                     gistList={this.state.gistList}
                                     fetchGistLists={this.fetchGistLists}
                        />
                    )}/>
                    <Route path='/charlie-jso' render={(props) => (
                        <ShowJso {...props}
                                    gitJso={this.state.gitJso}
                                     fetchJSO={this.fetchJSO}
                        />
                    )}/>
                    <Route path='/get-numbers'
                           render={(props) => (
                               <SmallNumbers {...props}
                                             numbers={numbersInit}/>
                           )}
                    />
                </div>
            </Router>
        );
    };
}

export default DataMaven;

