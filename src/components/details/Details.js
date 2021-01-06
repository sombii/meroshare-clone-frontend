import {Link} from "react-router-dom";
import routes from "../../constants/routes";

const Details = () => {
    return (
        <div>
            i am details. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eum incidunt laboriosam
            maiores non. Consectetur dicta doloribus excepturi explicabo harum, ipsam molestiae placeat repellat tenetur
            totam! Dolorum, maxime, vero? Ducimus!
            <Link to={routes.dashboard}>click here</Link>

        </div>
    )
}

export default Details;