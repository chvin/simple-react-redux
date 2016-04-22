import React from 'react';
import action from '../actions';
import {connect} from 'react-redux';
let input;
let Input = ({newTaskName,dispatch}) => {

    let addTodos = (e) =>{
        let name = input.value.trim();
        if(name.length === 0 || e.keyCode !== 13){
            return;
        }
        dispatch(action.addTodo({
            label:name,
            time:Date.now()
        }));
        dispatch(action.setNewTaskName(''));
    }

    return <input ref={node=>input=node}  autofocus value={newTaskName}  type="text"  onKeyDown={addTodos}  onChange={()=>dispatch(action.setNewTaskName(input.value))} />
}

const mapStateToProps = (state)=>{
    if(state.todos.length === 0){
        input && input.focus();
    }
    return {newTaskName:state.newTaskName}
}


Input = connect(mapStateToProps)(Input);

export default Input;