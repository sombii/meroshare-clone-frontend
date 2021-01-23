import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

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
                <Box my={3}>
                    <div>{children}</div>
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

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: "1px solid #bdbebf",
    },
    indicator: {
        backgroundColor: "transparent",
    },
    overflow: {
        overflowX: "auto",
        "& button": {
            minWidth: 0,
        }
    },
    tabRoot: {
        borderBottom: "2px solid transparent",
        fontWeight: "bold",
        textTransform: "none",
        padding: 0,
        marginRight: "2rem",
        fontSize: "1rem",
        "&:hover": {
            borderBottom: "2px solid #333a56",
            opacity: 1,
        }
    },
    selectedTab: {
        borderBottom: "2px solid #333a56",
        color: "#333a56"
    },
}));

const Tabber = ({tabs, tabContent}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0} classes={{root: classes.root}}>
                <Tabs value={value} onChange={handleChange} aria-label="edis route tabs"
                      classes={{indicator: classes.indicator, flexContainer: classes.overflow}}
                >
                    {tabs.map(item => (
                        <Tab label={item} key={item} classes={{root: classes.tabRoot, selected: classes.selectedTab}}/>
                    ))}
                </Tabs>
            </AppBar>
            {tabContent.map((item, i) => (
                <TabPanel value={value} index={i}>
                    {/*<Paper square elevation={0}>*/}
                    {item}
                    {/*</Paper>*/}
                </TabPanel>
            ))}
        </div>
    );
}


export default Tabber;