import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Button from "@material-ui/core/Button";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import WcOutlinedIcon from '@material-ui/icons/WcOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const useStyles = makeStyles(() => ({
    root: {
        "& p": {
            fontFamily: "Roboto Condensed",
            color: "#151b1e",
            fontSize: "0.9rem",
            textTransform: "none",
            lineHeight: 1.2,
        },
        "& span": {
            fontWeight: "bold",
        },
        "& svg": {
            color: "#57606b",
            verticalAlign: "middle",
            marginRight: "0.8rem",
        }
    },
    profilePic: {
        width: "5rem",
        height: "5rem",
        padding: "4px",
        border: "1px solid #ddd",
        marginTop: "0.6rem",
    },
    pHead: {
        fontSize: "0.75rem !important",
        // fontWeight: "bold",
        color: "#333a56 !important",
        marginTop: "0.6rem",
    }

}));

const Profile = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} justify={"center"}>
            <Grid item xs={12} sm={2} spacing={1} style={{textAlign: "center"}}>
                <img alt="profile pic" className={classes.profilePic}
                     src="https://meroshare.cdsc.com.np/assets/img/default-image.jpg"
                />
                <Typography variant="body2" component="span"
                            style={{display: "block", margin: "0.7rem auto"}}>@01111229</Typography>
            </Grid>
            <Grid item container xs={12} sm={10} spacing={2} justify={"center"}>
                <Grid item xs={12}>
                    <Typography variant="body1" component="p" className={classes.pHead}>PERSONAL
                        INFORMATION</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><CreditCardIcon/>130142000145346</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><PersonOutlinedIcon/>SANJOG RAI</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><WcOutlinedIcon/>MALE</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><MailOutlineIcon/>sanjog@sombex.com</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><PhoneEnabledOutlinedIcon/>9807123304</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p"><LocationOnOutlinedIcon/>Hetauda-5, Bagmati, Nepal</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.pHead} variant="body1" component="p">ACCOUNT INFORMATION</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Alert severity="info" elevation={1} square
                           action={
                               <Button size={"small"} variant={"contained"}
                                       style={{backgroundColor: "#333a56", color: "#fff", textTransform: "none"}}>
                                   Renew
                               </Button>
                           }
                    >
                        <AlertTitle>INFO</AlertTitle>
                        <Typography component={"p"} variant={"body1"}>Your meroshare account will be expired on
                            2021-09-13.Renew your
                            meroshare account via online payment.</Typography>
                    </Alert>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p">Account Created Date</Typography>
                    <Typography variant="body1" component="span">2012-01-03</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p">Account Renewed Date</Typography>
                    <Typography variant="body1" component="span">2021-02-06</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" component="p">Password Expiry Date</Typography>
                    <Typography variant="body1" component="span">2021-06-09</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile;