/**
 * Created by charlie on 4/15/17.
 */

import React, {Component} from 'react';
import GetUserInfo from './GetUserInfo';
import GetCharlieInfo from './GetCharlieInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from '../numbers-data';
import logo from '../images/Inkscape-small.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';
import '../css/menu.css'

class ElfHeader extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className="App">
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>Welcome to React</h2>

                        </div>
                    </div>
                    <div id="menu-container">
                        <ul>
                            <li><Link to="/">Caleb's Git Info</Link></li>
                            <li><Link to="/get-foo">BarFoo</Link></li>
                            <li><Link to="/get-numbers">Numbers</Link></li>
                            <li><Link to="/get-charlie">Charlie's Git Info</Link></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={GetUserInfo}/>
                    <Route exact path="/get-foo" component={GetFoo}/>
                    <Route path="/get-numbers"
                           render={(props) => (
                               <SmallNumbers {...props}
                                             numbers={numbersInit} />
                           )}
                    />
                    <Route exact path="/get-charlie" component={GetCharlieInfo}/>
                </div>

            </Router>
        );
    }
}

export default ElfHeader;