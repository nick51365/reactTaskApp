import React, { Component } from "react";

class Overview extends Component {

    render(){
        return(
            <div>
                <h1>Tasks</h1>
                <ul style={{ listStyleType: "none" }}>
                    {this.props.tasks.map(task => {
                        return <li key={task.id}>{task.number}{". "}{task.text}</li>;
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview;