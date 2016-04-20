const setVisible = (state = '全部任务',action)=>{
    switch(action.type){
        case 'SET_VISIBLE':
            return action.filter;
        default:
            return state;
    }
}

export default setVisible;