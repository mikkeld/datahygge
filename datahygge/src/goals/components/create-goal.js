import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        overflowX: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

const CreateGoal = props => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Typography variant="headline" gutterBottom>
                Create Goal
            </Typography>
            <TextField
                id="goal"
                label="Description"
                className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
            />
            <Button color="primary" className={classes.button}>
                Create goal
            </Button>
        </Paper>
    )
};

export default withStyles(styles)(CreateGoal);
