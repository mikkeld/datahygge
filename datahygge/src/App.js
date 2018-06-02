import React, { Component } from 'react';
import './App.css';
import Goals from "./goals/containers/goals";
import GoalDetails from "./goals/containers/goal-details/goal-details";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import ResponsiveDrawer from "./shared/components/responsive-drawer";

class App extends Component {
  render() {
    return (
        <Router>
            <ResponsiveDrawer>
                <div>
                    <Route exact path="/" component={Goals}/>
                    <Route path="/goals/:id" render={({match}) => <GoalDetails id={match.params.id}/>}/>
                </div>
            </ResponsiveDrawer>
        </Router>
    );
  }
}

export default App;
