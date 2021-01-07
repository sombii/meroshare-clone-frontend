import PageHeader from "../shared/PageHeader";
import {DataGrid} from "@material-ui/data-grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const columns = [
    {field: "id", headerName: "#", sortable: false, width: 80},
    {field: "scrip", headerName: "Scrip"},
    {field: "currentBalance", headerName: "Current Balance", width: 140},
    {field: "pledgeBalance", headerName: "Pledge Balance", width: 120},
    {field: "lockinBalance", headerName: "Lockin Balance", width: 125},
    {field: "freezeBalance", headerName: "Freeze Balance", width: 120},
    {field: "freeBalance", headerName: "Free Balance", width: 120},
    {field: "dematPending", headerName: "Demat Pending", width: 130},
    {field: "Remarks", headerName: "Remarks"},
]

const rows = [
    {id: 1, scrip: "NRIC", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 2, scrip: "SHH", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 3, scrip: "MTI", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 4, scrip: "PLI", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 5, scrip: "RLI", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 6, scrip: "ETC", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 7,scrip: "NTM", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 8, scrip: "CDC", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 9, scrip: "UNI", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 10, scrip: "TUV", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 11, scrip: "RNIC", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 12, scrip: "NRN", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 13, scrip: "GLC", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
    {id: 14, scrip: "NMB", currentBalance: 10, pledgeBalance: 0, lockinBalance: 0, freezeBalance: 0, freeBalance: 0, dematPending:0},
]

const useStyles = makeStyles(() => ({
    table: {
        fontFamily: 'Roboto Condensed',
        borderRadius: 0,
        "& .MuiDataGrid-colCellWrapper": {
            fontSize: "0.8rem",
            color: "#57606b",
        },
    },
}))

const Shares = () => {

    const classes = useStyles();

    return (
        <div>
            <PageHeader title={"My Shares"} subtitle={"View My Share Details"} btn/>
            <Paper style={{height: "400px"}} square elevation={0}>
                <DataGrid columns={columns} rows={rows} pageSize={10} rowHeight={35} className={classes.table}/>
            </Paper>
        </div>
    )
}

export default Shares;