import React, { Component } from 'react';



export default class Task extends Component{


    render(){
        return <div onClick={this.props.deleteTask.bind(null, this.props.index)}>{this.props.task}</div>;
    }
}