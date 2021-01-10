import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    root: {
        "& *": {
            fontFamily: "Roboto Condensed",
            // color: "#7e7795",
        }
    },
    formRoot: {
        "& > *": {
            display: "block",
            marginTop: "1rem",
        }
    },
}));

const ChangePin = () => {

    const classes = useStyles();

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item>
                <Alert severity="error">
                    Do not share your PIN code and keep this securely for future use.
                </Alert>
                <form onSubmit={submitHandler} className={classes.formRoot}>
                    <TextField id={"pass"} label={"Enter your Password"} variant={"outlined"} size={"small"} required type="password"/>
                    <TextField id={"newPin"} label={"New Transaction PIN"} variant={"outlined"} size={"small"} required type="password"/>
                    <TextField id={"cNewPin"} label={"Confirm New PIN"} variant={"outlined"} size={"small"} required type="password"/>
                    <Button variant={"outlined"} color={"primary"}>Change Transaction PIN</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default ChangePin;