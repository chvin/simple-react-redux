import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';

let List = ({todos,visible}) =>{


    let isEmpty = todos.length === 0;

    isEmpty = isEmpty?<p>还没有任务,赶快输入任务,敲回车添加一个!</p>:isEmpty;
    
    return <ul>
        {
            todos.map((item)=>{
                let li = <Item key={item.time} item={item} />;
                switch(visible){
                    case '全部任务':
                        return li;
                    case '已完成':
                        return item.complete?li:null;
                    case '未完成':
                        return item.complete?null:li;
                }
            })
        }
        {
            isEmpty
        }
    </ul>;
}

const mapStateToProps = (state) => {
    return {
        todos:state.todos,
        visible:state.visible
    }
}

List = connect(mapStateToProps)(List);

export default List;