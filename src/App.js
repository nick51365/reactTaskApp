import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component{
  constructor(){
    super();

    this.state = {
      task: { 
        text: "",
        id: uniqid(),
        number: 0,
      },
      tasks: [],
      taskCount: 0,
    };
  };

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        number: this.state.taskCount + 1
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    const{task, tasks, taskCount} = this.state;
    this.setState({
      tasks: tasks.concat(task),
      task: {
        text: "",
        id: uniqid()
      },
      taskCount: taskCount + 1,
    });
  };

  deleteTask = (id) => {
    const{tasks, taskCount} = this.state;
    this.setState({
      tasks: tasks.filter(task => task.id !== id),
      taskCount: taskCount - 1
    })
    console.log(this.state)
  }

  render(){
    const {task, tasks} = this.state;

    return (
      <div>
            <form className="inputForm" onSubmit = {this.onSubmitTask}>
              <input 
              onChange = {this.handleChange} 
              value={task.text}
              className = "inputField" 
              type="text"  
              id="taskInput"
              />

              <input type="submit"></input>
            </form>
            <Overview tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
