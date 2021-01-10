import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        "& > *": {
            fontFamily: "Roboto Condensed",
            color: "#7e7795",
        }
    },
    formRoot: {
        "& > *": {
            display: "block",
            marginBottom: "1rem",
        }
    },
    policyRoot: {
        "& p": {
            margin: 0,
        }
    }
}));

const ChangePassword = () => {

    const classes = useStyles();

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item>
                <form onSubmit={submitHandler} className={classes.formRoot}>
                    <TextField id={"old"} label={"Old Password"} variant={"outlined"} size={"small"} required type="password"/>
                    <TextField id={"new"} label={"New Password"} variant={"outlined"} size={"small"} required type="password"/>
                    <TextField id={"cNew"} label={"Confirm New Password"} variant={"outlined"} size={"small"} required type="password"/>
                    <Button variant={"outlined"} color={"primary"}>Change Password</Button>
                </form>
            </Grid>
            <Grid item className={classes.policyRoot}>
                <p>Password Policies</p>
                <ul>
                    <li>At Least 3 Number of lowercase letters in password</li>
                    <li>Password Maximum Length is 15</li>
                    <li>Password Minimum Length is 4</li>
                    <li>Password must be changed on every 180 days</li>
                </ul>
            </Grid>
        </Grid>
    )
}

export default ChangePassword;