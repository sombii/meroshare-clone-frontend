import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Paper} from "@material-ui/core";
import PageHeader from "../shared/PageHeader";
import Profile from "./Profile";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
    // tabs: {
    //     overflowX: "auto",
    // },
    paper: {
        backgroundColor: "#efefef",
    },
    indicator: {
        backgroundColor: "transparent"
    },
    tabRoot: {
        borderTop: "2px solid transparent",
        backgroundColor: "#e5e3e9",
        textTransform: "none",
        fontSize: "0.9rem",
        fontFamily: "Dosis",
        marginRight: "0.25rem",
        opacity: 1,
    },
    selectedTab: {
        borderTop: "2px solid red",
        backgroundColor: "#fff",
    },
    tabPanel: {
        backgroundColor: "#fff",
    }
}));

const OwnProfile = () => {
    const [value, setValue] = React.useState(0);

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <PageHeader title="My Profile" subtitle="View my profile details"/>
            <Paper square elevation={0} className={classes.paper}>
                <Tabs value={value} onChange={handleChange} aria-label="own profile tabs"
                      classes={{indicator: classes.indicator,}} variant={"scrollable"}
                      scrollButtons={"auto"}
                >
                    <Tab label="My Profile" classes={{root: classes.tabRoot, selected: classes.selectedTab}}
                         disableRipple/>
                    <Tab label="Change Password" classes={{root: classes.tabRoot, selected: classes.selectedTab}}
                         disableRipple/>
                    <Tab label="Change Tx Pin" classes={{root: classes.tabRoot, selected: classes.selectedTab}}
                         disableRipple/>
                    <Tab label="Activity Log" classes={{root: classes.tabRoot, selected: classes.selectedTab}}
                         disableRipple/>
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                    <Profile/>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3} className={classes.tabPanel}>
                    Item 4
                </TabPanel>
            </Paper>

        </>
    );
}

export default OwnProfile;