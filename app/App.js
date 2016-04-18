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
                        label:'hehe',
                        time:1460993893211
                    },
                    {
                        complete:false,
                        label:'xixi',
                        time:1460974893211
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

    addTask(e){
        if(e.keyCode!==13){
            return;
        }
        var name = e.target.value.trim();
        if(name.length === 0){
            return;
        }
        var todos = this.state.todos.slice(0);
        todos.push({
            complete:false,
            label:name,
            time:Date.now()
        });
        this.setState({
            todos:todos,
            newTaskName:''
        });
    }

    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state));
    }

    componentDidMount(){
        localStorage.setItem('todos',JSON.stringify(this.state));
    }

    switch_visible(e){
        this.setState({
            visible:e.target.innerHTML
        });
    }

    toggle(e){
        console.log('toggle',e);
    }

    render(){
        var _this = this;

        return (

            <div id="app">
                <h1>TODOS</h1>
                <input type="text" value={this.state.newTaskName} onKeyDown={e=>this.addTask(e)} onChange={e=>this.inputTaskName(e)} />
                <ul>
                    {

                        this.state.todos.map(function(item){
                            if(_this.state.visible === 'show all'){
                                return <Li onClick={e=>this.toggle(e)} key={item.time} complete={item.complete} label={item.label} />
                            }

                            if(_this.state.visible === 'show done' && item.complete) {
                                return <Li onClick={e=>this.toggle(e)} key={item.time} complete={item.complete} label={item.label} />
                            }

                            if(_this.state.visible === 'show undone' && !item.complete) {
                                return <Li onClick={e=>this.toggle(e)} key={item.time} complete={item.complete} label={item.label} />
                            }
                        })
                    }
                </ul>
                <hr/>
                <p>
                    <a href="javascript:;" className={this.state.visible === 'show all'?'active':''} onClick={e=>this.switch_visible(e)}>show all</a>
                    <a href="javascript:;" className={this.state.visible === 'show done'?'active':''} onClick={e=>this.switch_visible(e)}>show done</a>
                    <a href="javascript:;" className={this.state.visible === 'show undone'?'active':''} onClick={e=>this.switch_visible(e)}>show undone</a>
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