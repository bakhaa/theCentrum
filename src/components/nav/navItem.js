import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';

// TODO: change with styled-components
const styles = () => ({
  navButton: {
    color: '#FFFFFF',
    marginTop: 5,
    borderRadius: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 50,
  },
  navActive: {
    backgroundColor: 'rgb(239, 147, 2)',
  },
  title: {
    marginLeft: 20,
    color: '#FFFFFF',
  }
});

export const NavItem = ({ classes, title, to, icon, exact }) => (
  <IconButton
    exact={exact}
    aria-label={title}
    component={NavLink}
    activeClassName={classes.navActive}
    to={to}
    className={classes.navButton}
  >
    {icon}
    <Typography className={classes.title}>{title}</Typography>
  </IconButton>
);

NavItem.defaultProps = {
  exact: false,
};

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  exact: PropTypes.bool,
};

export default withStyles(styles)(NavItem);

