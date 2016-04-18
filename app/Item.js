import React,{Component} from 'react';

class Li extends Component{
    render(){
        return (
            <li className={this.props.complete?'done':''}>
                <input type="checkbox" checked={this.props.complete?'checked':''} />
                {this.props.label}
            </li>
        )
    }
}

export default Li;