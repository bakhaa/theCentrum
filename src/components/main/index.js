import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// pages
import {
  HomePage,
  NewsPage,
  PerksPage,
} from '../../pages';

import Bar from '../bar';
import Nav from '../nav';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    margin: 0,
    padding: 0,
    backgrround: '#F8F8F8',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    marginLeft: 60,
    paddingTop: 80,
    minHeight: 'calc(100vh - 104px)',
    overflow: 'hidden',
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    }
  }

  handleNavOpen() { this.setState({ navOpen: true }) }

  handleNavClose() { this.setState({ navOpen: false }) }

  render() {
    const { navOpen } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Bar open={navOpen} handleNavOpen={this.handleNavOpen.bind(this)} />
        <Nav open={navOpen} handleNavClose={this.handleNavClose.bind(this)}/>

        <main className={classNames(classes.content, classes['content-left'], {
          [classes.contentShift]: navOpen,
          [classes['contentShift-left']]: navOpen,
        })}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news" component={NewsPage} />
            <Route path="/perks" component={PerksPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
