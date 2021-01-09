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

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Dosis', 'sans-serif'].join(','),
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
                                <Route path={routes.pledgeShare}> <Details/> </Route>
                                <Route path={routes.bank}> <Details/> </Route>
                                <Route path={routes.asba}> <Details/> </Route>
                                <Route path={routes.purchase}> <Details/> </Route>
                                <Route path={routes.edis}> <Details/> </Route>
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
