import "date-fns";
import Tabber from "../shared/Tabber";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import {useState} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {FormControl, InputLabel} from "@material-ui/core";
import ThemedButton from "../shared/Button";

const useStyles = makeStyles(() => ({
    gridRoot: {
        padding: "0.5rem 1.5rem",
        "& *": {
            fontFamily: "Roboto Condensed",
        }
    },
}));

const TransferRequestReport = () => {

    const [sFDate, setSFDate] = useState(Date.now());

    const classes = useStyles();

    const submitHandler = e => {
        e.preventDefault();
    }

    const dateChangeHandler = (date) => {
        setSFDate(date);
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={3} classes={{root: classes.gridRoot, item: classes.item}}>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Settlement Date Form"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Settlement Date Form"
                        value={sFDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Settlement Date To"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Settlement Date To"
                        value={sFDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Request Date Form"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Request Date Form"
                        value={sFDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Request Date To"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Request Date To"
                        value={sFDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl style={{width: "100%"}} variant={"outlined"}>
                        <InputLabel id="status_select">Status</InputLabel>
                        <Select value="All" labelId="status_select" label="Status">
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="">Acknowledged</MenuItem>
                            <MenuItem value="">Pending</MenuItem>
                            <MenuItem value="">Processed</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement ID" variant={"outlined"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Script" variant={"outlined"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="CM ID" variant={"outlined"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12}>
                    <ThemedButton primary label="Search"/>
                    <ThemedButton label="Reset"/>
                </Grid>
            </Grid>
        </form>
    )
}

const NoDeliveryTrades = () => {

    const [nodelDate, setNodelDate] = useState(Date.now());

    const classes = useStyles();

    const submitHandler = e => {
        e.preventDefault();
    }

    const dateChangeHandler = date => {
        setNodelDate(date)
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={3} classes={{root: classes.gridRoot, item: classes.item}}>
                <Grid item xs={12} sm={4}>
                    <TextField label="Scrip" variant={"outlined"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Nodel Form"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Settlement Date Form"
                        value={nodelDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Nodel To"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Settlement Date To"
                        value={nodelDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Trade Form"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Trade Form"
                        value={nodelDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Trade To"
                        variant="inline"
                        format="dd/MM/yyyy"
                        id="Request Date To"
                        value={nodelDate}
                        onChange={dateChangeHandler}
                        disableFuture
                        style={{width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ThemedButton primary label="Search"/>
                    <ThemedButton label="Reset"/>
                </Grid>
            </Grid>
        </form>

    )
}

const Edis = () => {

    const tabs = ["Transfer Request report", "Transfer Shares", "No Delivery Trades"]
    const tabContent = [<TransferRequestReport/>, "lol", <NoDeliveryTrades/>,]

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Tabber tabs={tabs} tabContent={tabContent}/>
        </MuiPickersUtilsProvider>
    )
}

export default Edis;