import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {
  ImportExport,
} from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: '#FFFFFF',
    position: 'absolute',
    color: '#000000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, .1)',
    height: 80,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export const Bar = ({ classes, handleNavOpen, handleNavClose, open }) => (
  <AppBar
    className={classNames(classes.appBar, {
      [classes.appBarShift]: open,
      [classes['appBarShift-left']]: open,
    })}
  >
    <Toolbar disableGutters={false}>

      <div className={classes.header}>
        {!open ? (
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleNavOpen}
            disabled={open}
            className={classNames(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>)
          : (
            <IconButton onClick={handleNavClose}>
              <ChevronLeftIcon />
            </IconButton>
          )}

        <div className='logo'>
          <img src='img/logo.png' alt='THE CENTRUM' />
        </div>
        <div className='right'>
          <ImportExport />
          <ImportExport />
          <ImportExport />
        </div>
      </div>
    </Toolbar>
  </AppBar>
);

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
