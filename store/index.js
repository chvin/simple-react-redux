import {createStore} from 'redux';
import todoApp from '../reducers';

let cacheTodos  = localStorage.getItem('todos');
try{
    cacheTodos = JSON.parse(cacheTodos)
}catch(e){
    cacheTodos = {};
}finally {
    cacheTodos = cacheTodos || {};
}


let store = createStore(
    todoApp
    ,cacheTodos
    ,window.devToolsExtension ? window.devToolsExtension() : undefined//Chrome Extension
);

export default store;