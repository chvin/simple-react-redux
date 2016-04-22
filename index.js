import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import App from './components/App';
import './style/main.css';
import {Provider} from 'react-redux';
import store from './store/index';


store.subscribe(()=>{
    localStorage.setItem('todos',JSON.stringify(store.getState()));
});

render(
    <Provider store={store} >
        <App />
    </Provider>
,document.getElementById('root'));