import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List } from '@material-ui/core';


// icons
import {
  Home,
  Receipt,
  ImportExport,
  StarRate,
  CalendarToday
} from '@material-ui/icons';

import NavItem from './navItem';

import { drawerWidth } from '../../utils/constants';

// TODO: change with styled-components
const styles = theme => ({
  drawerPaper: {
    background: '#F9A726',
    borderRight: 0,
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
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

export const Nav = ({ classes, open }) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      classes={{
        paper: classNames(classes.drawerPaper),
      }}
    >
      <div className={classes.drawerHeader}>
        <img src='img/logo-nav.png' alt='THE CENTRUM' />
      </div>
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
