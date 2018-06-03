import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    tile: {
        maxWidth: 200,
    },
    chip: {
        marginRight: theme.spacing.unit,
    },
});

const ImageGrid = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {props.data.map(data => (
                    <GridListTile key={data.timestamp} className={classes.tile}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/uploads%2Flanding.png?alt=media&token=0bd882e9-de55-4bb8-b579-263d81473625' alt={data.label} />
                        <GridListTileBar
                            title={data.label}
                            subtitle={
                                <div>
                                    <Chip label={data.clicks} className={classes.chip} />
                                    <Chip label={data.impressions} className={classes.chip} />
                                </div>
                            }
                        />

                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default withStyles(styles)(ImageGrid);