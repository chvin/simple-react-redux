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
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    complete:false,
                    label:name,
                    time:Date.now()
                }
            ],
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
            visible:e.target.getAttribute('data-type')
        });
    }

    delete(id){
        let index  = this.state.todos.findIndex(function(item){
            return id === item.time;
        });

        let todos = this.state.todos.slice();

        todos.splice(index,1);

        this.setState({
            todos:todos
        });
    }

    toggle(id){
        let index  = this.state.todos.findIndex(function(item){
            return id === item.time;
        });

        let todos = this.state.todos.slice();

        let item = Object.assign({},todos[index]);

        item.complete = !item.complete;

        todos[index] = item;

        this.setState({
             todos:todos
        });

    }

    render(){
        return (
            <div id="app">
                <h1>任务列表</h1>
                <input type="text" value={this.state.newTaskName} onKeyDown={this.addTask.bind(this)} onChange={this.inputTaskName.bind(this)} />
                <p>
                    <a href="javascript:;" className={this.state.visible === 'show all'?'active':''} onClick={e=>this.switch_visible(e)} data-type="show all">全部任务</a>
                    <a href="javascript:;" className={this.state.visible === 'show done'?'active':''} onClick={e=>this.switch_visible(e)} data-type="show done">已完成</a>
                    <a href="javascript:;" className={this.state.visible === 'show undone'?'active':''} onClick={e=>this.switch_visible(e)} data-type="show undone">未完成</a>
                </p>
                <hr/>
                <ul>
                    {
                        this.state.todos.map((item)=>{
                            let li = <Li toggle={this.toggle.bind(this)} delete={this.delete.bind(this)} key={item.time} {...item} />;
                            if(this.state.visible === 'show all'){
                                return li;
                            }

                            if(this.state.visible === 'show done' && item.complete) {
                                return li;
                            }

                            if(this.state.visible === 'show undone' && !item.complete) {
                                return li;
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;