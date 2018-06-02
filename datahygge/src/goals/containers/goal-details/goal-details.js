import React, { Component } from 'react';
import Impact from "../../components/goal-details/impact";
import {loadGoalFromId} from "../../../shared/services/goal-service";
import Journeys from "../../components/goal-details/journeys";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit*2,
        flexGrow: 1,
    },
});

class GoalDetails extends Component {
    constructor() {
        super();
        this.state = {
            goal: undefined,
            activeTab: 0
        };
    }

    componentDidMount() {
        loadGoalFromId(this.props.id)
            .then(goal => this.setState({goal: goal}))
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.activeTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Summary" />
                    <Tab label="Impact" />
                    <Tab label="Journeys" />
                </Tabs>
                {this.state.activeTab === 0 && <p>Summary</p>}
                {this.state.activeTab === 1 && this.state.goal && <Impact data={this.state.goal}/>}
                {this.state.activeTab === 2 && this.state.goal && <Journeys data={this.state.goal}/>}
            </Paper>
        );
    }
}

export default withStyles(styles)(GoalDetails);
