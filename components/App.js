import React from 'react';
import Input from '../components/Input';
import Control from '../components/Control';
import List from '../components/List';

let App = () => {
    return <div id="app">
        <h1>任务列表</h1>
        <Input />
        <Control />
        <hr/>
        <List />
    </div>
}


export default App;
