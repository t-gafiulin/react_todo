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
    }

    deleteTask(index){
        let newTasks = this.state.tasks;
        newTasks.splice(index, 1);
        this.setState({tasks: newTasks});
    }

    render(){
        const tasks = this.state.tasks.map((elem, index) => {
            return <Task 
                deleteTask={this.deleteTask.bind(this)} 
                task={elem} index={index} 
                addClass={index % 2 == 1 ? 'odd' : 'even'}    
            />;
        });

        return <div className='todo'>
            <AddTask addTask={this.addTask.bind(this)} />
            <ul>
                {tasks}
            </ul>
        </div>;
    }
}