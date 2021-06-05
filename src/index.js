import React from 'react';
import reactDom from 'react-dom';
import Main from './data/Components/Main';
import './style/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux';
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk';
import { database } from './database/config'

const enhancers = [applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];

const store = createStore(rootReducer, compose(...enhancers));

reactDom.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'))