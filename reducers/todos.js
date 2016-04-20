const todos = (state = [],action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    time:action.time,
                    label:action.label,
                    complete:false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((t)=>{
               if(t.time !== action.time){
                   return t;
               } else{
                   return Object.assign({},t,{
                       complete:!t.complete
                   });
               }
            });
        case 'DELETE_TODO':
            var index = state.findIndex(function(item){
                return item.time === action.time;
            });
            return [
                ...state.slice(0,index),
                ...state.slice(index+1,state.length)
            ]
        default:
            return state;
    }
}

export default todos;