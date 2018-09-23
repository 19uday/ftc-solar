import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%'
  },
};

const NavBar = (props) => {
  const { classes, children } = props;
  return (
    <div className={classNames(classes.root, "container-column", "flex-item")}>
        <AppBar className={classes.AppBar} className="logo-bg" position="static" color="secondary">
            <Toolbar >
              <img src={require('./ftc.jpeg')} />
            </Toolbar>
        </AppBar>
        <main className={classNames("container-column", "flex-item")}>
            {children}
        </main>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);