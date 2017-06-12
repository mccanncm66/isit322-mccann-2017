import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Debug from '../ElfLogger';
import ElfHeader from './ElfHeader';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
//import numbersInit from '../numbers-data';
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
                description: 'enter description',
                created_at: '',
                filename: ''
            },
            gitJso: {
                full_name: 'full_name-qux',
                id: 'id-qux',
                url: 'url-qux',
                description: 'description-qux',
                html_url: 'foobar',
            },
            gistCanIterate: true,
            gistList: [
                {
                    url: 'default',
                    htmlUrl: 'https://gist.github.com/a023c7db77926ff58d35087821e12020',
                    id: 'a023c7db77926ff58d35087821e12020',
                    gitPullUrl: 'https://gist.github.com/a023c7db77926ff58d35087821e12020.git',
                    description: 'Simple React Component'                        ,
                    ownerLogin: 'login default',
                    avatarUrl: 'avatart default'
                }
            ]
        };
    };

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    gistDelete = (param, callback) => {
        const url = '/gists/delete?gistId=' + param;
        return fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                callback();
            })
            .catch((ex) => console.log('Fetch Exception', ex));
    };

    fetchUser = (event) => {
        logger.log('--GetUserInfo Fetch User Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/user/get-user')
            .then((response) => {
            console.log(response);
                return response.json();
            }).then((json) => {
            const body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
        });

    };

    fetchGist = (fileName, description) => {
        const that = this;
        const url = '/gists/gist-test?name=' + fileName + '&description=' + description;
        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
            const body = json.result;
            that.setState({gitGist: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
        });

    };

    fetchGistLists = (event) => {
        if(event) {
            event.preventDefault();
        }
        const that = this;
        fetch('/gists/get-gist-list')
            .then((response) => {
                return response.json();
            }).then((json) => {
            const body = json.result;
            that.setState({
                gistList: body,
                gistCanIterate: false
            });
        }).catch((ex) => {
            logger.log('ERROR:', ex);
        });

    };

    fetchJSO = (event) => {
        logger.log('--DataMaven FetchJSO Being Called--');
        event.preventDefault();
        const that = this;
        fetch('/user/charlie-jso')
            .then((response) => {
                return response.json();
            }).then((json) => {
            const body = JSON.parse(json.body);
            that.setState({gitJso: body});
        }).catch((ex) => {
            logger.log('ERROR:', ex);
        });

    };

    render = () => {
        return (
            <Router history="">
                <div className="container">
                    <ElfHeader />
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
                                     gistCanIterate={this.state.gistCanIterate}
                                     gistDelete={this.gistDelete}
                        />
                    )}/>
                    <Route path='/charlie-jso' render={(props) => (
                        <ShowJso {...props}
                                    gitJso={this.state.gitJso}
                                     fetchJSO={this.fetchJSO}
                        />
                    )}/>
                    <Route path='/get-numbers' component={SmallNumbers} />

                </div>
            </Router>
        );
    };
}

export default DataMaven;


/*<Route path='/get-numbers'
       render={(props) => (
           <SmallNumbers {...props}
                         numbers={numbersInit}/>
       )}
/>*/

