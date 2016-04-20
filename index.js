import React from 'react';
import {render} from 'react-dom';
import todoApp from './reducers';
import {createStore} from 'redux';
import App from './components/App';
import './style/main.css';
import {Provider} from 'react-redux';

let todos  = localStorage.getItem('todos');
try{
    todos = JSON.parse(todos)
}catch(e){
    todos = {};
}finally {
    todos = todos || {};
}
let store = createStore(todoApp,todos);

store.subscribe(()=>{
    localStorage.setItem('todos',JSON.stringify(store.getState()));
})

render(
    <Provider store={store} >
        <App />
    </Provider>
,document.getElementById('root'));