export const addTodo = ({label,time}) => {
    return {
        type:'ADD_TODO',
        time,
        label
    }
}

export const toggleTodo = (time) => {
    return {
        type:'TOGGLE_TODO',
        time
    }
}

export const setVisible = (filter) => {
    return {
        type:'SET_VISIBLE',
        filter
    }
}

export const setNewTaskName = (name) => {
    return {
        type:'SET_NEW_TASK_NAME',
        name
    }
}

export const deleteTodo = (time) => {
    return {
        type:'DELETE_TODO',
        time
    }
}


export default {
    addTodo,toggleTodo,setVisible,setNewTaskName,deleteTodo
}
