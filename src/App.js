import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/auth/Login";
import routes from "./constants/routes";
import Dashboard from "./components/dash/home/Dashboard";
import Layout from "./layout/Layout";
import Details from "./components/details/Details";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Shares from "./components/shares/Shares";
import OwnProfile from "./components/ownProfile/OwnProfile";
import Edis from "./components/edis/Edis";
import PledgeShare from "./components/pledge/PlegdeShare";
import PurchaseSource from "./components/purchase/PurchaseSource";
import MyAsba from "./components/asba/MyAsba";
import TransactionHistory from "./components/transaction/TransactionHistory";
import BankRequest from "./components/bank/BankRequest";
import MyPortfolio from "./components/portfolio/MyPortfolio";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333a56",
        },
        secondary: {
            main: "#57606b",
        },
    },
    typography: {
        fontFamily: 'Dosis',
    },
    overrides: {
        MuiTooltip: {
            tooltip: {
                color: "#fff",
                backgroundColor: "#333",
                fontSize: "0.8rem"
            },
            arrow: {
                "&::before": {
                    backgroundColor: "#333",
                }
            }
        }
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Switch>
                    <Route path={routes.login}>
                        <Login/>
                    </Route>
                    <Route path={routes.root} exact>
                        <Redirect to={routes.login}/>
                    </Route>
                    <Route>
                        <Layout>
                            <Switch>
                                <Route path={routes.dashboard}> <Dashboard/> </Route>
                                <Route path={routes.details}> <Details/> </Route>
                                <Route path={routes.shares}> <Shares/> </Route>
                                <Route path={routes.transaction}> <TransactionHistory/> </Route>
                                <Route path={routes.portfolio}> <MyPortfolio/> </Route>
                                <Route path={routes.pledgeShare}> <PledgeShare/> </Route>
                                <Route path={routes.bank}> <BankRequest/> </Route>
                                <Route path={routes.asba}> <MyAsba/> </Route>
                                <Route path={routes.purchase}> <PurchaseSource/> </Route>
                                <Route path={routes.edis}> <Edis/> </Route>
                                <Route path={routes.ownProfile}> <OwnProfile/> </Route>
                            </Switch>
                        </Layout>
                    </Route>
                    <Route><NotFound/></Route>
                </Switch>
            </div
            >
        </ThemeProvider>
    );
}

const NotFound = () => {
    return (
        <div>Not found</div>
    )
}

export default App;
