import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './containers/AppRoot';
const rootContainer = document.createElement('div');

document.body.appendChild(rootContainer);
ReactDOM.render(<AppRoot />, rootContainer);
