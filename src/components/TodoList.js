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
        const tasks = this.state.tasks.map((elem, index) => {
            return <Task task={elem} key={index} />;
        });

        return <div>
            <AddTask addTask={this.addTask.bind(this)} />
            <ul>
                {tasks}
            </ul>
        </div>;
    }
}