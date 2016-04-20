const newTaskName = (state='',action)=>{
    switch(action.type){
        case 'SET_NEW_TASK_NAME':
            return action.name;
        default:
            return state
    }
}

export default newTaskName;