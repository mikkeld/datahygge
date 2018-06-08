import React, { Component } from 'react';
import Hero from "../components/hero/hero";
import ShowcaseFeatures from "./showcase-features/showcase-features";
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";
import Section from "../components/section/section";

const styles = theme => ({
    img: {
        maxWidth: 1000
    }
});

class Landing extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Hero/>
                <ShowcaseFeatures/>
                <Section/>
            </div>

        );
    }
}

export default withStyles(styles)(Landing);