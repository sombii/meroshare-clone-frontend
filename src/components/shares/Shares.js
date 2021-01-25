import PageHeader from "../shared/PageHeader";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import DataTable from "react-data-table-component";

const columns = [
    {selector: "id", name: "#", sortable: false, width: "3rem",},
    {selector: "scrip", name: "Scrip", compact: true, maxWidth: "3rem", minWidth: "3rem",},
    {selector: "currentBalance", name: "Current Balance", right: true},
    {selector: "pledgeBalance", name: "Pledge Balance", right: true},
    {selector: "lockinBalance", name: "Lockin Balance", right: true},
    {selector: "freezeBalance", name: "Freeze Balance", right: true},
    {selector: "freeBalance", name: "Free Balance", right: true},
    {selector: "dematPending", name: "Demat Pending", right: true},
    {selector: "Remarks", name: "Remarks"},
]

const data = [
    {
        id: 1,
        scrip: "NRIC",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 2,
        scrip: "SHH",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 3,
        scrip: "MTI",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 4,
        scrip: "PLI",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 5,
        scrip: "RLI",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 6,
        scrip: "ETC",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 7,
        scrip: "NTM",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 8,
        scrip: "CDC",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 9,
        scrip: "UNI",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 10,
        scrip: "TUV",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 11,
        scrip: "RNIC",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 12,
        scrip: "NRN",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 13,
        scrip: "GLC",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
    {
        id: 14,
        scrip: "NMB",
        currentBalance: 10,
        pledgeBalance: 0,
        lockinBalance: 0,
        freezeBalance: 0,
        freeBalance: 0,
        dematPending: 0
    },
]

const useStyles = makeStyles(() => ({
}))

const Shares = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PageHeader title={"My Shares"} subtitle={"View My Share Details"} btn/>
            <Paper square elevation={0}>
                <DataTable data={data} columns={columns} pagination noHeader />
            </Paper>
        </div>
    )
}

export default Shares;