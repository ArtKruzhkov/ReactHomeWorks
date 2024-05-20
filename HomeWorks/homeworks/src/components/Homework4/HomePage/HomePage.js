import { Link } from "react-router-dom";
import './HomePage.css';

function HomePage() {
    return (
        <div className="homePage">
            <h1>Home page</h1>
            <div className="links-wrap">
                <Link to='/about'>About page</Link>
                <Link to='/articles'>Articles list page</Link>
            </div>
        </div>
    );
}

export default HomePage;