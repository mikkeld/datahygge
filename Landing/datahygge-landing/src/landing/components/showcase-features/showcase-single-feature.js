import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        display: 'flex'
    },
    underline: {
        backgroundImage: 'linear-gradient(transparent 64px, #c7ffd3 0px)'
    }
});

const ShowcaseSingleFeature = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <img className={classes.img} src={props.img} />
            <div>
                <h2 className={classes.underline}>{props.type}</h2>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
};

export default withStyles(styles)(ShowcaseSingleFeature);


