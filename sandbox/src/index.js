import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Button} from 'react-bootstrap'; 

ReactDOM.render(
	<div>
		<App />
		<Button bsStyle='danger'>Danger</Button>
	</div>
, document.getElementById('root'));
registerServiceWorker();
