import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {loadFeatures} from "../../shared/services/feature-service";
import FilterDropdown from "../components/filterDropdown";
import ImageGrid from "../components/image-grid";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit*2,
        flexGrow: 1,
    },
    header: {
        width: '100%'
    }
});

class Features extends Component {
    constructor() {
        super();
        this.state = {
            features: [],
        };
    }

    componentDidMount() {
        loadFeatures()
            .then(features => this.setState({features: features}))
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <div className={classes.header}>
                    <FilterDropdown />
                </div>
                <Typography variant="subheader" gutterBottom>
                    Features
                </Typography>
                <ImageGrid data={this.state.features} />
            </Paper>
        );
    }
}

export default withStyles(styles)(Features);
