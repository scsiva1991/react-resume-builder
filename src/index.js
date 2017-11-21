console.log('!!');
import materialize from 'materialize-css/dist/css/materialize.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import store from './store/configureStore';

ReactDOM.render((
    <Provider store={store}>
        <h1> Success </h1>
    </Provider>
), document.getElementById('root'));
