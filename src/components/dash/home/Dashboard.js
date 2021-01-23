import {Link} from "react-router-dom";
import routes from "../../../constants/routes";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CardContent from "@material-ui/core/CardContent";
import {CardActions} from "@material-ui/core";
import DataTable from "react-data-table-component";
import ThemedButton from "../../shared/ThemedButton";

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
    }
}));

const actions = (
    <ThemedButton primary label="View All"/>
)

const Dashboard = () => {

    const classes = useStyles();

    return (
        <Grid>
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
                               data={[{scrip: "NRIC", value: "80,000"},{scrip: "GIC", value: "10,230"},]}
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