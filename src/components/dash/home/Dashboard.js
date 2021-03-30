import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CardContent from "@material-ui/core/CardContent";
import {CardActions, Paper} from "@material-ui/core";
import DataTable from "react-data-table-component";
import ThemedButton from "../../shared/ThemedButton";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles(() => ({
    cardRoot: {
        display: "flex",
        fontFamily: "Roboto Condensed",
    },
    iconBackground: {
        borderRadius: "50%",
        width: "4rem",
        height: "4rem",
        backgroundColor: "#333a56",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "0.5rem",
    },
    iconRoot: {
        color: "whitesmoke",
    },
    author: {
        backgroundColor: "#57606b",
        padding: "1rem",
        marginBottom: "1rem",
    },
    authorPaper: {
        backgroundColor: "#57606b",
        color: "whitesmoke",
    }
}));

const actions = (
    <ThemedButton primary label="View All"/>
)

const Dashboard = () => {

    const classes = useStyles();

    return (
        <Grid>
            <Grid item container className={classes.author}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} square className={classes.authorPaper}>
                        <Typography variant="h6" component="p">MeroShare Clone</Typography>
                        <Typography variant="body2" component="p">This is a clone app of Meroshare, written in
                            React/Material UI, opensource (MIT). Find the
                            source in the github repo linked below.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} square className={classes.authorPaper}>
                        {/*<AccountCircleOutlinedIcon style={{fontSize: "4rem"}}/>*/}
                        <Typography component="p" variant="h6">Author: <strong>Sanjog Rai</strong> </Typography>
                        <Link href="https://github.com/sombii" target="_blank" rel="noreferrer">
                            <IconButton>
                                <GitHubIcon style={{color: "skyblue"}}/>
                            </IconButton>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sombii" target="_blank" rel="noreferrer">
                            <IconButton>
                                <LinkedInIcon style={{color: "skyblue"}}/>
                            </IconButton>
                        </Link>
                        <Link href="https://sanjogr.com.np" target="_blank" rel="noreferrer">
                            <IconButton>
                                <LanguageIcon style={{color: "skyblue"}}/>
                            </IconButton>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs sm md={6}>
                    <Card elevation={0} classes={{root: classes.cardRoot}}>
                        <CardContent style={{flexGrow: 1}}>
                            <Typography variant="h4" component="p"
                                        style={{fontFamily: "Roboto Condensed"}}>Rs.4,41,677</Typography>
                            <Typography variant="body1" component="span">Total Prev. Share Value</Typography>
                        </CardContent>
                        <CardActions>
                            <div className={classes.iconBackground}>
                                <AssignmentOutlinedIcon classes={{root: classes.iconRoot}}/>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs sm md={6}>
                    <Card elevation={0} classes={{root: classes.cardRoot}}>
                        <CardContent style={{flexGrow: 1}}>
                            <Typography variant="h4" component="p"
                                        style={{fontFamily: "Roboto Condensed"}}>Rs.4,41,677</Typography>
                            <Typography variant="body1" component="span">Total Prev. Share Value</Typography>
                        </CardContent>
                        <CardActions>
                            <div className={classes.iconBackground}>
                                <AssignmentOutlinedIcon classes={{root: classes.iconRoot}}/>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <DataTable columns={[{name: "Scrip", selector: "scrip"}, {name: "Share Value", selector: "value"}]}
                               data={[{scrip: "NRIC", value: "80,000"}, {scrip: "GIC", value: "10,230"},]}
                               title="Top Shares Value" actions={actions}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DataTable columns={[]} data={[]} title="Top Closing Issues" actions={actions}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DataTable columns={[]} data={[]} title="Top Opened Issues" actions={actions}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard;