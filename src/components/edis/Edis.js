import Tabber from "../shared/Tabber";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    gridRoot: {
        padding: "0.5rem 1rem",
        "& *": {
            fontFamily: "Roboto Condensed",
        }
    },
}));

const TransferRequestReport = () => {

    const classes = useStyles();

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container spacing={3} classes={{root: classes.gridRoot, item: classes.item}}>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Settlement Date Form" variant={"outlined"} size={"small"}
                               style={{width: "100%"}}/>
                </Grid>
            </Grid>
        </form>
    )
}

const Edis = () => {

    const tabs = ["Transfer Request report", "Transfer Shares", "No Delivery Trades"]
    const tabContent = [<TransferRequestReport/>, "lol", "lmfao",]

    return (
        <>
            <Tabber tabs={tabs} tabContent={tabContent}/>
        </>
    )
}

export default Edis;