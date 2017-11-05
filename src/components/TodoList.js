import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';


export default class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }

    addTask(task){
        let newTasks = this.state.tasks;
        newTasks.push(task);
        this.setState({tasks: newTasks});
        console.log(this.state.tasks);
    }

    render(){
        return <div>
            <AddTask addTask={this.addTask.bind(this)} />
            <Task />
            <Task />
        </div>;
    }
}