import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        float: 'right'
    },
});

const FilterDropdown = props => {
    const { classes } = props;
    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="filter-helper">Sort by</InputLabel>
            <Select
                // value={this.state.age}
                // onChange={this.handleChange}
                input={<Input name="Sort" id="sort-helper" />}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Values</MenuItem>
                <MenuItem value={20}>Clicks</MenuItem>
                <MenuItem value={30}>Impressions</MenuItem>
            </Select>
            <FormHelperText>Sort cards</FormHelperText>
        </FormControl>
    )
};

export default withStyles(styles)(FilterDropdown);


