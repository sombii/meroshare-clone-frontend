import Tabber from "../shared/Tabber";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "5rem",
        "& p": {
            marginTop: "2rem",
        }
    }
}))

const NoRecordsFound = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="assets/no-records.png" alt="no records"/>
            <Typography variant={"body1"} component={"p"}> No Record(s) Found</Typography>
        </div>
    )
}

const PledgeShare = () => {
    const tabContent = [<NoRecordsFound/>];
    return (
        <>
            <Tabber tabs={["Pledgor"]} tabContent={tabContent}/>
        </>
    )
}

export default PledgeShare;
export {NoRecordsFound};