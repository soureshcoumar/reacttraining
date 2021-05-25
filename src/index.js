import React from 'react';
import reactDom from 'react-dom';
import Main from './Components/Main';
import './style/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

reactDom.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'))