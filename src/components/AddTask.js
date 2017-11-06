import React, { Component } from 'react';



export default class AddTask extends Component{

    constructor(){
        super();
        this.state = {
            value: ''
        }
    }

    handleChange(e){
        if(e.key === 'Enter'){
            if(this.state.value !== ''){
                this.props.addTask(this.state.value);
                this.setState({value: ''});
            }
        }else{
            this.setState({value: this.state.value + e.key});
        }
    }

    render(){
        return <div className='add-task'>
            I need to
            <input 
                className='add-task__input' 
                value={this.state.value} 
                onKeyPress={this.handleChange.bind(this)} 
            />  
        </div>;
    }
}