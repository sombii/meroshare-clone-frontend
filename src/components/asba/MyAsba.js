import Tabber from "../shared/Tabber";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Pagination} from "@material-ui/lab";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import {Chip, Tooltip} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    gridRoot: {
        // display: "inline",
        // padding: "0.5rem 0",
        "& *": {
            fontFamily: "Roboto Condensed",
        }
    },
    itemPaper: {
        padding: "0.8rem 1rem",
        cursor: "pointer",
    },
    item: {
        "& > *": {
            marginRight: "0.5rem",
        }
    },
    shareType: {
        backgroundColor: "#2c84d5",
        padding: "0.2rem 0.4rem",
        color: "#fff",
        fontSize: "0.8rem",
        borderRadius: "0.2rem",
    }
}));

const CurrentIssue = () => {

    const classes = useStyles();

    return (
        <Grid container classes={{root: classes.gridRoot}} spacing={3}>
            <Grid item xs={12}>
                <Paper square elevation={0} className={classes.itemPaper}>
                    <Grid container>
                        <Grid item classes={{item: classes.item}}>
                            <Tooltip title="Company Name" arrow placement="top">
                                <span>NEPAL INFRASTRUCTURE BANK LIMITED.</span>
                            </Tooltip>
                            <span>-</span>
                            <Tooltip title="Sub Group" arrow placement="top">
                                <span>General Public (NIFRA)</span>
                            </Tooltip>
                            <Tooltip title="Share Type" arrow placement="top">
                                <span className={classes.shareType}>
                                    IPO
                                </span>
                            </Tooltip>
                            <Tooltip title="Share Group" arrow placement="top">
                                <span>Ordinary Shares</span>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Paper>
                <Divider/>
                <Paper square elevation={0} className={classes.itemPaper}>
                    <Grid container>
                        <Grid item classes={{item: classes.item}}>
                            <Tooltip title="Company Name" arrow placement="top">
                                <span>CITIZEN INVESTMENT TRUST</span>
                            </Tooltip>
                            <span>-</span>
                            <Tooltip title="Sub Group" arrow placement="top">
                                <span>General Public (CIT)</span>
                            </Tooltip>
                            <Tooltip title="Share Type" arrow placement="top">
                                <span className={classes.shareType}>
                                    RESERVED (RIGHT SHARE)
                                </span>
                            </Tooltip>
                            <Tooltip title="Share Group" arrow placement="top">
                                <span>Ordinary Shares</span>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} component={Paper} elevation={0} style={{backgroundColor: "transparent"}}>
                <Pagination shape="rounded" color="primary" size="small" showFirstButton showLastButton/>
            </Grid>
        </Grid>
    )
}

const MyAsba = () => {

    return (
        <Tabber tabContent={[<CurrentIssue/>,]}
                tabs={["Current Issue", "Apply for Issue", "Application Report", "Old Application Report"]}/>
    )
}

export default MyAsba;