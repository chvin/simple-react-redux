import React,{Component} from 'react';

class Li extends Component{
    toggle(){
        this.props.toggle(this.props.time);
    }
    delete(e){
        this.props.delete(this.props.time);
        e.stopPropagation();
    }
    render(){
        return (
            <li className={this.props.complete?'done':''} onClick={this.toggle.bind(this)}>
                <span className="status">({this.props.complete?'已':'未'}完成)</span>
                <input type="checkbox" checked={this.props.complete?'checked':''} readOnly />
                <p>
                    {this.props.label}
                </p>
                <span className="delete" onClick={this.delete.bind(this)}>X</span>
            </li>
        )
    }
}

export default Li;