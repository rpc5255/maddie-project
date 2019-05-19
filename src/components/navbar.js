import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Madison Elliott
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Live Shots</Button>
          <Button color="inherit">Packages</Button>
          <Button color="inherit">Anchoring/Producing</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ButtonAppBar);

