import React, { Component } from "react";

class Overview extends Component {

    render(){
        return(
            <div>
                <h1>Tasks</h1>
                <ul id="taskList" style={{ listStyleType: "none" }}>
                    {this.props.tasks.map(task => {
                        return (
                        <div key={task.id}>
                            <li >{task.number}{"."}{task.text}</li>
                            <button onClick={() => this.props.deleteTask(task.id)}>
                                Delete Task
                            </button>
                        </div>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview;