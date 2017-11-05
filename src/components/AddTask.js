import React, { Component } from 'react';



export default class AddTask extends Component{

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleClick(){
        //this.props.addTask.bind(null, this.state.value);
        this.props.addTask(this.state.value);
        this.setState({value: ''});
    }

    render(){
        return <div className='add-task'>
            <input className='add-task_input' value={this.state.value} onChange={this.handleChange.bind(this)} />  
            <i className="fa fa-plus" aria-hidden="true" onClick={this.handleClick.bind(this)}></i>
        </div>;
    }
}