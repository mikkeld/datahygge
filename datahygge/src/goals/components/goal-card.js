import React from 'react';
import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        width: 300,
        height: 300,
        marginRight: theme.spacing.unit*2,
        cursor: 'pointer'
    },
});

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

const GoalCard = props => {
    const { classes } = props;
    return (
        <Link to={{ pathname: `/goals/${props.id}` }}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.name}
                    </Typography>
                    <Chart
                        chartType="LineChart"
                        data={[["Age", "Weight"], [8, 12], [4, 5.5]]}
                        options={options}
                        graph_id={props.name}
                        width="%"
                        height="100px"
                    />
                    <Typography className={classes.pos} color="textSecondary">
                        Category (tbd)
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={{ pathname: `/goals/${props.id}` }}><Button size="small">Expand</Button></Link>
                </CardActions>
            </Card>
        </Link>
    )
};

export default withStyles(styles)(GoalCard);
