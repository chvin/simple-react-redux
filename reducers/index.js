import {combineReducers} from 'redux';
import visible from './setVisible';
import todos from './todos';
import newTaskName from './newTaskName';

const todoApp = combineReducers({
    todos,
    visible,
    newTaskName
});

export default todoApp;