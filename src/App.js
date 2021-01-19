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
                                <Route path={routes.transaction}> <Details/> </Route>
                                <Route path={routes.portfolio}> <Details/> </Route>
                                <Route path={routes.pledgeShare}> <PledgeShare/> </Route>
                                <Route path={routes.bank}> <Details/> </Route>
                                <Route path={routes.asba}> <Details/> </Route>
                                <Route path={routes.purchase}> <Details/> </Route>
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
