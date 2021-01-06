import {Link} from "react-router-dom";
import routes from "../../../constants/routes";

const Dashboard = () => {
    return (
        <div>
            <p>
                i am dash
                <Link to={routes.details}>click here</Link>
            </p>
        </div>
    )
}

export default Dashboard;