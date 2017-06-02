import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FakeRedux from './FakeRedux';
import AppNoProps from './AppNoProps';
import DispatchConnect from './DispatchConnect';
import AppConnect from './AppConnect';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import spokesman from './spokesman';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(spokesman);
ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <App store={store} />
                <hr />
                <hr />
                <AppNoProps/>
                <hr />
                <hr />
                <DispatchConnect/>
                <hr />
                <hr />
                <AppConnect/>
                <hr />
                <hr />
                <FakeRedux />
            </div>
        </Provider>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
