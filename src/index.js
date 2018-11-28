import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './firebase';
import './index.css';
import App from './App';

const initialState = window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));