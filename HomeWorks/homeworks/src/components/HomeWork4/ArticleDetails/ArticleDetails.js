import { Link, useParams } from "react-router-dom";
import './ArticleDetails.css';

function ArticleDetails({ articles }) {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return (
            <div>
                <h2>Article not found</h2>
                <Link to='/articles'>Articles list page</Link>
            </div>
        );
    }

    return (
        <div className="article-wrap">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link to='/articles'>Articles list page</Link>
        </div>
    );
}

export default ArticleDetails;