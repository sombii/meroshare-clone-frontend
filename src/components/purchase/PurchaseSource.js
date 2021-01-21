import Tabber from "../shared/Tabber";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ThemedButton from "../shared/ThemedButton";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    gridRoot: {
        marginTop: "1rem",
        padding: "0.5rem 1.5rem",
        "& *": {
            fontFamily: "Roboto Condensed",
        }
    },
}));

const PurchaseContent = () => {

    const classes = useStyles();

    return (
        <Paper elevation={0}>
            <Grid container spacing={3} classes={{root: classes.gridRoot}}>
                <Grid item>
                    <TextField label="Scrip" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <ThemedButton label="Search" primary/>
                    <ThemedButton label="Reset"/>
                </Grid>
            </Grid>
        </Paper>
    )
}

const PurchaseSource = () => {

    return (
        <Tabber tabContent={[<PurchaseContent/>,]} tabs={["Purchase Source"]}/>
    )
}

export default PurchaseSource;