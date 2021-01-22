import PageHeader from "../shared/PageHeader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Autocomplete} from "@material-ui/lab";
import InputLabel from "@material-ui/core/InputLabel";
import {dps} from "../../constants/test";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import ThemedButton from "../shared/ThemedButton";

const useStyles = makeStyles(() => ({
    paper: {
        padding: "0.8rem 1.5rem",
        marginBottom: "1.5rem",
        // color: "#151b1e",
        "& *": {
            fontFamily: "Roboto Condensed",
        },
    },
}))

const BankRequest = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PageHeader title="Bank Request"
                        subtitle="Request for bank account changes in demat account (only for cash dividend collection)"/>
            <Paper elevation={0} square classes={{root: classes.paper}}>
                <Typography variant="body2" component="p">Current Bank Account Detail in Demat Account.</Typography>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <p>BOID: <strong>1301370000017823</strong></p>
                        <p>Branch: <strong>Hetauda Branch</strong></p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <p>BO Name: <strong>Sanjog Rai</strong></p>
                        <p>Account Number: <strong>6854944438524001</strong></p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <p>Bank Name: <strong>NIC Asia Bank Ltd.</strong></p>
                        <p>Account Type: <strong>SAVING</strong></p>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} square classes={{root: classes.paper}}>
                <Typography variant="body2" component="p" style={{marginBottom: "1rem",}}>If you want to change current
                    bank account of your demat
                    account for cash dividend collection, please provide correct information and click Request
                    button</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            renderInput={params => <TextField {...params} label="Bank" variant="outlined"/>}
                            options={dps}
                            getOptionLabel={(option) => option.name}
                            selectOnFocus
                            autoSelect
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            renderInput={params => <TextField {...params} label="Branch" variant="outlined"/>}
                            options={dps}
                            getOptionLabel={(option) => option.name}
                            selectOnFocus
                            autoSelect
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Account Number"
                                   variant="outlined" style={{width: "100%",}}
                                   size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl size="small" style={{width: "100%",}} variant="outlined">
                            <InputLabel id="account-type">Account Type</InputLabel>
                            <Select labelId="account-type" label="Account Type">
                                <MenuItem value="SAVING">SAVING</MenuItem>
                                <MenuItem value="CURRENT">CURRENT</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <ThemedButton label="Request" primary/>
                        <ThemedButton label="Reset"/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default BankRequest;