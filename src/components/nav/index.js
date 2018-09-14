import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';

// icons
import {
  Home,
  Receipt,
  ImportExport,
  AccountCircle,
  StarRate,
  CalendarToday
} from '@material-ui/icons';

import NavItem from './navItem';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    background: '#F9A726',
    borderRight: 0,
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});


const links = [
  {
    to: '/',
    icon: <Home />,
    title: 'Home',
    exact: true,
  },
  {
    to: '/news',
    icon: <Receipt />,
    title: 'News',
  },
  {
    to: '/perks',
    icon: <StarRate />,
    title: 'Perks',
  },
  {
    to: '/events',
    icon: <CalendarToday />,
    title: 'Events',
  },
  {
    to: '/polls',
    icon: <ImportExport />,
    title: 'Polls',
  },
  {
    to: '/building',
    icon: <ImportExport />,
    title: 'Building',
  },
  {
    to: '/report',
    icon: <ImportExport />,
    title: 'Report',
  },
  {
    to: '/logout',
    icon: <ImportExport />,
    title: 'Logout',
  },
];

export const Nav = ({ classes, open, handleNavClose }) => {
  console.log('open', open);
  return (
    <Drawer
      variant="persistent"
      open={open}
      classes={{
        paper: classNames(classes.drawerPaper),
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleNavClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      {/* <div className={classes.toolbar} /> */}
      <List>
        {
          links.map((item, idx) => (
            <NavItem key={idx} {...item} /> // eslint-disable-line
          ))
        }
      </List>
    </Drawer>
  )
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
