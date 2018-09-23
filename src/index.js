import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import simpleReducer from './reducers/simpleReducer';


const store = createStore(simpleReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById('root'));
registerServiceWorker();