import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useState} from "react";

const drawerTheme = createMuiTheme({
    overrides: {
        MuiListItemIcon: {
            root: {
                minWidth: 30,
                color: "#fafafa",
            },
        }
    }

});

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
        color: "#2a2a2a"
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
        fontFamily: 'Roboto Condensed'
    },
    mainLogo: {
        width: "8rem",
        margin: "0.5rem 2.5rem",
        display: "inline-block"
    }
}));

function Layout({children, window}) {
    // const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <img className={classes.mainLogo} src="assets/main_logo.jpg" alt="logo"/>
            </div>
            <Divider/>
            <List>
                {['Dashboard', 'My Details', 'My Shares', 'My Transaction History', 'My Portfolio',
                    'My Pledge Share Details', 'My Bank Request', 'My ASBA', 'My Purchase Source', 'My EDIS']
                    .map((text, index) => (
                        <ListItem button key={text}>
                            <ThemeProvider theme={drawerTheme}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            </ThemeProvider>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div style={{flexGrow:1}}/>
                    <IconButton
                        color="inherit"
                        aria-label="log out"
                        edge="end"
                        // onClick={handleDrawerToggle}
                        className={classes.logoutButton}
                    >
                        <ExitToAppIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="main menu">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
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
                <Hidden smDown Down implementation="css">
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
            <ThemeProvider theme={drawerTheme}>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {children}
                </main>
            </ThemeProvider>
        </div>
    );
}

export default Layout;
