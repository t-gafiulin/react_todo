import React, { Component } from 'react';



export default class Task extends Component{
    render(){
        return <div>
            {this.props.task}
            <i class="fa fa-trash" aria-hidden="true" onClick={this.props.deleteTask.bind(null, this.props.index)}></i>
        </div>;
    }
}