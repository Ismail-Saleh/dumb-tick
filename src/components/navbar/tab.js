import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";

import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import {PhoneIcon} from '@material-ui/icons/Phone';
import { withStyles } from "@material-ui/core/styles/";

const styles = theme => ({
  indicator: {
    backgroundColor: "white"
  }
});

class Tab extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar style={styles.AppBar}>
        <Tabs classes={{ indicator: classes.indicator }} centered value={0}>
          <Tab disableRipple label="Fairness" />
          <Tab disableRipple label="Community" />
          <Tab label="Referrals" />
          <Tab label="How To Play" />
        </Tabs>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Tab);