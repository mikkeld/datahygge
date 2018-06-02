import React from 'react';
import GoalCard from '../components/goal-card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const ACTIVE_GOALS = [
    {
        id: 1,
        name: "PDF downloads",
        description: "Number of PDF downloads for the company folder",
        data: [1,2,3,4,5]
    },
    {
        id: 2,
        name: "Purchase order",
        description: "Number of purchased orders",
        data: [1,2,3,4,5]
    },
];

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    cardContainer: {
        display: 'flex',
    }
});

const ListGoals = props => {
    const { classes } = props;
    return (
        <div>
            <div>
                <Typography variant="subheading">Active goals</Typography>
            </div>
            <div className={classes.cardContainer}>

                {
                    ACTIVE_GOALS.map(goal => <GoalCard key={goal.id} {...goal}/>)
                }
            </div>
        </div>
    )
};

export default withStyles(styles)(ListGoals);
