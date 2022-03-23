import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/list">Show Student List</Link>
            {/* anchor tag is similar to the link tag provided by react router dom */}
            {/* <a href="/list.html">Show Student List</a> */}
        </div>
    )
}

export default Home;