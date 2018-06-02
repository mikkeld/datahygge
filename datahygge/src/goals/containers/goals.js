import React, { Component } from 'react';
import CreateGoal from "../components/create-goal";
import ListGoals from "../components/list-goals";

class Goals extends Component {
    render() {
        return (
            <div className="goals">
                <CreateGoal/>
                <ListGoals/>
            </div>
        );
    }
}

export default Goals;
