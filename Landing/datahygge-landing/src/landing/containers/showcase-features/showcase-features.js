import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShowcaseSingleFeature from "../../components/showcase-features/showcase-single-feature";
import SearchIcon from '@material-ui/icons/Search';
import NavigationIcon from '@material-ui/icons/Navigation';
import EditIcon from '@material-ui/icons/Edit';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';


const FEATURE_LIST = {
    0: {
        id: 0,
        description: "Understand the impact of search on your website",
        type: "Search",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Fsearch%20mocks.png?alt=media&token=ec5562e4-7c82-4c14-969b-6ac5fb045eeb"
    },
    1: {
        id: 1,
        description: "Navigation",
        type: "Navigation",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Ffilter%20mocks.png?alt=media&token=cf574bf5-f453-4d57-b23c-4a4cd07340f5"
    },
    2: {
        id: 2,
        description: "Understand forms",
        type: "Forms",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Fform%20mocks.png?alt=media&token=649ffb9d-1459-40d8-9bc4-a730efaca125"
    },
    3: {
        id: 3,
        description: "CTA",
        type: "CTA",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Fform%20mocks.png?alt=media&token=649ffb9d-1459-40d8-9bc4-a730efaca125"
    },
    4: {
        id: 4,
        description: "Filters",
        type: "Filters",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Ffilter%20mocks.png?alt=media&token=cf574bf5-f453-4d57-b23c-4a4cd07340f5"
    },
    5: {
        id: 5,
        description: "Funnels",
        type: "Funnels",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Ffilter%20mocks.png?alt=media&token=cf574bf5-f453-4d57-b23c-4a4cd07340f5"
    },
    6: {
        id: 6,
        description: "Videos",
        type: "Understand videos",
        img: "https://firebasestorage.googleapis.com/v0/b/anasist-191616.appspot.com/o/images%2Fvideo%20mocks.png?alt=media&token=73faffc6-6535-4a82-8b42-54cf941d22dd"
    }
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    center: {
        margin: 'auto',
        maxWidth: '60%',
        padding: '10px'
    }
});

class ShowcaseFeatures extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.center}>
                    <h2>Out of the box insights for components</h2>
                    <p>
                        Instant insights for the components that matters. No setup required.
                        Click and select a component to see for yourself.
                    </p>
                </div>
                <Tabs value={this.state.value}
                      onChange={this.handleChange}
                      scrollable
                      scrollButtons="on"
                      centered
                >
                    <Tab label="Search" icon={<SearchIcon />} />
                    <Tab label="Navigation" icon={<NavigationIcon />} />
                    <Tab label="Forms" icon={<EditIcon />} />
                    <Tab label="CTAs" icon={<CallToActionIcon />} />
                    <Tab label="Filters" icon={<CheckBoxIcon />} />
                    <Tab label="Funnels" icon={<NetworkCheckIcon />} />
                    <Tab label="Video" icon={<VideoLabelIcon />} />
                </Tabs>
                {<ShowcaseSingleFeature {...FEATURE_LIST[this.state.value]}/>}
            </div>
        );
    }
}

ShowcaseFeatures.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowcaseFeatures);