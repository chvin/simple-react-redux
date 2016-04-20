import React from 'react';
import {connect} from 'react-redux';
import action from '../actions';

let Control = ({visible,dispatch})=> {

    function swith_visible(e) {
        dispatch(
            action.setVisible(e.target.innerHTML)
        );
    }

    return <p>
        {
            ['全部任务', '已完成', '未完成'].map((label, key)=> {
                return <a href="javascript:;" onClick={swith_visible} className={visible === label?'active':''}
                          key={key}>{label}</a>;
            })
        }
    </p>
}

const mapStateToProps = (state) => {
    return {visible:state.visible};
}


Control = connect(mapStateToProps)(Control);

export default Control;