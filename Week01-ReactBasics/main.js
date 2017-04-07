/**
 * Created by bcuser on 4/6/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';

//importing the ReactBasics class/object
import { ReactBasics } from './ReactBasics.js';
import { ReactHello } from './ReactHello.js';

//<ReactBasics/> is the class from ReactBasics.js

//render the class into the root element
ReactDOM.render(<div><ReactBasics/> <ReactHello/></div>, document.getElementById('root'));
