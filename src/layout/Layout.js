import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Tooltip from "@material-ui/core/Tooltip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useState} from "react";
import {NavLink as RouterLink, useHistory} from "react-router-dom";
import menuItems from "../constants/menuItems";
import routes from "../constants/routes";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: "#efefef",
        color: "#57606b"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logoutButton: {
        marginLeft: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#333a56",
        color: "#fafafa",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        fontFamily: 'Roboto Condensed',
        backgroundColor: "#efefef",
        minHeight: "100vh",
        color: "#57606b",
        overflow: "hidden",
    },
    mainLogo: {
        width: "7rem",
        margin: "0 auto",
        display: "block",
        padding: "0.7rem 0"
    },
    menuItem: {
        padding: "0.2rem 1rem",
        borderLeft: "4px solid transparent",
        '&:hover': {
            borderColor: "red",
            backgroundColor: "transparent",
            color: "#aaa"
        }
    },
    activeMenuItem: {
        backgroundColor: "#1e2233  !important",
        borderLeft: "4px solid red",
    },
    listItemText: {
        fontSize: "0.8rem",
    },
    listItemIcon: {
        minWidth: 35,
        color: "#fafafa",
    }
}));

function Layout({children, window}) {
    // const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const history = useHistory();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerToggle2 = () => {
        //lol just being lazy
        setMobileOpen(false);
    };

    const logoutHandler = () => {
        history.push(routes.login);
    }

    const drawer = (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
            overflow: "hidden",
        }}>
            <div style={{
                background: "url(assets/watermark.png)  -49px 118%/370px no-repeat",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "15rem",
                marginBottom: "-5rem",
            }}>

            </div>
            <div>
                <div className={classes.toolbar}>
                    <img className={classes.mainLogo} src="assets/main_logo.jpg" alt="logo"/>
                </div>
                <Divider/>
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.title}
                                  component={RouterLink}
                                  to={item.route}
                                  className={classes.menuItem}
                                  activeClassName={classes.activeMenuItem}
                                  dense
                                  onClick={handleDrawerToggle2}
                        >
                            <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
                            <ListItemText classes={{primary: classes.listItemText}} primary={item.title}/>
                        </ListItem>
                    ))}
                </List>
            </div>
            <div>
                <Divider/>
                <Box m={3}
                     style={{fontFamily: "Roboto Condensed", fontSize: "0.75rem", position: "relative", "z-index": 1}}>
                    <span> © {new Date().getFullYear()} CDS and Clearing Limited.</span>
                    <br/>
                    <span>None Rights Reserved.<a href="//github.com/sombii" target="_blank">sombii</a></span>
                </Box>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar} elevation={1}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{flexGrow: 1}}/>
                    <Tooltip title={"My Profile"} arrow>
                        <IconButton
                            color="inherit"
                            aria-label="log out"
                            edge="end"
                            onClick={() => history.push(routes.ownProfile)}
                            className={classes.logoutButton}
                        >
                            <AccountCircleIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Logout"} arrow>
                        <IconButton
                            color="inherit"
                            aria-label="log out"
                            edge="end"
                            onClick={logoutHandler}
                            className={classes.logoutButton}
                        >
                            <ExitToAppIcon/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="main menu">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp>
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
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
                <Hidden smDown>
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
                <Container maxWidth="xl">
                    <div className={classes.toolbar}/>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default Layout;
