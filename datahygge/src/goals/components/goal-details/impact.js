import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import {formatPercentage} from "../../../shared/utils/utils";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: theme.spacing.unit*4
    },
    positiveChip: {
        margin: theme.spacing.unit,
        backgroundColor: green[200]
    },
    negativeChip: {
        margin: theme.spacing.unit,
        backgroundColor: red[200]
    },

});

const Impact = props => {
    const { classes } = props;
    const positiveFactors = props.data['impact_data'].filter(data => data.impact >= 0);
    const negativeFactors = props.data['impact_data'].filter(data => data.impact < 0);
    const convertLabel = (label, impact) => `${label} (${formatPercentage(impact)})`;
    return (
        <div>
            <Typography variant="subtitle">Positive factors</Typography>
            <div className={classes.root}>
                {
                    positiveFactors.map(data => {
                        const label = convertLabel(data.label, data.impact);
                        return (
                            <Chip label={label} className={classes.positiveChip} />
                        )
                    })
                }
            </div>
            <Typography variant="subtitle">Negative factors</Typography>
            <div className={classes.root}>
                {
                    negativeFactors.map(data => {
                        const label = convertLabel(data.label, data.impact);
                        return (
                            <Chip label={label} className={classes.negativeChip} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default withStyles(styles)(Impact);
