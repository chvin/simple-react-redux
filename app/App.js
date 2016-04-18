import React,{Component} from 'react';
import Li from './item.js';

class App extends Component{
    constructor(){
        super();
        let app  = localStorage.getItem('todos');
        try{
            app = JSON.parse(app)
        }catch(e){
            app = {};
        }
        app = Object.assign({},{
                visible:'show all',
                newTaskName:'',
                todos:[
                    {
                        complete:true,
                        label:'hehe'
                    },
                    {
                        complete:false,
                        label:'xixi'
                    }
                ]
            },
            app
        );
        this.state = app;
    }

    inputTaskName(e){
        this.setState({
           newTaskName:e.target.value
        });
    }

    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state));
    }

    componentDidMount(){
        localStorage.setItem('todos',JSON.stringify(this.state));
    }

    render(){
        return (
            <div id="app">
                <h1>TODOS</h1>
                <input type="text" value={this.state.newTaskName} onChange={e=>this.inputTaskName(e)} />
                <ul>
                    {
                        this.state.todos.map(function(item,key){
                            return <Li complete={item.complete} key={key} label={item.label} />
                        })
                    }
                </ul>
                <hr/>
                <p>
                    <a href="javascript:;" className="active">show all</a>
                    <a href="javascript:;">show done</a>
                    <a href="javascript:;">show undone</a>
                </p>
            </div>
        )
    }
}

export default App;
// class Greeter extends Component{
//     render(){
//         return(
//             <div className={styles.root}>
//                 {config.greetText}
//             </div>
//         )
//     }
// }

//
// React.render(<div>
//
// </div>,document.getElementById('root'));