import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/auth/Login";
import routes from "./constants/routes";
import Dashboard from "./components/dash/home/Dashboard";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path={routes.login}>
                    <Login/>
                </Route>
                <Route path={routes.dashboard}>
                    <Dashboard/>
                </Route>
                <Route path={routes.root} exact>
                    <Redirect to={routes.login}/>
                </Route>
                <Route><NotFound/></Route>
            </Switch>
        </div>
    );
}

const NotFound = () => {
    return (
        <div>Not found</div>
    )
}

export default App;
