import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownloadOutlined";
import {ButtonGroup} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    container: {
        marginBottom: "2rem"
    },
    heading: {
        color: "#111210",
        fontWeight: "bold",
    },
    subHeading:{
        fontFamily: "Roboto Condensed",
        fontSize: "0.86rem",
    },
    btn: {
        fontSize: "0.7rem",
        verticalAlign: "middle",
        color: "#57606b",
        textTransform: "None",
    }
}))

const PageHeader = ({title, subtitle, btn}) => {
    const classes = useStyle();
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item style={{flexGrow: 1}}>
                <Typography variant="body1" component="h2" className={classes.heading}>{title}</Typography>
                <Typography variant="body2" component="p" className={classes.subHeading}>{subtitle}</Typography>
            </Grid>
            {btn &&
            <Grid item>
                <ButtonGroup>
                    <Button className={classes.btn} startIcon={<CloudDownloadIcon/>} size={"small"}>PDF</Button>
                    <Button className={classes.btn} startIcon={<CloudDownloadIcon/>} size={"small"}>CSV</Button>
                    <Button className={classes.btn} startIcon={<CloudDownloadIcon/>} size={"small"}>Print</Button>
                </ButtonGroup>
            </Grid>
            }
        </Grid>
    )
}

export default PageHeader;