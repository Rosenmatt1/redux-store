import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root')
);


