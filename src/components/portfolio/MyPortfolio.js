import DataTable from "react-data-table-component";
import PageHeader from "../shared/PageHeader";


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
        name: "Current Balance",
        selector: "current",
        sortable: true,
    },
    {
        name: "Previous Closing Price",
        selector: "PCP",
        sortable: true,
    },
    {
        name: "Value as of Previous Closing Price",
        selector: "VPCP",
        sortable: true,
    },
    {
        name: "Last Transaction Price (LTP)",
        selector: "LTP",
        sortable: true,
    },
    {
        name: "Value as of LPT",
        selector: "VLPT",
        sortable: true,
    },
]
const data = [
    {
        number: 1,
        scrip: "PLI",
        current: "10",
        PCP: "565",
        VPCP: "5650",
        LTP: "565",
        VLPT: "5650",

    },
    {
        number: 2,
        scrip: "NRIC",
        current: "50",
        PCP: "1800",
        VPCP: "90000",
        LTP: "1800",
        VLPT: "90000",

    },
    {
        number: 1,
        scrip: "NRN",
        current: "10",
        PCP: "345",
        VPCP: "3450",
        LTP: "345",
        VLPT: "3450",

    },
]

const MyPortfolio = () => {
    return (
        <>
            <PageHeader title="My Portfolio" subtitle="View Portfolio" btn/>
            <DataTable columns={columns} data={data} noHeader pagination/>
        </>
    )
}

export default MyPortfolio;