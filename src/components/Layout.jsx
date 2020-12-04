import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WebIcon from "@material-ui/icons/Web";
import StorageIcon from "@material-ui/icons/Storage";
import SearchIcon from "@material-ui/icons/Search";
import StoreIcon from "@material-ui/icons/Store";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const drawerWidth = 80;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: grey[50],
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  mainToolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: grey[200],
  },
  icon: {
    color: grey[400],
    fontSize: "2.5em",
  },
}));

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ backgroundColor: grey[50] }} />
      <List style={{ backgroundColor: grey[900] }}>
        <Link component={RouterLink} to="/notification">
          <ListItem button>
            <ListItemIcon>
              <NotificationsIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/market">
          <ListItem button>
            <ListItemIcon>
              <WebIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/data">
          <ListItem button>
            <ListItemIcon>
              <StorageIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/map">
          <ListItem button>
            <ListItemIcon>
              <SearchIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/mall">
          <ListItem button>
            <ListItemIcon>
              <StoreIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
      <List style={{ backgroundColor: grey[900] }}>
        <Link component={RouterLink} to="/user">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link component={RouterLink} to="/login">
          <ListItem button>
            <ListItemIcon>
              <PowerSettingsNewIcon className={classes.icon} />
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to="/" underline="none">
            <Typography variant="h5" color="primary" noWrap>
              Follow The Market
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.mainToolbar} />
        {children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
