import PageHeader from "../shared/PageHeader";
import Paper from "@material-ui/core/Paper";
import {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import ThemedButton from "../shared/ThemedButton";
import {makeStyles} from "@material-ui/core/styles";
import DataTable from "react-data-table-component"
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({
    filterPaper: {
        padding: "0.7rem 1.5rem",
    },
    formControl: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
}))

const columns = [
    {
        name: "#",
        selector: "number",
        sortable: false,
        width: "3rem",
    },
    {
        name: "Scrip",
        selector: "scrip",
        sortable: true,
        maxWidth: "6rem",
        minWidth: "3rem",
        compact: "true"
    },
    {
        name: "Transaction Date",
        selector: "date",
        sortable: true,
    },
    {
        name: "Credit Quantity",
        selector: "credit",
        sortable: true,
        right: true,
    },
    {
        name: "Debit Quantity",
        selector: "debit",
        sortable: true,
        right: true,
    },
    {
        name: "Balance After Transaction",
        selector: "balance",
        sortable: true,
        right: true,
    },
    {
        name: "History Description",
        selector: "description",
        sortable: true,
        grow: 8,
        wrap: true,
    },
]

const data = [
    {
        number: 1,
        scrip: "PLI",
        date: "2021-01-01",
        credit: "10",
        debit: "-",
        balance: "10",
        description: "INITIAL PUBLIC OFFERING 00000189 PLIIPO_77/78 CREDIT",
    },
    {
        number: 2,
        scrip: "NRN",
        date: "2020-08-05",
        credit: "10",
        debit: "-",
        balance: "10",
        description: "INITIAL PUBLIC OFFERING 00000189 GICIPO_77/78 CREDIT",
    },
    {
        number: 3,
        scrip: "GIC",
        date: "2020-01-01",
        credit: "10",
        debit: "-",
        balance: "10",
        description: "INITIAL PUBLIC OFFERING 00000189 PLIIPO_77/78 CREDIT",
    },
    {
        number: 4,
        scrip: "NRIC",
        date: "2020-06-01",
        credit: "50",
        debit: "-",
        balance: "50",
        description: "INITIAL PUBLIC OFFERING 00000189 NRICIPO_76/77 CREDIT",
    },
]


const TransactionHistory = () => {

    const classes = useStyles();

    const [filterValue, setFilterValue] = useState("scrip");

    const filterHandler = (e) => {
        setFilterValue(e.target.value);
    }

    return (
        <div>
            <PageHeader title={"Transaction History"} subtitle={"View Transaction History"}/>
            <Paper square className={classes.filterPaper} elevation={1}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="span" style={{marginRight: "5rem", alignSelf: "center", fontWeight: "bold",}}>
                        Filter By
                    </FormLabel>
                    <RadioGroup row aria-label="filter"
                                name="filter1"
                                value={filterValue}
                                onChange={filterHandler}
                    >
                        <FormControlLabel control={<Radio/>} label="Scrip" value="scrip"/>
                        <FormControlLabel control={<Radio/>} label="Date" value="date"/>
                    </RadioGroup>
                </FormControl>
                {filterValue === "scrip" &&
                <div>
                    <TextField label="Scrip" variant="outlined" size="small" style={{margin: "1rem 0"}}/>
                    <div>
                        <ThemedButton primary label="Search"/>
                        <ThemedButton label="Reset"/>
                    </div>
                </div>
                }
            </Paper>
            {filterValue === "date" &&
            <Card style={{marginTop: "2rem",}}>
                <DataTable
                    noHeader
                    columns={columns}
                    data={data}
                />
            </Card>
            }
        </div>
    )
}

export default TransactionHistory;