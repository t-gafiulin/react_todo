import React, { Component } from 'react';
import AddTask from './AddTask';
import Task from './Task';


export default class TodoList extends Component{


    render(){
        return <div>
            <AddTask />
            <Task />
            <Task />
        </div>;
    }
}