import PageHeader from "../shared/PageHeader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";


const useStyle = makeStyles(() => ({
    table: {
        padding: "0.5rem 1rem"
    },
    tableItem: {
        textAlign: "left",
        // width: "33%",
        color: "#57606b",
        fontSize: "0.8rem"
    },
    thirdTableItem: {
        textAlign: "left",
        width: "33%",
        fontSize: "0.9rem"
    }
}))

const Details = () => {

    const classes = useStyle();

    return (
        <div>
            <PageHeader title={"My Details"} subtitle={"View My Details"} btn/>
            <Paper square>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>DP Name</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>SUNRISE CAPITAL LIMITED</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>BOID</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>1301240000307512</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Name</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Sanjog Rai</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Account Status</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Active</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>BO Sub Status</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>INDIVISUAL-RESIDENT</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Confirmation Waived</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Yes</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Gender</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Male</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Date of Birth</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>1934-09-30</Grid>
                    <Grid item className={classes.thirdTableItem} xs={12} sm={4}>*Year-Month-Day</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Citizenship Number</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>MAKAWANPUR-32-04-71-01252-2011</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>PAN Number</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>N\A</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Father's/Mother's Name</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Shyam/Sita Rai</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Spouse/GrandFather's Name </Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Som Bahadur Rai</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Account Open Date </Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>2019-01-12</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Contact Number</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>9807123304</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Email</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>sanjog@sombex.com</Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Address</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>
                        Makwanpur-RATNAKALI ROAD,HETAUDA-HETAUDA-05, MAKWANPUR,Nepal
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Bank Name</Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>
                        Sunrise Bank Ltd.-Hetauda Branch
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={2} className={classes.table}>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>Account Number </Grid>
                    <Grid item className={classes.tableItem} xs={12} sm={4}>0562187548563420002</Grid>
                </Grid>
                <Divider/>
            </Paper>
        </div>
    )
}

export default Details;