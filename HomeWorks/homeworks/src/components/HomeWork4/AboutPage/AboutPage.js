import { Link } from "react-router-dom";
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="aboutPage">
            <h1>About page</h1>
            <Link to='/'>Home page</Link>
        </div>
    );
}

export default AboutPage;