import React,{Component} from 'react';
import {connect} from 'react-redux';
import action from '../actions';

let Item = ({item,dispatch})=>{

    function toggle(){
        dispatch(action.toggleTodo(item.time));
    }

    function deletes(e){
        e.stopPropagation();
        dispatch(action.deleteTodo(item.time));
    }

    return (<li className={item.complete?'done':''} onClick={toggle}>
        <span className="status">({item.complete?'已':'未'}完成)</span>
        <input type="checkbox" checked={item.complete?'checked':''} readOnly />
        <p>
            {item.label}
        </p>
        <span className="delete" onClick={deletes}>X</span>
    </li>);
}


Item = connect()(Item);

export default Item;