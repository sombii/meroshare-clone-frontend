import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/auth/Login";
import routes from "./constants/routes";
import Dashboard from "./components/dash/home/Dashboard";
import Layout from "./layout/Layout";
import Details from "./components/details/Details";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

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
                                <Route path={routes.dashboard}>
                                    <Dashboard/>
                                </Route>
                                <Route path={routes.details}>
                                    <Details/>
                                </Route>
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
