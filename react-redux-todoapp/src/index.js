import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import rootReducer from './rootReducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
