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
        return <div>
            <input value={this.state.value} onChange={this.handleChange.bind(this)} />
            <button onClick={this.handleClick.bind(this)}>Add task</button>
        </div>;
    }
}