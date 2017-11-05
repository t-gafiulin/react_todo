import React, { Component } from 'react';



export default class Task extends Component{


    render(){
        return <div>
            {this.props.task}
            <button onClick={this.props.deleteTask.bind(null, this.props.index)}>Delete task</button>
        </div>;
    }
}