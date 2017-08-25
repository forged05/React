import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AlertButton from './AlertButton';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AlertButton />, document.getElementById('root'));
registerServiceWorker();
