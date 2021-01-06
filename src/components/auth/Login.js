import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import colors from "../../constants/colors";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {dps} from "../../constants/test";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {useHistory} from "react-router";
import routes from "../../constants/routes";

const styles = () => ({
    container: {
        backgroundColor: colors.primary,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer: {
        backgroundColor: colors.primary,
        padding: "2.5rem 2.5rem 1.5rem",
        borderRadius: "0.4rem",
        maxWidth: "25rem"
    },
    mainLogo: {
        width: "8rem",
        display: "block",
        margin: "1rem auto 2rem"
    },
    textField: {
        width: "100%",
        margin: "1rem 0",
        backgroundColor: "#fff",
        borderRadius: "0.25rem"
    }
})

const Login = ({classes}) => {

    const history = useHistory()

    const submitHandler = e => {
        e.preventDefault();
        //do some async call and check user
        //user good and goto dashboard
        history.push(routes.dashboard)
    }

    return (
        <Container className={classes.container} maxWidth={"xl"}>
            <Paper className={classes.loginContainer} elevation={3}>
                <img className={classes.mainLogo} src="assets/main_logo.jpg" alt="logo"/>
                <form onSubmit={submitHandler}>
                    <Autocomplete
                        id="dp list"
                        options={dps}
                        getOptionLabel={(option) => option.name}
                        selectOnFocus
                        autoSelect
                        className={classes.label}
                        // className={styles.dpList}
                        renderInput={(params) =>
                            <TextField {...params} label={"Depository Participants"} variant={"filled"}
                                       className={classes.textField} size={"small"}

                            />}
                    />
                    <TextField label={"Username"}
                               variant={"filled"}
                               size={"small"}
                               className={classes.textField}
                    />

                    <TextField label={"Password"}
                               variant={"filled"}
                               className={classes.textField}
                               size={"small"}
                    />
                    <Button style={{
                        padding: "0.7rem",
                        margin: "1rem 0",
                        width: "100%",
                        backgroundColor: "#5e6ea7",
                        color: "white",
                        verticalAlign: "middle",
                        textTransform: "none"
                    }}
                            variant={"contained"}
                            type="submit"
                    > Login
                    </Button>
                </form>
                <Typography component={"p"} variant="subtitle2"
                            style={{color: "#aaa"}}>@{new Date().getFullYear()}&nbsp;
                    <Link href="https://github.com/sombii/" target="_blank" rel="noreferrer"
                          style={{color: '#fff'}}>Sombii</Link>. No Rights Reserved.
                </Typography>
            </Paper>
        </Container>
    )
}

export default withStyles(styles)(Login);