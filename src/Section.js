import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import SiteInfo from './SiteInfo';
import SiteImage from './SiteImage';
import {zonetosite} from './actions/statuschange';
import {rowtozone} from './actions/statuschange';
import OpTable from './OpTable.js';

const drawerWidth = 240;
const vhh = Math.max(document.documentElement.clientHeight, window.innerHeight|| 0);

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
  
  },
  appBar: {
    position: 'absolute',
    
    backgroundColor: 'black',

  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'silver',
    
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  back = () => {
    if(this.props.currentStatus === 'zone'){
      this.props.dispatch(zonetosite());
    }
    if(this.props.currentStatus === 'row'){
      this.props.dispatch(rowtozone());
    }
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <SiteInfo />
      </div>
    );

    return (
      <div className="w3-row row">
        <div className="w3-container w3-twothird">
          <div className={classes.root} id="wrap">

            <main className={classes.content}>
              <div className={classes.toolbar} />
              <SiteImage />
            </main>
          </div>
        </div>

        <div className="w3-container w3-third center">
        <div className="imag imagg">
          <img className="image w3-border w3-border-black" src={ require('./sunn.png') } />
        </div>
        <div>
          <p><b><font color="red" size="5">STATUS:</font> <font color="blue" size="5">ALL WELL</font></b></p>
        </div>
          <div className="op">
            <OpTable />
          </div>
        </div>

      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  currentStatus: state.currentStatus
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(ResponsiveDrawer));