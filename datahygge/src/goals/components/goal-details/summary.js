import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chart } from 'react-google-charts';
import Typography from '@material-ui/core/Typography';

const options = {
    legend: {position: 'none'},
    vAxis: {
        gridlines: {
            color: 'transparent'
        }
    },
    hAxis: {
        gridlines: {
            color: 'transparent'
        }
    },
};

const styles = theme => ({
    root: {
        display: 'flex',
        padding: theme.spacing.unit*2,
    },
});

const GoalSummary = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div>
                <Typography variant="subtitle" gutterBottom>
                    Goal completions
                </Typography>
                <Chart
                    chartType="LineChart"
                    data={[["Age", "Weight"], [8, 12], [4, 5.5]]}
                    options={options}
                    graph_id="graph1"
                    width="500px"
                    height="300px"
                />
                <Typography variant="caption" gutterBottom>
                    Shows average time to goal completion.
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle" gutterBottom>
                    Average time to goal completion
                </Typography>
                <Chart
                    chartType="ColumnChart"
                    data={[["Age", "Weight"], [8, 12], [4, 5.5]]}
                    options={options}
                    graph_id="graph2"
                    width="500px"
                    height="300px"
                />
                <Typography variant="caption" gutterBottom>
                    Shows average time to goal completion.
                </Typography>
            </div>
        </div>
    )
};

export default withStyles(styles)(GoalSummary);
