/**
 * Created by Chvin on 16/4/16.
 */
import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}
window.onclick = function(){console.log('bind3');}
export default Greeter;